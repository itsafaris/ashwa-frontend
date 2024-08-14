import { createContext, useContext } from "react";
import { INTERNAL_Snapshot, proxy, ref, snapshot, useSnapshot } from "valtio";
import { ISelectorType, LogicDefinition, SlideProps, TrackingEventCallback } from "../public/types";
import { getPosInBounds, validateEmail } from "./utils";
import { getSlideProperties } from "./tracking";

// E.g. GetSlideStateType<'multi'>
export type GetSlideStateType<T extends ISelectorType> = Extract<SelectorState, { type: T }>;

// re-export valtio utility to create a snapshot type
export type Snapshot<T> = INTERNAL_Snapshot<T>;

export type SelectorState =
  | MultiState
  | SingleState
  | ShortTextState
  | DateState
  | TimeState
  | LocationState
  | LoadingState
  | FillerState
  | EmailState
  | AgeState
  | HeightState
  | WeightState;

export type MultiState = {
  type: "multi";
  value?: SelectorValue[];
} & BaseSelectorState;

export type SingleState = {
  type: "single";
  value?: SelectorValue;
} & BaseSelectorState;

export type ShortTextState = {
  type: "short-text";
  value?: string;
} & BaseSelectorState;

export type EmailState = {
  type: "email";
  value?: string;
} & BaseSelectorState;

export type LocationState = {
  type: "location";
  value?: LocationValue;
} & BaseSelectorState;

export type LocationValue = Readonly<{
  formattedText: string;
  placeID: string;
  lat: number;
  long: number;
}>;

export type DateState = {
  type: "date";
  value?: DateValue;
} & BaseSelectorState;

export type TimeState = {
  type: "time";
  value?: TimeValue;
} & BaseSelectorState;

export type LoadingState = {
  type: "loading";
  progressValue?: number;
  isComplete?: boolean;
} & BaseSelectorState;

export type FillerState = {
  type: "filler";
} & BaseSelectorState;

export type AgeState = {
  type: "age";
  value?: number;
} & BaseSelectorState;

export type HeightState = {
  type: "height";
  value?: HeightValue;
} & BaseSelectorState;

export type WeightState = {
  type: "weight";
  value?: number | null;
} & BaseSelectorState;

export type BaseSelectorState = {
  attempts: number;
  confirmed: boolean;
  validation: SelectorValidation;
};

export type SelectorValidation =
  | {
      isValid: true;
    }
  | {
      isValid: false;
      message: string;
    };

export type SelectorValue = Readonly<{ value: string; idx: number }>;

export type DateValue = { year: number; month: number; day: number };

export type UnitSystem = "imperial" | "metric";

export type HeightValue = {
  ft: number | null; // 5
  in: number | null; // 6
  cm: number | null; // 155
};

const QUICK_TIME_PERIODS = ["Morning", "Noon", "Evening", "Night"] as const;

export type QuickTimePeriod = (typeof QUICK_TIME_PERIODS)[number];

export type TimeValue = {
  hour: number;
  minute: number;
  meridiem: "am" | "pm";
  quickPeriod?: QuickTimePeriod;
};

export type SelectorDescriptor = {
  id: string;
  type: ISelectorType;
};

export type SegmentDescriptor = {
  title: string;
  slideCount: number;
};

export type QuizObject = ReturnType<typeof createQuizState>;

export type QuizState = QuizObject["state"];

export type QuizSlideState = QuizState["slideStateByID"];

function createSlideState(type: ISelectorType): SelectorState {
  return {
    type,
    attempts: 0,
    confirmed: false,
    validation: {
      isValid: true,
    },
  };
}

export function createQuizState(input: {
  initialState?: {
    slideID?: string;
  };
  // segments: SegmentDescriptor[];
  // slides: SlideProps[];
  onSlideSubmitted?: (slideState: {
    id: string;
    slideState: SelectorState;
    quizObject: QuizObject;
  }) => void;
  onTrackingEvent?: TrackingEventCallback;
}) {
  // let validationError = validateSegments(input.segments);
  // if (validationError) {
  //   throw new Error(validationError);
  // }

  // validationError = validateSlides(input.slides);
  // if (validationError) {
  //   throw new Error(validationError);
  // }

  const state = proxy({
    currentSlideID: input.initialState?.slideID,
    direction: 0, // -1 or 1
    slideStateByID: {} as Record<string, SelectorState>,
    unitSystem: "imperial" as "imperial" | "metric",
    segments: [] as SegmentDescriptor[],
    slides: [] as SlideProps[],

    get currentIdx() {
      return this.slides.findIndex((s) => s.id === this.currentSlideID);
    },

    get slideCount() {
      return Object.keys(this.slideStateByID).length;
    },

    get segmentsFull() {
      let accLength = 0;
      return this.segments.map((s) => {
        const start = accLength;
        const end = accLength + s.slideCount;
        const bounds = [start, end] as const;
        accLength = end;

        return {
          bounds: bounds,
          ...s,
        };
      });
    },

    get currentSlide(): SlideProps | undefined {
      return this.slides[this.currentIdx];
    },

    get currentSlideState() {
      if (!this.currentSlide) {
        return;
      }
      if (!this.slideStateByID[this.currentSlide.id]) {
        this.slideStateByID[this.currentSlide.id] = createSlideState(this.currentSlide.type);
      }
      const s = this.slideStateByID[this.currentSlide.id];
      return {
        ...s,
        isValid: isSlideStateValid(s, state),
      };
    },

    get currentSegmentIdx() {
      return this.segmentsFull.findIndex((s) => {
        const pos = getPosInBounds(this.currentIdx, s.bounds);
        return pos === "inside";
      });
    },

    get currentSegment() {
      return this.segmentsFull[this.currentSegmentIdx];
    },
  });

  const actions = {
    registerSlide(slide: SlideProps) {
      if (state.slides.some((s) => s.id === slide.id)) {
        // throw new Error(`duplicate slide id: ${slide.id}`);
        return;
      }

      state.slides.push(ref(slide));
      state.slideStateByID[slide.id] = createSlideState(slide.type);

      if (!state.currentSlideID) {
        actions.goToSlideID(slide.id);
      }
    },

    registerSegment(segment: SegmentDescriptor) {
      if (state.segments.some((s) => s.title === segment.title)) {
        // throw new Error(`duplicate slide id: ${segment.title}`);
        return;
      }
      state.segments.push(segment);
    },

    checkQuestion(): boolean {
      if (!state.currentSlide || !state.currentSlideState) {
        return false;
      }

      const currentSlideState = state.slideStateByID[state.currentSlideID!];
      const validation = isSlideStateValid(state.currentSlideState, state);

      if (!validation.isValid) {
        currentSlideState.attempts++;
        currentSlideState.confirmed = false;
        currentSlideState.validation = {
          isValid: false,
          message: validation.message,
        };
        return false;
      }

      currentSlideState.confirmed = true;
      currentSlideState.attempts = 0;
      currentSlideState.validation = {
        isValid: true,
      };

      return true;
    },

    /** Validate everything and go to next question */
    submitQuestion(): boolean {
      if (!state.currentSlide || !state.currentSlideState) {
        return false;
      }

      const isValid = this.checkQuestion();
      if (!isValid) {
        return false;
      }

      const currentSlideState = state.slideStateByID[state.currentSlideID!];
      const currentSlide = state.currentSlide;

      input.onSlideSubmitted?.({
        id: currentSlide.id,
        slideState: currentSlideState,
        quizObject: { state, actions },
      });

      input.onTrackingEvent?.({
        name: "slide-submitted",
        properties: {
          ...getSlideProperties(currentSlide),
          slideValue: "value" in currentSlideState ? currentSlideState.value : null,
        },
      });

      if (currentSlide.type === "single" && currentSlide.logic) {
        const slideState = state.currentSlideState as SingleState;
        const slideId = evalLogic(slideState, currentSlide.logic);
        if (slideId != null) {
          actions.goToSlideID(slideId);
          return true;
        }
      }

      actions.goToNext();
      return true;
    },

    skipQuestion() {
      const slide = state.currentSlide;
      if (!slide) {
        return;
      }
      if (!slide.optional) {
        throw new Error("only optional question can be skipped");
      }

      input.onTrackingEvent?.({
        name: "slide-skipped",
        properties: {
          ...getSlideProperties(slide),
        },
      });

      actions.goToNext();
    },

    /** Go to next question without any validation */
    goToNext() {
      actions.goToSlideIdx(state.currentIdx + 1);
    },

    goToPrev() {
      actions.goToSlideIdx(state.currentIdx - 1);
    },

    goToSlideID(id: string) {
      const idx = state.slides.findIndex((s) => s.id === id);
      actions.goToSlideIdx(idx);
    },

    goToSlideIdx(idx: number) {
      if (idx >= state.slides.length || idx < 0) {
        return;
      }

      const direction = idx < state.currentIdx ? -1 : 1;
      state.direction = direction;
      const nextSlide = state.slides[idx];
      state.currentSlideID = nextSlide.id;
    },

    toggleRadioOption(selectorID: string, value: SelectorValue) {
      const slideState = state.slideStateByID[selectorID] as SingleState;
      slideState.value = value;
      setTimeout(() => {
        actions.submitQuestion();
      }, 200);
    },

    toggleMultiOption(selectorID: string, value: SelectorValue) {
      const slideState = state.slideStateByID[selectorID] as MultiState;
      if (!slideState.value) {
        slideState.value = [];
      }
      const optionIdx = slideState.value.findIndex((o) => o.value === value.value);
      if (optionIdx === -1) {
        slideState.value.push(value);
      } else {
        slideState.value.splice(optionIdx, 1);
      }
    },

    setUnitSystem(s: UnitSystem) {
      state.unitSystem = s;
    },

    setShortTextInputValue(selectorID: string, value: string) {
      const slideState = state.slideStateByID[selectorID] as ShortTextState;
      slideState.value = value;
    },

    setEmailValue(selectorID: string, value: string) {
      const slideState = state.slideStateByID[selectorID] as EmailState;
      slideState.value = value;
    },

    setDateValue(selectorID: string, value: DateValue) {
      const slideState = state.slideStateByID[selectorID] as DateState;
      slideState.value = value;
    },

    setTimeValue(selectorID: string, value: TimeValue) {
      const slideState = state.slideStateByID[selectorID] as TimeState;
      slideState.value = value;
    },

    setLocationValue(selectorID: string, value: LocationValue | undefined) {
      const slideState = state.slideStateByID[selectorID] as LocationState;
      slideState.value = value == null ? value : ref(value);
    },

    setLoadingStateComplete(selectorID: string, value: boolean) {
      const slideState = state.slideStateByID[selectorID] as LoadingState;
      slideState.isComplete = value;
    },

    setLoadingStateProgress(selectorID: string, value: number) {
      const slideState = state.slideStateByID[selectorID] as LoadingState;
      slideState.progressValue = value;
    },

    setAgeValue(selectorID: string, value: number) {
      const slideState = state.slideStateByID[selectorID] as AgeState;
      slideState.value = value;
    },

    setWeightValue(selectorID: string, value: number | null) {
      const slideState = state.slideStateByID[selectorID] as WeightState;
      slideState.value = value;
    },

    setHeightValue(selectorID: string, value: Partial<HeightValue>) {
      const slideState = state.slideStateByID[selectorID] as HeightState;
      // @ts-expect-error
      slideState.value = {
        ...slideState.value,
        ...value,
      };
    },
  };

  return { state, actions };
}

type QuizCtxType = QuizObject;

export function isSlideStateValid(
  slideState: SelectorState,
  quizState: QuizState
): SelectorValidation {
  switch (slideState.type) {
    case "single": {
      return slideState.value != null
        ? { isValid: true }
        : { isValid: false, message: "Please select one option" };
    }
    case "multi": {
      return slideState.value != null && slideState.value.length > 0
        ? { isValid: true }
        : { isValid: false, message: "Please select one or more options" };
    }
    case "date": {
      return slideState.value != null
        ? { isValid: true }
        : { isValid: false, message: "Please enter the date" };
    }
    case "location": {
      return slideState.value != null
        ? { isValid: true }
        : { isValid: false, message: "Please enter the location" };
    }
    case "short-text": {
      return slideState.value != null && slideState.value.trim() !== ""
        ? { isValid: true }
        : { isValid: false, message: "Please enter value" };
    }
    case "email": {
      return slideState.value != null && validateEmail(slideState.value)
        ? { isValid: true }
        : { isValid: false, message: "Please enter a valid email address" };
    }
    case "age": {
      if (slideState.value == null) {
        return {
          isValid: false,
          message: "Please enter age",
        };
      }

      if (slideState.value < 18) {
        return {
          isValid: false,
          message: "Age must be 18 or greater",
        };
      }

      if (slideState.value > 120) {
        return {
          isValid: false,
          message: "Age cannot be greater than 120.",
        };
      }

      return {
        isValid: true,
      };
    }
    case "height": {
      if (slideState.value == null) {
        return {
          isValid: false,
          message: "Please enter the height",
        };
      }

      if (quizState.unitSystem === "imperial") {
        if (slideState.value.ft == null) {
          return {
            isValid: false,
            message: "Please enter the height in feet",
          };
        }

        if (slideState.value.ft < 4) {
          return {
            isValid: false,
            message: "Height in feet must be 4 or greater",
          };
        }

        if (slideState.value.ft > 8) {
          return {
            isValid: false,
            message: "Height in feet cannot be greater than 8",
          };
        }

        if (slideState.value.in == null) {
          return {
            isValid: false,
            message: "Please enter the height in inches",
          };
        }

        if (slideState.value.in < 0) {
          return {
            isValid: false,
            message: "Height in inches must be 0 or greater",
          };
        }

        if (slideState.value.in > 11) {
          return {
            isValid: false,
            message: "Height in inches cannot be greater than 11",
          };
        }

        return {
          isValid: true,
        };
      }

      if (slideState.value.cm == null) {
        return {
          isValid: false,
          message: "Please enter the height",
        };
      }

      if (slideState.value.cm < 140) {
        return {
          isValid: false,
          message: "Height must be 140 or greater",
        };
      }

      if (slideState.value.cm > 250) {
        return {
          isValid: false,
          message: "Height cannot be greater than 250",
        };
      }

      return {
        isValid: true,
      };
    }
    case "weight": {
      if (slideState.value == null) {
        return {
          isValid: false,
          message: "Please enter the weight",
        };
      }

      if (quizState.unitSystem === "imperial") {
        if (slideState.value < 88) {
          return {
            isValid: false,
            message: "Weight must be 88 or greater",
          };
        }

        if (slideState.value > 700) {
          return {
            isValid: false,
            message: "Weight cannot be greater than 700",
          };
        }

        return {
          isValid: true,
        };
      }

      if (slideState.value < 40) {
        return {
          isValid: false,
          message: "Weight must be 40 or greater",
        };
      }

      if (slideState.value > 300) {
        return {
          isValid: false,
          message: "Weight cannot be greater than 300",
        };
      }

      return {
        isValid: true,
      };
    }
    default: {
      return {
        isValid: true,
      };
    }
  }
}

export const QuizCtx = createContext<QuizCtxType>(null as any);

export type QuizSnapshot = ReturnType<typeof useQuizSnapshot>;

export function useQuizSnapshot() {
  return useSnapshot(useContext(QuizCtx).state);
}

export function useQuizActions() {
  return useContext(QuizCtx).actions;
}

function evalLogic(slideState: SingleState, logic: LogicDefinition) {
  for (const gate of logic) {
    if (gate.optionIdx === slideState.value?.idx) {
      return gate.slideID;
    }
  }
}
