import { useEffect, useState } from "react";
import { QuizProvider, QuizUI, Segment, useQuizSnapshot } from "@lib/quiz-lib";
import { isProdMode } from "src/utils";
import {
  AgeSlide,
  StressFrequencyGraphicSlide,
  EmailSlide,
  EmotionalEatingSlide,
  GoalsSlide,
  HealthStateSlide,
  HeightSlide,
  LackOfSleepGraphicSlide,
  LackOfSleepSlide,
  LoadingSlide,
  StressFrequencySlide,
  SymptomsSlide,
  WeightGainSlide,
  WeightGoalSlide,
  WeightSlide,
  WeGotYouSlide,
} from "./slides";
import { ProgressIndicator } from "@lib/quiz-lib/public/progress";
import { Logo } from "@components/logo";
import { getCalculatedState, getTypedQuizState } from "src/quizstate";
import { clearQuizState, loadQuizState, saveQuizState } from "src/localStorage";
import { PageProps } from "gatsby";
import { trackEvent } from "src/tracking";
import posthog from "posthog-js";

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

export function QuizPage(props: PageProps) {
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
        trackEvent(event);
      }}
      onSlideSubmitted={({ quizObject }) => {
        const s = getCalculatedState(quizObject.state);
        // @ts-expect-error
        delete s.version;
        posthog.setPersonProperties(s);
      }}
    >
      <QuizStateSaver gender={gender} />
      <QuizUI
        progressComponent={<ProgressIndicator logo={<Logo height={"28px"} />} />}
        containerProps={{
          minH: "100vh",
          bg: "bg.50",
        }}
      >
        <Segment title="Progress">
          <HealthStateSlide />
          <SymptomsSlide />
          <StressFrequencySlide />
          <LackOfSleepSlide />
          <WeightGainSlide />
          <StressFrequencyGraphicSlide />
          <LackOfSleepGraphicSlide />
          <EmotionalEatingSlide />
          <GoalsSlide />
          <WeGotYouSlide />
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
    const quizState = getTypedQuizState(q);
    saveQuizState({
      ...quizState,
      gender,
    });
  }, [q.slideStateByID, q.unitSystem]);

  return null;
}
