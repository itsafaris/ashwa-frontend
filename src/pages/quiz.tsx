import React, { useEffect, useState } from "react";
import { QuizProvider, QuizUI, Segment } from "@lib/quiz-lib";
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
  MedicalConditionsSlide,
  StressBellySlide,
  SymptomsSlide,
  WeightGainSlide,
  WeightSlide,
} from "@components/quiz/slides";
import { ProgressIndicator } from "@lib/quiz-lib/public/progress";
import { Logo } from "@components/logo";

export default function OnboardingQuiz() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // reset state
    // clearQuizState();
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
      {/* <QuizStateSaver /> */}
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
          <EmailSlide />
        </Segment>
      </QuizUI>
    </QuizProvider>
  );
}
