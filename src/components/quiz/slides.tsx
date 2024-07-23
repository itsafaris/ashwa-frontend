import { Heading, Stack, Text } from "@chakra-ui/react";
import { Selector, Slide } from "@lib/quiz-lib";
import { NextButton } from "./ui";

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
      <Heading color="text.main" mb={4}>
        What are your goals?
      </Heading>
      <Stack mt={4} mb={2}>
        <Selector mt={0} mb={0} />
      </Stack>
      <NextButton mt={4}>Next</NextButton>
    </Slide>
  );
}

export function EmailSlide() {
  return (
    <Slide id="your-email" type="email" placeholder="Enter your email">
      <Heading color="text.main" mb={4}>
        Claim your FREE shipping and get Calmr at a limited-time, discounted
        price!
      </Heading>
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
