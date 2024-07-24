import { useEffect, useState } from "react";
import { QuizProvider, QuizUI, Segment, useQuizSnapshot } from "@lib/quiz-lib";
import { isProdMode } from "src/utils";
import {
  AgeSlide,
  AlergiesSlide,
  CortisolGraphicSlide,
  EmailSlide,
  EmotionalEatingSlide,
  GoalsSlide,
  HealthStateSlide,
  HeightSlide,
  LoadingSlide,
  MedicalConditionsSlide,
  StressBellySlide,
  SymptomsSlide,
  WeightGainSlide,
  WeightGoalSlide,
  WeightSlide,
} from "@components/quiz/slides";
import { ProgressIndicator } from "@lib/quiz-lib/public/progress";
import { Logo } from "@components/logo";
import { getTypedQuizState } from "src/quizstate";
import { clearQuizState, loadQuizState, saveQuizState } from "src/localStorage";
import { PageProps } from "gatsby";

export function createPageParams(input: Partial<PageParams>): URLSearchParams {
  const s = new URLSearchParams();
  if (input.resetState) {
    s.append("resetstate", String(input.resetState));
  }
  if (input.gender) {
    s.append("gender", input.gender);
  }
  return s;
}

function consumeParams() {
  const newParams = new URLSearchParams(window.location.search);
  newParams.delete("gender");
  newParams.delete("resetstate");
  history.replaceState(null, "", `?${newParams.toString()}`);
}

type PageParams = ReturnType<typeof parsePageParams>;

function parsePageParams(searchStr: string) {
  const s = new URLSearchParams(searchStr);
  return {
    resetState: s.get("resetstate") === "true" ? true : false,
    gender: s.get("gender") as "male" | "female",
  };
}

export default function OnboardingQuiz(props: PageProps) {
  const [mounted, setMounted] = useState(false);
  const [gender, setGender] = useState<"male" | "female">("female");

  useEffect(() => {
    setMounted(true);

    const params = parsePageParams(props.location.search);
    consumeParams();

    // restore previously saved state
    const savedState = loadQuizState();
    if (savedState && !params.resetState) {
      setGender(savedState.gender ?? "female");
    }

    if (params.resetState) {
      clearQuizState();
    }

    if (params.gender) {
      setGender(params.gender);
    }
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <QuizProvider
      showDebugUI={!isProdMode()}
      onErrorEvent={(_) => {
        //
      }}
      onTrackingEvent={(event) => {
        // trackEvent(event);
      }}
      onSlideSubmitted={async (state) => {
        const rawState = await state.getQuizState();
        // const parsedState = getTypedQuizState(rawState);
        // const calcState = calcPersonalInfo(parsedState);

        // posthog.setPersonProperties({
        //   email: parsedState.email,
        //   gender: parsedState.yourGender,
        //   birth_date_local: calcState.birthOrigin.localTimeFormatted,
        //   birth_date_local_extracted: {
        //     year: parsedState.yourBirthDate.year,
        //     month: parsedState.yourBirthDate.month - 1,
        //     date: parsedState.yourBirthDate.day,
        //   },
        //   birth_date_utc: calcState.birthOrigin.utcTimeFormatted,
        //   birth_place: parsedState.yourBirthLocation,
        //   theme_focus: parsedState.areasOfInterest?.map((a) => a.value),
        //   astrologer_persona_id: parsedState.astrologerID,
        //   relationship_status: parsedState.relationshipStatus,
        // });
      }}
    >
      <QuizStateSaver gender={gender} />
      <QuizUI
        progressComponent={
          <ProgressIndicator logo={<Logo height={"28px"} />} />
        }
        containerProps={{
          minH: "100vh",
          bg: "bg.50",
        }}
      >
        <Segment title="Progress">
          <GoalsSlide />
          <HealthStateSlide />
          <SymptomsSlide />
          <WeightGainSlide />
          <EmotionalEatingSlide />
          <StressBellySlide />
          <CortisolGraphicSlide />
          <AlergiesSlide />
          <MedicalConditionsSlide />
          <AgeSlide />
          <HeightSlide />
          <WeightSlide />
          <WeightGoalSlide />
          <LoadingSlide />
          <EmailSlide />
        </Segment>
      </QuizUI>
    </QuizProvider>
  );
}

function QuizStateSaver({ gender }: { gender?: "male" | "female" }) {
  const q = useQuizSnapshot();

  useEffect(() => {
    const quizState = getTypedQuizState(q.slideStateByID);
    saveQuizState({
      ...quizState,
      gender,
    });
  }, [q.slideStateByID]);

  return null;
}
