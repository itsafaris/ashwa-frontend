import { Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { LoadingState, Selector, Slide, useQuizActions, useSlideState } from "@lib/quiz-lib";
import {
  TbMoodConfuzed,
  TbMoodEmpty,
  TbMoodHappy,
  TbMoodSadDizzy,
  TbMoodSmile,
} from "react-icons/tb";

import { NextButton, QuizHeading } from "./ui";
import { StaticImage } from "gatsby-plugin-image";
import { Span } from "@components/components";
import { FaCheck } from "react-icons/fa";
import { navigate } from "gatsby";
import { trackPixelEvent } from "src/tracking";
import { UnitSystemPicker } from "@lib/quiz-lib/internal/unitsystem";

export function GoalsSlide() {
  return (
    <Slide
      id="goals"
      type="multi"
      variant="list"
      options={[
        { text: "Reduce stress and anxiety" },
        { text: "Improve sleep quality" },
        { text: "Manage weight more effectively" },
        { text: "Loose weight" },
      ]}
    >
      <QuizHeading color="text.main" mb={4}>
        To ensure we provide you with the most effective experience, please let us know what're your
        main goals?
      </QuizHeading>
      <Stack mt={4} mb={2}>
        <Selector mt={0} mb={0} />
      </Stack>
      <NextButton mt={4}>Next</NextButton>
    </Slide>
  );
}

export function WeightGainSlide() {
  return (
    <Slide
      id="weight-gain"
      type="single"
      variant="list"
      options={[{ text: "Yes" }, { text: "No" }]}
    >
      <QuizHeading color="text.main" mb={4}>
        Have you experienced unexplained weight gain over the past 12 months?
      </QuizHeading>
      <Stack mt={4} mb={2}>
        <Selector mt={0} mb={0} />
      </Stack>
    </Slide>
  );
}

export function LackOfSleepSlide() {
  return (
    <Slide
      id="lack-of-sleep"
      type="single"
      variant="list"
      options={[
        { text: "Always" },
        { text: "Often" },
        { text: "Occasionally" },
        { text: "Rarely" },
        { text: "Never" },
      ]}
    >
      <QuizHeading color="text.main" mb={4}>
        Poor sleep disrupts hormones, increases hunger, and slows metabolism. Do you struggle
        falling or staying asleep?
      </QuizHeading>
      <Stack mt={4} mb={2}>
        <Selector mt={0} mb={0} />
      </Stack>
    </Slide>
  );
}

export function StressFrequencySlide() {
  return (
    <Slide
      id="stress"
      type="single"
      variant="list"
      options={[
        { text: "Constantly" },
        { text: "Frequently" },
        { text: "Occasionally" },
        { text: "Rarely" },
        { text: "Never" },
      ]}
    >
      <QuizHeading color="text.main" mb={4}>
        Stress raises cortisol, causes emotional eating and sleep issues. How often do you feel
        stressed or anxious?
      </QuizHeading>
      <Stack mt={4} mb={2}>
        <Selector mt={0} mb={0} />
      </Stack>
    </Slide>
  );
}

export function LackOfSleepGraphicSlide() {
  return (
    <Slide id="lack-of-sleep-graphic" type="filler">
      <QuizHeading color="text.main" mb={4}>
        Poor sleep quality increases obesity risk by 45%, and 1 in 3 U.S. adults routinely lack
        adequate sleep.
      </QuizHeading>
      <StaticImage
        src="../../images/cortisol-graphic.jpg"
        alt="effects of lack of sleep for weight gain"
      />
      <Stack mt={4} mb={2}>
        <Selector mt={0} mb={0} />
      </Stack>
      <NextButton mt={4}>Next</NextButton>
    </Slide>
  );
}

export function CortisolGraphicSlide() {
  return (
    <Slide id="cortisol-graphic" type="filler">
      <QuizHeading color="text.main" mb={4}>
        75% of U.S. adults face moderate to high stress, 33% extreme stress, which result in weight
        gain and health problems.
      </QuizHeading>
      <StaticImage
        src="../../images/cortisol-graphic.jpg"
        alt="effects of cortisol for weight gain"
      />
      <Stack mt={4} mb={2}>
        <Selector mt={0} mb={0} />
      </Stack>
      <NextButton mt={4}>Next</NextButton>
    </Slide>
  );
}

export function EmotionalEatingSlide() {
  return (
    <Slide
      id="emotional-eating"
      type="multi"
      variant="list"
      options={[
        { text: "Overeating" },
        { text: "Stress-induced eating" },
        { text: "Irregular meal times" },
        { text: "Fast food consumption" },
        { text: "None of these" },
      ]}
    >
      <QuizHeading color="text.main" mb={4}>
        On occasion, are you prone to…
      </QuizHeading>
      <Stack mt={4} mb={2}>
        <Selector mt={0} mb={0} />
      </Stack>
      <NextButton mt={4}>Next</NextButton>
    </Slide>
  );
}

export function DietsTriedSlide() {
  return (
    <Slide
      id="diets-tried"
      type="multi"
      variant="list"
      options={[
        { text: "Keto" },
        { text: "Fasting" },
        { text: "Paleo" },
        { text: "Mediterranian" },
        { text: "DASH diet" },
        { text: "Vegetarian/vegan" },
        { text: "Other" },
        { text: "None" },
      ]}
    >
      <QuizHeading color="text.main" mb={4}>
        What diets have you tried in the last year?
      </QuizHeading>
      <Stack mt={4} mb={2}>
        <Selector mt={0} mb={0} />
      </Stack>
    </Slide>
  );
}

export function HealthStateSlide() {
  return (
    <Slide
      id="health-state"
      type="single"
      variant="list"
      options={[
        { text: "Poor", icon: <Icon fontSize={"2xl"} as={TbMoodSadDizzy} /> },
        {
          text: "Could be better",
          icon: <Icon fontSize={"2xl"} as={TbMoodConfuzed} />,
        },
        { text: "Average", icon: <Icon fontSize={"2xl"} as={TbMoodEmpty} /> },
        {
          text: "Pretty Good",
          icon: <Icon fontSize={"2xl"} as={TbMoodSmile} />,
        },
        { text: "Great!", icon: <Icon fontSize={"2xl"} as={TbMoodHappy} /> },
      ]}
    >
      <QuizHeading color="text.main" mb={4}>
        Hey! We'd like to get to know you better. How are you doing health-wise?
      </QuizHeading>
      <Stack mt={4} mb={2}>
        <Selector mt={0} mb={0} />
      </Stack>
    </Slide>
  );
}

export function SymptomsSlide() {
  return (
    <Slide
      id="symptoms"
      type="multi"
      variant="list"
      options={[
        { text: "Weight bouncing back" },
        { text: "Hunger/cravings" },
        { text: "Low energy" },
        { text: "Brain fog" },
        { text: "Mood swings" },
        { text: "None" },
      ]}
    >
      <QuizHeading color="text.main" mb={4}>
        Do you struggle with any of the following issues?
      </QuizHeading>
      <Stack mt={4} mb={2}>
        <Selector mt={0} mb={0} />
      </Stack>
      <NextButton mt={4}>Next</NextButton>
    </Slide>
  );
}

export function AlergiesSlide() {
  return (
    <Slide
      id="alergies"
      type="multi"
      variant="list"
      options={[
        { text: "Milk" },
        { text: "Eggs" },
        { text: "Peanuts" },
        { text: "Tree Nuts" },
        { text: "Fish" },
        { text: "Shellfish" },
        { text: "Soy" },
        { text: "Wheat" },
        { text: "Sesame" },
        { text: "Other" },
        { text: "None" },
      ]}
    >
      <QuizHeading color="text.main" mb={4}>
        Please inform us of any sensitivities or allergies to tailor our recommendations.
      </QuizHeading>
      <Stack mt={4} mb={2}>
        <Selector mt={0} mb={0} />
      </Stack>
      <NextButton mt={4}>Next</NextButton>
    </Slide>
  );
}

export function MedicalConditionsSlide() {
  return (
    <Slide
      id="medical-conditions"
      type="multi"
      variant="list"
      options={[
        { text: "High cholesterol levels" },
        { text: "Thyroid issues" },
        { text: "Gout" },
        { text: "Diabetes" },
        { text: "None" },
        { text: "Other" },
        { text: "Prefer not to say" },
      ]}
    >
      <QuizHeading color="text.main" mb={4}>
        Your health and comfort are our top priorities. Do you have any of these medical conditions?
      </QuizHeading>
      <Stack mt={4} mb={2}>
        <Selector mt={0} mb={0} />
      </Stack>
      <NextButton mt={4}>Next</NextButton>
    </Slide>
  );
}

export function OutcomesSlide() {
  return (
    <Slide
      id="outcomes"
      type="multi"
      variant="list"
      options={[
        { text: "Increased productivity" },
        { text: "Better mood" },
        { text: "Improved physical health" },
        { text: "Enhanced mental focus" },
        { text: "Greater overall happiness" },
      ]}
    >
      <QuizHeading color="text.main" mb={4}>
        Imagine waking up completely refreshed and feeling leaner. How would this improve your daily
        life and well-being?
      </QuizHeading>
      <Stack mt={4} mb={2}>
        <Selector mt={0} mb={0} />
      </Stack>
      <NextButton mt={4}>Next</NextButton>
    </Slide>
  );
}

export function AgeSlide() {
  return (
    <Slide id="age" type="age">
      <QuizHeading color="text.main" mb={4}>
        How old are you?
      </QuizHeading>
      <Stack mt={4} mb={2}>
        <Selector mt={0} mb={0} />
      </Stack>
      <NextButton>Next</NextButton>
    </Slide>
  );
}

export function HeightSlide() {
  return (
    <Slide id="height" type="height">
      <QuizHeading color="text.main" mb={4}>
        What's your height?
      </QuizHeading>
      <Stack mt={4} mb={2}>
        <UnitSystemPicker />
        <Selector mt={0} mb={0} />
      </Stack>
      <NextButton>Next</NextButton>
    </Slide>
  );
}

export function WeightSlide() {
  return (
    <Slide id="weight" type="weight">
      <QuizHeading color="text.main" mb={4}>
        What's your{" "}
        <Span fontWeight={"bold"} decoration={"underline"}>
          current
        </Span>{" "}
        weight?
      </QuizHeading>
      <Stack mt={4} mb={2}>
        <Selector mt={0} mb={0} />
      </Stack>
      <NextButton>Next</NextButton>
    </Slide>
  );
}

export function WeightGoalSlide() {
  return (
    <Slide id="weight-goal" type="weight">
      <QuizHeading color="text.main" mb={4}>
        What's your weight <Span decoration={"underline"}>goal</Span>?
      </QuizHeading>
      <Stack mt={4} mb={2}>
        <Selector mt={0} mb={0} />
      </Stack>
      <NextButton>Next</NextButton>
    </Slide>
  );
}

export function LoadingSlide() {
  const s = useSlideState() as LoadingState;

  const progressValue = s?.progressValue;

  return (
    <Slide id="loading" type="loading" variant="linear" statusText={""} autoProceed>
      <QuizHeading color="text.main" mb={4}>
        Preparing our recommendations
      </QuizHeading>
      <Stack mt={4} mb={2}>
        <Selector mt={0} mb={0} />
      </Stack>
      <Stack mt={4}>
        <LoadingListItem text="Evaluating your answers..." isComplete={(progressValue ?? 0) > 25} />
        <LoadingListItem text="Analyzing results..." isComplete={(progressValue ?? 0) > 50} />
        <LoadingListItem
          text="Determining your stress levels..."
          isComplete={(progressValue ?? 0) > 75}
        />
        <LoadingListItem
          text="Building recommendations..."
          isComplete={(progressValue ?? 0) === 100}
        />
      </Stack>

      <NextButton mt={8} isDisabled={!s?.isComplete}>
        Next
      </NextButton>
    </Slide>
  );
}

function LoadingListItem({ isComplete, text }: { isComplete?: boolean; text: string }) {
  return (
    <Flex gap={2} alignItems={"center"}>
      <Icon as={FaCheck} color={isComplete ? "text" : "text.100"} />
      <Text>{text}</Text>
    </Flex>
  );
}

export function EmailSlide() {
  const { submitQuestion } = useQuizActions();

  return (
    <Slide id="your-email" type="email" placeholder="Enter your email">
      <QuizHeading color="text.main" mb={4}>
        Your results and recommendations are ready!
      </QuizHeading>
      <Text>Enter your email to see result, claim FREE shipping and get a limited-time offer!</Text>
      <Stack mt={4} mb={2}>
        <Selector mt={0} mb={0} />
      </Stack>
      <NextButton
        onClick={() => {
          const proceed = submitQuestion();
          if (proceed) {
            trackPixelEvent({
              name: "Lead",
            });
            navigate("/summary");
          }
        }}
      >
        Unlock my results
      </NextButton>
      <Text mt={4} mb={7} fontSize={"xs"}>
        🔒 We don't send spam or share your data. We treat your privacy with the utmost care and
        respect.
      </Text>
    </Slide>
  );
}
