import { isSlideStateValid, QuizState, SelectorState } from "./state";

describe("Slide state validation", () => {
  test("age", () => {
    function validateAge(value?: number) {
      return isSlideStateValid(
        {
          type: "age",
          value,
        } as SelectorState,
        {} as QuizState
      );
    }

    expect(validateAge().isValid).toEqual(false);
    expect(validateAge(5).isValid).toEqual(false);
    expect(validateAge(18).isValid).toEqual(true); // min
    expect(validateAge(66).isValid).toEqual(true);
    expect(validateAge(121).isValid).toEqual(false); // max
  });

  test("email", () => {
    function validateEmail(value?: string) {
      return isSlideStateValid(
        {
          type: "email",
          value,
        } as SelectorState,
        {} as QuizState
      );
    }

    expect(validateEmail().isValid).toEqual(false);
    expect(validateEmail("email").isValid).toEqual(false);
    expect(validateEmail("email@gmail").isValid).toEqual(false);
    expect(validateEmail("email@gmail.com").isValid).toEqual(true);
  });

  test("height", () => {
    function validateHeightMetric(value?: { cm?: number }) {
      return isSlideStateValid(
        {
          type: "height",
          value,
        } as SelectorState,
        {
          unitSystem: "metric",
        } as QuizState
      );
    }

    expect(validateHeightMetric().isValid).toEqual(false);
    expect(validateHeightMetric({ cm: undefined }).isValid).toEqual(false);
    expect(validateHeightMetric({ cm: 0 }).isValid).toEqual(false);
    expect(validateHeightMetric({ cm: 10 }).isValid).toEqual(false);
    expect(validateHeightMetric({ cm: 140 }).isValid).toEqual(true); // min
    expect(validateHeightMetric({ cm: 250 }).isValid).toEqual(true); // max
    expect(validateHeightMetric({ cm: 300 }).isValid).toEqual(false);

    function validateHeightImperial(value?: { ft?: number; in?: number }) {
      return isSlideStateValid(
        {
          type: "height",
          value,
        } as SelectorState,
        {
          unitSystem: "imperial",
        } as QuizState
      );
    }

    expect(validateHeightImperial().isValid).toEqual(false);
    expect(validateHeightImperial({ ft: undefined, in: undefined }).isValid).toEqual(false);
    expect(validateHeightImperial({ ft: 0, in: 0 }).isValid).toEqual(false);
    expect(validateHeightImperial({ ft: 3, in: 0 }).isValid).toEqual(false);
    expect(validateHeightImperial({ ft: 4, in: 0 }).isValid).toEqual(true);
    expect(validateHeightImperial({ ft: 4, in: 12 }).isValid).toEqual(false);
    expect(validateHeightImperial({ ft: 9, in: 12 }).isValid).toEqual(false);
  });

  test("weight", () => {
    function validateWeightMetric(value?: number) {
      return isSlideStateValid(
        {
          type: "weight",
          value,
        } as SelectorState,
        {
          unitSystem: "metric",
        } as QuizState
      );
    }

    expect(validateWeightMetric().isValid).toEqual(false);
    expect(validateWeightMetric(10).isValid).toEqual(false);
    expect(validateWeightMetric(40).isValid).toEqual(true); // min
    expect(validateWeightMetric(300).isValid).toEqual(true); // max
    expect(validateWeightMetric(301).isValid).toEqual(false);

    function validateWeightImperial(value?: number) {
      return isSlideStateValid(
        {
          type: "weight",
          value,
        } as SelectorState,
        {
          unitSystem: "imperial",
        } as QuizState
      );
    }

    expect(validateWeightImperial().isValid).toEqual(false);
    expect(validateWeightImperial(10).isValid).toEqual(false);
    expect(validateWeightImperial(88).isValid).toEqual(true); // min
    expect(validateWeightImperial(700).isValid).toEqual(true); // max
    expect(validateWeightImperial(701).isValid).toEqual(false);
  });
});
