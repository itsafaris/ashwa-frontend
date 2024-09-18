import { Box, Stack, Text, Grid, Icon } from "@chakra-ui/react";
import { Selector, Slide } from "@lib/quiz-lib";
import { StaticImage } from "gatsby-plugin-image";
import { FaArrowRight as ArrowRight } from "react-icons/fa6";
import { useSummaryState } from "../components/summaryCtx/ctx";
import { getReadableDateTime } from "src/utils";
import { FaArrowUp } from "react-icons/fa";
import { Card, Heading, NextButton, Subtitle, SummaryCard } from "./components";

export function WeightLossForecastSlide() {
  const state = useSummaryState();
  const startDate = new Date();
  const endDate = new Date();
  endDate.setMonth(startDate.getMonth() + state.weightLossDuration);

  return (
    <Slide id="weight-loss-forecast" type="filler" containerProps={{ px: 3, py: 1 }}>
      <Card>
        <Heading>Your Weight Loss Forecast With Calmr</Heading>

        <Subtitle>
          High cortisol levels and poor sleep quality lead to weight gain by increasing cravings for
          high-calorie foods, promoting abdominal fat storage, reducing exercise motivation, and
          altering metabolism.
        </Subtitle>

        <Stack>
          <SummaryCard>
            <Text mb={5} fontWeight={"semibold"} fontSize={"lg"} textAlign={"center"}>
              Weight estimate*
            </Text>

            <Grid width={"100%"} alignItems={"center"} gridTemplateColumns={"1fr auto 1fr"}>
              <Stack alignItems={"left"} textAlign={"left"} spacing={1} lineHeight={1.2}>
                <Text fontSize={"xs"} fontWeight={"semibold"}>
                  {getReadableDateTime(startDate)}
                </Text>
                <Text fontSize={"2xl"} fontWeight={"bold"}>
                  {state.weightStart}
                  {state.weightUnits}
                </Text>
              </Stack>

              <Icon mx="auto" as={ArrowRight} boxSize="20px" color="black" />

              <Stack ml="auto" alignItems={"left"} textAlign={"left"} spacing={0} lineHeight={1.2}>
                <Text fontSize={"xs"} fontWeight={"semibold"}>
                  {getReadableDateTime(endDate)}
                </Text>
                <Text fontSize={"2xl"} fontWeight={"bold"} textAlign={"right"}>
                  {state.weightEnd}
                  {state.weightUnits}
                </Text>
              </Stack>
            </Grid>

            <Box position={"relative"}>
              <StaticImage src="../../../images/chart-1.jpg" alt="" />

              <Text
                position={"absolute"}
                bottom={"38%"}
                right={"9%"}
                fontSize={["md", "lg", "lg"]}
                fontWeight={"bold"}
                textAlign={"center"}
              >
                {state.weightDiff > 0 ? "-" : ""}
                {state.weightDiff}
                {state.weightUnits}
              </Text>
            </Box>
          </SummaryCard>

          <SummaryCard>
            <Text fontSize={"2xl"} fontWeight={"bold"} textAlign={"center"} mb={10}>
              -{state.weightAvgMonthlyLoss}
              {state.weightUnits}{" "}
              <Text as="span" fontWeight={"semibold"} fontSize={"lg"}>
                in your first month*
              </Text>
            </Text>

            <Box position={"relative"}>
              <Grid
                gridTemplateColumns={"repeat(4, 1fr)"}
                zIndex={1}
                position={"absolute"}
                width={"120%"}
                height={"100%"}
                left={"-10%"}
              >
                <Stack height={"0%"} justifyContent={"end"}>
                  <Text fontSize={"sm"} fontWeight={"semibold"} textAlign={"center"} mb={2}>
                    {state.weightLossByWeeks[0]}
                    {state.weightUnits}
                  </Text>
                </Stack>

                <Stack height={"15%"} justifyContent={"end"}>
                  <Text fontSize={"sm"} fontWeight={"semibold"} textAlign={"center"} mb={2}>
                    {state.weightLossByWeeks[1]}
                    {state.weightUnits}
                  </Text>
                </Stack>

                <Stack height={"46%"} justifyContent={"end"}>
                  <Text fontSize={"sm"} fontWeight={"semibold"} textAlign={"center"} mb={2}>
                    {state.weightLossByWeeks[2]}
                    {state.weightUnits}
                  </Text>
                </Stack>

                <Stack height={"69%"} justifyContent={"end"}>
                  <Text fontSize={"sm"} fontWeight={"semibold"} textAlign={"center"} mb={2}>
                    {state.weightLossByWeeks[3]}
                    {state.weightUnits}
                  </Text>
                </Stack>
              </Grid>

              <StaticImage src="../../../images/chart-2.jpg" alt="" />
            </Box>

            <Grid gridTemplateColumns={"repeat(4, 1fr)"} zIndex={1} width={"120%"} mx={"-10%"}>
              <Text fontSize={"sm"} textAlign={"center"}>
                Week 1
              </Text>

              <Text fontSize={"sm"} textAlign={"center"}>
                Week 2
              </Text>

              <Text fontSize={"sm"} textAlign={"center"}>
                Week 3
              </Text>

              <Text fontSize={"sm"} textAlign={"center"}>
                Week 4
              </Text>
            </Grid>
          </SummaryCard>

          <SummaryCard>
            <Stack spacing={1} lineHeight={1.3} mb={6}>
              <Text mb={5} fontWeight={"bold"} fontSize={"xl"} textAlign={"center"}>
                Your overall wellbeing
              </Text>

              <Stack direction={"row"} alignItems={"center"} fontSize={"sm"}>
                <Icon as={FaArrowUp} />

                <Text fontWeight={"bold"}>43%</Text>

                <Text>increase in cortisol reduction</Text>
              </Stack>

              <Stack direction={"row"} alignItems={"center"} fontSize={"sm"}>
                <Icon as={FaArrowUp} />

                <Text fontWeight={"bold"}>50%</Text>

                <Text>boost in sleep onset speed</Text>
              </Stack>

              <Stack direction={"row"} alignItems={"center"} fontSize={"sm"}>
                <Icon as={FaArrowUp} />

                <Text fontWeight={"bold"}>70%</Text>

                <Text>decrease in nighttime cravings</Text>
              </Stack>
            </Stack>

            <StaticImage alt="" src="../../../images/chart-3.jpg" />
          </SummaryCard>
        </Stack>

        <Text color="gray.500" fontSize={"xs"}>
          * Results are not guaranteed. Calmr users are expected to lose weight if they adopt a
          healthy lifestyle. Calmr is formulated to make it faster and easier.
        </Text>

        <Stack>
          <Selector mt={0} mb={0} />
        </Stack>

        <NextButton>Continue</NextButton>
      </Card>
    </Slide>
  );
}
