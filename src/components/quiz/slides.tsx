import { Icon, Stack, Text } from "@chakra-ui/react";
import { Selector, Slide } from "@lib/quiz-lib";
import {
  TbMoodConfuzed,
  TbMoodEmpty,
  TbMoodHappy,
  TbMoodSadDizzy,
  TbMoodSmile,
} from "react-icons/tb";

import { NextButton, QuizHeading } from "./ui";

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
        You're doing amazing! To guarantee you have the best experience using
        ColonBroom, let us know if you have any of the following medical
        conditions:
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
        <Selector mt={0} mb={0} />
      </Stack>
      <NextButton>Next</NextButton>
    </Slide>
  );
}

export function EmailSlide() {
  return (
    <Slide id="your-email" type="email" placeholder="Enter your email">
      <QuizHeading color="text.main" mb={4}>
        Claim your FREE shipping and get Calmr at a limited-time, discounted
        price!
      </QuizHeading>
      <Stack mt={4} mb={2}>
        <Selector mt={0} mb={0} />
      </Stack>
      <Text mt={0} mb={7} fontSize={"xs"}>
        🔒 We respect your privacy and protect your personal data. We will use
        your email to identify you and send personalized astrological insights.
      </Text>
    </Slide>
  );
}
