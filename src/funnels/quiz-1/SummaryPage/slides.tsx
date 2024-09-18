import { Box, Stack, StackProps, Text, Grid, Icon, ButtonProps, TextProps } from "@chakra-ui/react";
import { Selector, Slide } from "@lib/quiz-lib";
import { NextButton as NextButtonRaw, QuizHeading } from "../components/ui";
import { StaticImage } from "gatsby-plugin-image";
import { IoIosWarning } from "react-icons/io";
import { FaArrowRight as ArrowRight } from "react-icons/fa6";
import { useSummaryState } from "../components/summaryCtx/ctx";
import { getReadableDateTime } from "src/utils";
import { FaArrowUp } from "react-icons/fa";

function Card(props: StackProps) {
  return (
    <Stack
      backgroundColor={"transparent"}
      px={3}
      py={4}
      borderRadius={"lg"}
      spacing={6}
      {...props}
    />
  );
}

function Heading(props: TextProps) {
  return (
    <QuizHeading
      color="white"
      lineHeight={1.2}
      fontSize={"3xl"}
      fontWeight={"semibold"}
      mb={0}
      {...props}
    />
  );
}

function Subtitle(props: TextProps) {
  return <Text mb={4} color={"whiteAlpha.700"} {...props} />;
}

function NextButton(props: ButtonProps) {
  return <NextButtonRaw mt={4} colorScheme="black" {...props} />;
}

export function WeightGainRiskSlide() {
  const state = useSummaryState();

  return (
    <Slide
      id="weight-gain-risk"
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
        <Heading>What do your quiz answers reveal about your weight gain risk?</Heading>

        <Subtitle>
          Your answers suggest that your weight gain concerns may continue to get worse and happen
          over and over again.
        </Subtitle>

        <Stack>
          <SummaryCard>
            <Stack width={"full"} backgroundColor={"red.100"} p={2} position={"relative"} mb={6}>
              <Text
                fontSize={"xs"}
                fontWeight={"semibold"}
                color={"red.600"}
                textTransform={"uppercase"}
              >
                Weight gain risk
              </Text>
              <Text fontSize={"2xl"} color={"red.600"} fontWeight={"bold"}>
                HIGH
              </Text>

              <Text fontSize={"sm"} fontWeight={"semibold"} color={"red.600"}>
                You've high level of cortisol that might impact difficulty for you to shed weight .
                Your weight gain risk is high.
              </Text>

              <Box
                position="absolute"
                bottom={"0px"}
                left={`calc(75% - 12px)`}
                transform="translateY(100%)"
                width={0}
                height={0}
                borderLeft="12px solid transparent"
                borderRight="12px solid transparent"
                borderTop="12px solid #fed7d7"
              />
            </Stack>

            <Stack width={"full"}>
              <Box position="relative" width="100%">
                <Box
                  height="8px"
                  width="100%"
                  borderRadius={"full"}
                  overflow={"hidden"}
                  bgGradient={`linear(to-r, green.300 15% , yellow.500, red.500, pink.500)`}
                />

                <Box
                  position="absolute"
                  left={`75%`}
                  transform="translate(-50%, -50%)"
                  top={"50%"}
                  height="20px"
                  width="10px"
                  bg="black"
                  border="2px solid white"
                  borderRadius={"full"}
                />
              </Box>
            </Stack>
          </SummaryCard>

          <MetabolismRateCard />
          <BMICard bmi={state.bmi} />
          <MetabolicAgeCard metabolicAge={state.metabolicAge} />
        </Stack>

        <Stack mt={4}>
          <Selector mt={0} mb={0} />
        </Stack>

        <NextButton>Continue</NextButton>
      </Card>
    </Slide>
  );
}

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

        <SummaryCard px={6} py={6}>
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

export function WeightLossForecastSlide() {
  const state = useSummaryState();
  const startDate = new Date();
  const endDate = new Date();
  endDate.setMonth(startDate.getMonth() + state.weightLossDuration);

  return (
    <Slide
      id="weight-loss-forecast"
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

interface BMIMeterProps {
  bmi: number;
}

const BMIMeter: React.FC<BMIMeterProps> = ({ bmi }) => {
  const minBMI = 0;
  const maxBMI = 40;
  const normalRange = [18.5, 24.9];
  const badRange = [25, 29.9];

  const bmiPosition = bmi >= maxBMI ? 100 : bmi <= minBMI ? 0 : (bmi * 100) / maxBMI;

  const low = ((normalRange[1] - minBMI) / (maxBMI - minBMI)) * 100;
  const medium = ((badRange[1] - normalRange[1]) / (maxBMI - minBMI)) * 100;

  return (
    <Stack width={"full"} spacing={1}>
      <Box position="relative" width="100%">
        <Box
          bgGradient={`linear(to-r, green.300 ${low - 30}%, red.500, pink.500)`}
          display="flex"
          height="8px"
          width="100%"
          borderRadius={"full"}
          overflow={"hidden"}
        />

        <Box
          position="absolute"
          left={`${bmiPosition}%`}
          transform="translate(-50%, -50%)"
          top={"50%"}
          height="20px"
          width="10px"
          bg="black"
          border="2px solid white"
          borderRadius={"full"}
        />
      </Box>

      <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
        <Text fontSize={"10px"}>Normal weight</Text>
        <Text fontSize={"10px"}>Obesity</Text>
      </Stack>
    </Stack>
  );
};

function BMICard({ bmi }: { bmi: number }) {
  return (
    <SummaryCard spacing={0}>
      <Text textTransform={"uppercase"} fontWeight={"semibold"} fontSize={"xs"} color={"gray.600"}>
        Your BMI
      </Text>

      <Text fontSize={"2xl"} fontWeight={"bold"} mb={1}>
        {bmi}
      </Text>

      <BMIMeter bmi={bmi} />
    </SummaryCard>
  );
}

function MetabolicAgeCard({ metabolicAge }: { metabolicAge: number }) {
  return (
    <SummaryCard spacing={0}>
      <Text textTransform={"uppercase"} fontWeight={"semibold"} fontSize={"xs"} color={"gray.600"}>
        Your metabolic age
      </Text>

      <Text fontSize={"2xl"} fontWeight={"bold"} mb={1}>
        {metabolicAge} years
      </Text>
    </SummaryCard>
  );
}

function MetabolismRateCard() {
  return (
    <SummaryCard spacing={0}>
      <Text textTransform={"uppercase"} fontWeight={"semibold"} fontSize={"xs"} color={"gray.600"}>
        Your metabolism
      </Text>

      <Text
        mb={1}
        color={"red.500"}
        fontSize={"2xl"}
        fontWeight={"bold"}
        textTransform={"uppercase"}
      >
        Slow
      </Text>

      <Stack width={"full"} spacing={1}>
        <Box position="relative" width="100%">
          <Box
            height="8px"
            width="100%"
            borderRadius={"full"}
            overflow={"hidden"}
            bgGradient={`linear(to-r, green.300 15% , yellow.500, red.500, pink.500)`}
          />

          <Box
            position="absolute"
            left={`65%`}
            transform="translate(-50%, -50%)"
            top={"50%"}
            height="20px"
            width="10px"
            bg="black"
            border="2px solid white"
            borderRadius={"full"}
          />
        </Box>

        <Grid
          gridTemplateColumns={"repeat(4, 1fr)"}
          height="20px"
          width="100%"
          borderRadius={"full"}
          overflow={"hidden"}
          alignItems={"center"}
        >
          <Text fontSize={"10px"} textAlign={"center"}>
            Fast
          </Text>
          <Text fontSize={"10px"} textAlign={"center"}>
            Normal
          </Text>
          <Text fontSize={"10px"} textAlign={"center"}>
            Slow
          </Text>
          <Text fontSize={"10px"} textAlign={"center"}>
            Very slow
          </Text>
        </Grid>
      </Stack>
    </SummaryCard>
  );
}

function SummaryCard(props: StackProps) {
  return (
    <Stack
      px={4}
      py={4}
      borderRadius={"lg"}
      width={"100%"}
      alignItems={"center"}
      justifyContent={"space-between"}
      spacing={1}
      boxShadow={"0px 0px 10px 0px #00000052"}
      backgroundColor={"white"}
      {...props}
    />
  );
}
