import { Flex, Icon, Stack, Text } from "@chakra-ui/react";
import {
  LoadingState,
  Selector,
  Slide,
  useQuizActions,
  useSlideState,
} from "@lib/quiz-lib";
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
        { text: "Improve energy levels" },
        { text: "Manage weight more effectively" },
        { text: "Enhance overall well-being" },
      ]}
    >
      <QuizHeading color="text.main" mb={4}>
        What are your goals?
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
        Hve you gained weight in the last year?
      </QuizHeading>
      <Stack mt={4} mb={2}>
        <Selector mt={0} mb={0} />
      </Stack>
    </Slide>
  );
}

export function StressBellySlide() {
  return (
    <Slide
      id="stress-belly"
      type="single"
      variant="list"
      options={[
        { text: "Almost every day" },
        { text: "A few times a week" },
        { text: "Occasionally" },
        { text: "Rarely" },
      ]}
    >
      <QuizHeading color="text.main" mb={4}>
        Stress belly refers to weight gain around the abdominal area. How often
        do you feel stressed?
      </QuizHeading>
      <Stack mt={4} mb={2}>
        <Selector mt={0} mb={0} />
      </Stack>
    </Slide>
  );
}

export function CortisolGraphicSlide() {
  return (
    <Slide id="cortisol-graphic" type="filler">
      <QuizHeading color="text.main" mb={4}>
        Cortisol (stress hormone) is often ignored in the fight for that flat
        belly.
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
      type="single"
      variant="list"
      options={[
        { text: "Frequently" },
        { text: "Sometime" },
        { text: "Rarely" },
        { text: "Never" },
      ]}
    >
      <QuizHeading color="text.main" mb={4}>
        Stress can trigger emotional eating and cravings for high-calorie foods.
        How often do you experience food cravings?
      </QuizHeading>
      <Stack mt={4} mb={2}>
        <Selector mt={0} mb={0} />
      </Stack>
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
        To get a more precise score, what is your current health state?
      </QuizHeading>
      <Stack mt={4} mb={2}>
        <Selector mt={0} mb={0} />
      </Stack>
      <NextButton mt={4}>Next</NextButton>
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
        { text: "Headaches" },
        { text: "Poor sleep" },
        { text: "Digestive Issues" },
        { text: "Weight Gain" },
        { text: "Anxiety" },
        { text: "Mood swings" },
        { text: "Brain fog" },
        { text: "Low energy" },
        { text: "Impaired learning" },
      ]}
    >
      <QuizHeading color="text.main" mb={4}>
        Many factors can affect your well-being, but feeling stressed is one of
        the most significant. Do you often experience:
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
        { text: "Wheat and gluten" },
        { text: "Lactose" },
        { text: "Nuts" },
        { text: "Fish" },
        { text: "Sea food" },
        { text: "Citrus fruits" },
        { text: "Strawberries" },
        { text: "None" },
        { text: "Other" },
      ]}
    >
      <QuizHeading color="text.main" mb={4}>
        To ensure Calmr is safe for you to use, please let us know if you have
        any of the following sensitivities or allergies:
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
        You're doing amazing! To guarantee you have the best experience using{" "}
        <Span decoration={"underline"}>Calmr</Span>, let us know if you have any
        of the following medical conditions:
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
    <Slide
      id="loading"
      type="loading"
      variant="linear"
      statusText={""}
      autoProceed
    >
      <QuizHeading color="text.main" mb={4}>
        Determining your stress levels
      </QuizHeading>
      <Stack mt={4} mb={2}>
        <Selector mt={0} mb={0} />
      </Stack>
      <Stack mt={4}>
        <LoadingListItem
          text="Evaluating your answers..."
          isComplete={(progressValue ?? 0) > 25}
        />
        <LoadingListItem
          text="Analyzing your results..."
          isComplete={(progressValue ?? 0) > 50}
        />
        <LoadingListItem
          text="Determining your cortisol levels..."
          isComplete={(progressValue ?? 0) > 75}
        />
        <LoadingListItem
          text="Building your summary..."
          isComplete={(progressValue ?? 0) === 100}
        />
      </Stack>

      <NextButton mt={8} isDisabled={!s?.isComplete}>
        Next
      </NextButton>
    </Slide>
  );
}

function LoadingListItem({
  isComplete,
  text,
}: {
  isComplete?: boolean;
  text: string;
}) {
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
        Your results are ready!
      </QuizHeading>
      <Text>
        Enter your email and claim your FREE shipping and get Calmr at a
        limited-time, discounted price!
      </Text>
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
            navigate("/s");
          }
        }}
      >
        Unlock my results
      </NextButton>
      <Text mt={4} mb={7} fontSize={"xs"}>
        🔒 We don't send spam or share your data. We treat your privacy with the
        utmost care and respect.
      </Text>
    </Slide>
  );
}
