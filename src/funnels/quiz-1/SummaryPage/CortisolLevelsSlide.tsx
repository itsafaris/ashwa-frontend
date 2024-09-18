import { Stack, Text } from "@chakra-ui/react";
import { Selector, Slide } from "@lib/quiz-lib";
import { StaticImage } from "gatsby-plugin-image";
import { Card, Heading, NextButton, Subtitle, SummaryCard } from "./components";

export function CortisolLevelsSlide() {
  return (
    <Slide
      id="cortisol-levels"
      type="filler"
      containerProps={{ px: 3, py: 1 }}
      quizContainerProps={{
        progressBar: {
          activeSegmentBg: "white",
          inactiveSegmentBg: "#ffffff3b",
          colorScheme: "white",
        },
      }}
    >
      <Card>
        <Heading>
          Based on your quiz answers, your cortisol levels may be:{" "}
          <Text as="span" fontWeight={"bold"} color={"red.500"}>
            HIGH
          </Text>
        </Heading>

        <Subtitle>
          Lowering and maintaining your cortisol is the key to solving your sleep and weight gain
          concerns.
        </Subtitle>

        <SummaryCard px={7} py={7}>
          <StaticImage width={600} alt="" src="../../../images/cortisol-level-chart.jpg" />
        </SummaryCard>

        <Stack mt={4}>
          <Selector mt={0} mb={0} />
        </Stack>

        <NextButton>Continue</NextButton>
      </Card>
    </Slide>
  );
}
