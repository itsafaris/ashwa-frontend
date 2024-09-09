import { Flex, Heading, Text, Stack } from "@chakra-ui/react";
import { Rating, Span } from "@components/components";
import { ProductSelector } from "../ProductSelector";
import { useGlobalState } from "src/RootWrapper";

const TOTAL_NUMBER_OF_REVIEWS = 1247;

const usps = [
  {
    emoji: "🔥",
    text: "Lose weight",
  },
  {
    emoji: "🍕",
    text: "Control late-night cravings",
  },
  {
    emoji: "😴",
    text: "Have deep full night sleep",
  },
  {
    emoji: "🧘‍♀️",
    text: "Handle stress with ease",
  },
  {
    emoji: "🌞",
    text: "Wake up feeling energized",
  },
];

export function Content(props: { weightAvgMonthlyLoss: number; weightUnits: string }) {
  const { mainProductOneOffVariants } = useGlobalState();

  return (
    <Stack spacing={0} gridArea="content" alignItems={["center", "center", "start"]} flex={1}>
      <Flex alignItems={"center"} gap={2} fontSize={"sm"} fontWeight={"semibold"}>
        <Rating />
        <Text>4.7/5</Text>
        <a href="#reviews">
          <Text>{TOTAL_NUMBER_OF_REVIEWS} reviews</Text>
        </a>
      </Flex>

      <Heading
        fontSize={["4xl", "4xl", "5xl"]}
        maxW={"container.sm"}
        textAlign={["center", "center", "left"]}
      >
        Lose an Average Of{" "}
        <Span color="pink.600" fontWeight={"bold"}>
          {Math.round(props.weightAvgMonthlyLoss * 3)}
          {props.weightUnits}
        </Span>{" "}
        In Only 90 Days*
      </Heading>

      <Text mt={5} fontSize={"md"} textAlign={["center", "start"]}>
        <Span fontWeight={"bold"}>Our best-selling fat burn formula</Span> accelerates weight loss
        by synchronizing metabolism, improving sleep, and reducing stress for comprehensive,
        results-driven weight management*. <Span fontWeight={"bold"}>Take 2 pills a day to:</Span>
      </Text>

      <Stack mt={6} spacing={1} fontWeight={"semibold"} color={"pink.800"}>
        {usps.map((it, idx) => {
          return (
            <Stack key={idx} direction={"row"} alignItems={"center"}>
              <Text>•</Text>
              <Text>{it.emoji}</Text>
              <Text>{it.text}</Text>
            </Stack>
          );
        })}
      </Stack>

      <Text mt={8} mb={5} fontWeight={"bold"}>
        Choose your bundle:
      </Text>

      {mainProductOneOffVariants.length > 0 && (
        <ProductSelector products={mainProductOneOffVariants} />
      )}
    </Stack>
  );
}
