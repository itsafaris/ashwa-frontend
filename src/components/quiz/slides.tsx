import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import {
  LoadingState,
  Selector,
  Slide,
  useQuizActions,
  useQuizSnapshot,
  useQuizState,
  useSlideState,
} from "@lib/quiz-lib";

import { NextButton, QuizHeading } from "./ui";
import { StaticImage } from "gatsby-plugin-image";
import { Span } from "@components/components";
import { FaCheck } from "react-icons/fa";
import { navigate } from "gatsby";
import { trackPixelEvent } from "src/tracking";
import { UnitSystemPicker } from "@lib/quiz-lib/internal/unitsystem";
import { getTypedQuizState } from "src/quizstate";
import React from "react";

export function GoalsSlide() {
  return (
    <Slide
      id="goals"
      type="multi"
      variant="list"
      options={[
        { text: "Reduce stress and anxiety", icon: <Text fontSize={"2xl"}>🧘‍♀️</Text> },
        { text: "Improve sleep quality", icon: <Text fontSize={"2xl"}>💤</Text> },
        { text: "Manage weight more effectively", icon: <Text fontSize={"2xl"}>⚖️</Text> },
        { text: "Loose weight", icon: <Text fontSize={"2xl"}>🏋️‍♀️</Text> },
      ]}
    >
      <QuizHeading color="text.main" mb={4}>
        What are your{" "}
        <Text as="span" textDecor={"underline"}>
          main goals?
        </Text>
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
        Do you have trouble falling or staying asleep?
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
        How often do you feel stressed or anxious?
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
        Poor sleep disrupts hormones, metabolism, increases hunger, and{" "}
        <Text as="span" backgroundColor="#ffc5c5">
          reduces the body's ability to naturally lose weight by 60%
        </Text>
      </QuizHeading>
      <Box p={4} bg="white">
        <StaticImage
          src="../../images/poor-sleep-graphic.jpg"
          alt="effects of lack of sleep for weight gain"
        />
      </Box>
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
        High stress increases cortisol production by up to 3 times,
        <Text as="span" backgroundColor="#ffc5c5">
          {" "}
          leading to stubborn weight gain.
        </Text>
      </QuizHeading>
      <Box p={6} bg="white">
        <StaticImage
          src="../../images/cortisol-graphic.jpg"
          alt="effects of cortisol for weight gain"
        />
      </Box>
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
        { text: "Poor", icon: <Text fontSize={"2xl"}>😞</Text> },
        {
          text: "Could be better",
          icon: <Text fontSize={"2xl"}>😕</Text>,
        },
        { text: "Average", icon: <Text fontSize={"2xl"}>😐</Text> },
        {
          text: "Pretty Good",
          icon: <Text fontSize={"2xl"}>🙂</Text>,
        },
        { text: "Great!", icon: <Text fontSize={"2xl"}>😄</Text> },
      ]}
    >
      <QuizHeading color="text.main" mb={4}>
        Hey! To get to know you better, tell us your current health state
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
        { text: "Milk", icon: <Text fontSize={"2xl"}>🥛</Text> },
        { text: "Eggs", icon: <Text fontSize={"2xl"}>🥚</Text> },
        { text: "Peanuts", icon: <Text fontSize={"2xl"}>🥜</Text> },
        { text: "Tree Nuts", icon: <Text fontSize={"2xl"}>🌰</Text> },
        { text: "Fish", icon: <Text fontSize={"2xl"}>🐟</Text> },
        { text: "Shellfish", icon: <Text fontSize={"2xl"}>🦐</Text> },
        { text: "Soy", icon: <Text fontSize={"2xl"}>🫘</Text> },
        { text: "Wheat", icon: <Text fontSize={"2xl"}>🌾</Text> },
        { text: "Sesame", icon: <Text fontSize={"2xl"}>🌱</Text> },
        { text: "Other", icon: <Text fontSize={"2xl"}>❓</Text> },
        { text: "None", icon: <Text fontSize={"2xl"}>✅</Text> },
      ]}
    >
      <QuizHeading color="text.main" mb={4}>
        Do you have any sensitivities or allergies?
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
        Your health is our top priority. Do you have any of these medical conditions?
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
        { text: "Increased productivity", icon: <Text fontSize={"2xl"}>📈</Text> },
        { text: "Better mood", icon: <Text fontSize={"2xl"}>☀️</Text> },
        { text: "Improved physical health", icon: <Text fontSize={"2xl"}>🏃‍♀️</Text> },
        { text: "Enhanced mental focus", icon: <Text fontSize={"2xl"}>🧠</Text> },
        { text: "Greater overall happiness", icon: <Text fontSize={"2xl"}>🌈</Text> },
      ]}
    >
      <QuizHeading color="text.main" mb={4}>
        Last thing! Imagine waking up completely refreshed and feeling leaner. How would this
        improve your well-being?
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
  const stateSnapshot = useQuizSnapshot();
  const stateTyped = getTypedQuizState(stateSnapshot);
  const actions = useQuizActions();

  const [isValid, setIsValid] = React.useState<boolean>(true);

  return (
    <Slide id="weight-goal" type="weight">
      <QuizHeading color="text.main" mb={4}>
        What's your weight <Span decoration={"underline"}>goal</Span>?
      </QuizHeading>
      <Stack mt={4} mb={2} position={"relative"}>
        <Selector mt={0} mb={0} />

        {!isValid && (
          <Text position={"absolute"} bottom={0} color="red.300" fontSize={"md"}>
            Can't set goal higher than current weight
          </Text>
        )}
      </Stack>

      <NextButton
        onClick={() => {
          setIsValid(true);

          if (
            stateTyped.weight &&
            stateTyped.weightGoal &&
            stateTyped.weightGoal > stateTyped.weight
          ) {
            setIsValid(false);
            return;
          }

          actions.submitQuestion();
        }}
      >
        Next
      </NextButton>
    </Slide>
  );
}

export function LoadingSlide() {
  const s = useSlideState() as LoadingState;

  const progressValue = s?.progressValue;

  return (
    <Slide id="loading" type="loading" variant="linear" statusText={""} autoProceed>
      <QuizHeading color="text.main" mb={4}>
        Preparing your results and recommendations
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
        Great job! Your results and recommendations are ready!
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
        See my results
      </NextButton>
      <Text mt={4} mb={7} fontSize={"xs"}>
        🔒 We don't send spam or share your data. We treat your privacy with the utmost care and
        respect.
      </Text>
    </Slide>
  );
}
