import { Box, Stack, Text } from "@chakra-ui/react";
import { Selector, Slide } from "@lib/quiz-lib";
import { StaticImage } from "gatsby-plugin-image";
import { Card, Heading, NextButton, Subtitle, SummaryCard } from "./components";

export function CortisolLevelsSlide() {
  return (
    <Slide id="cortisol-levels" type="filler" containerProps={{ px: 3, py: 1, maxW: "600px" }}>
      <Card>
        <Heading>Based on your quiz answers, your cortisol levels may be:</Heading>

        <Stack width={"full"} backgroundColor={"#ffe7e7"} p={2} position={"relative"}>
          <Text
            fontSize={"xs"}
            fontWeight={"semibold"}
            color={"red.600"}
            textTransform={"uppercase"}
          >
            Cortisol levels
          </Text>
          <Text fontSize={"2xl"} color={"red.600"} fontWeight={"bold"}>
            ELEVATED
          </Text>

          <Text fontSize={"sm"} fontWeight={"semibold"} color={"red.600"}>
            Lowering and maintaining your cortisol is the key to solving your sleep and weight gain
            concerns.
          </Text>
        </Stack>

        {/* <Subtitle>
          Lowering and maintaining your cortisol is the key to solving your sleep and weight gain
          concerns.
        </Subtitle> */}

        <Box px={8} maxW="400px" mx="auto">
          <StaticImage width={600} alt="" src="../../../images/cortisol-level-chart.jpg" />
        </Box>

        <Stack mt={4}>
          <Selector mt={0} mb={0} />
        </Stack>

        <NextButton>Continue</NextButton>
      </Card>
    </Slide>
  );
}
