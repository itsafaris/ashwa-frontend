import {
  Box,
  Stack,
  StackProps,
  Text,
  HeadingProps,
  Grid,
  Icon,
  ButtonProps,
} from "@chakra-ui/react";
import { Selector, Slide } from "@lib/quiz-lib";
import { NextButton as NextButtonRaw, QuizHeading } from "../components/ui";
import { StaticImage } from "gatsby-plugin-image";
import { IoIosWarning } from "react-icons/io";
import { FaArrowRight as ArrowRight } from "react-icons/fa6";
import { useSummaryState } from "../components/summaryCtx/ctx";
import { getReadableDateTime } from "src/utils";

function Card(props: StackProps) {
  return (
    <Stack backgroundColor={"white"} px={3} py={4} borderRadius={"lg"} spacing={6} {...props} />
  );
}

function Heading(props: HeadingProps) {
  return <QuizHeading color="text.main" textAlign={"center"} mb={0} {...props} />;
}

function NextButton(props: ButtonProps) {
  return <NextButtonRaw mt={4} colorScheme="black" {...props} />;
}

export function PersonalSummarySlide() {
  const state = useSummaryState();

  return (
    <Slide id="personal-summary" type="filler" containerProps={{ px: 3, py: 1 }}>
      <Card>
        <Heading>Your personal Summary</Heading>

        <Text textAlign={"center"} fontSize={"sm"} my={2}>
          The quiz results suggest that you may be carrying excess weight and experiencing an
          elevated metabolic age, both of which can be associated with increased cortisol levels.
        </Text>

        <Stack>
          <Stack
            px={4}
            py={4}
            borderRadius={"lg"}
            width={"100%"}
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={1}
            boxShadow={"0px 0px 10px 0px #00000052"}
          >
            <Text textTransform={"uppercase"} fontWeight={"semibold"} fontSize={"sm"}>
              Your BMI
            </Text>

            <Text fontSize={"4xl"} fontWeight={"bold"}>
              {state.bmi}
            </Text>

            <BMIMeter bmi={state.bmi} />
          </Stack>

          <Stack
            px={4}
            py={4}
            borderRadius={"lg"}
            width={"100%"}
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={1}
            boxShadow={"0px 0px 10px 0px #00000052"}
          >
            <Text textTransform={"uppercase"} fontWeight={"semibold"} fontSize={"sm"}>
              Your metabolic age
            </Text>

            <Text fontSize={"4xl"} fontWeight={"bold"}>
              {state.metabolicAge} years
            </Text>

            <Text mt={3} fontSize={"sm"}>
              Bad bacteria might be causing your body to hold on to fat.
            </Text>

            <Stack
              mt={3}
              width={"full"}
              backgroundColor={"red.100"}
              p={2}
              direction={"row"}
              alignItems={"center"}
            >
              <Icon as={IoIosWarning} color={"red.500"} boxSize={5} />
              <Text fontSize={"sm"} fontWeight={"semibold"} color={"red.500"}>
                Your fat-burning rate is very low
              </Text>
            </Stack>
          </Stack>
        </Stack>

        <Stack mt={4}>
          <Selector mt={0} mb={0} />
        </Stack>

        <NextButton>Continue</NextButton>
      </Card>
    </Slide>
  );
}

export function WeightGainRiskSlide() {
  return (
    <Slide id="weight-gain-risk" type="filler" containerProps={{ px: 3, py: 1 }}>
      <Card>
        <Heading>
          Based on your quiz answers your weight gain risk is:{" "}
          <Text as="span" fontWeight={"bold"} color={"red.500"}>
            HIGH
          </Text>
        </Heading>

        <Text textAlign={"center"} fontSize={"sm"} my={2}>
          Stress elevates cortisol, leading to weight gain by increasing cravings for high-calorie
          foods, promoting abdominal fat storage, disrupting sleep, reducing exercise motivation,
          and altering metabolism
        </Text>

        <StaticImage width={600} alt="" src="../../../images/cortisol-level-chart.jpg" />

        <Stack mt={4}>
          <Selector mt={0} mb={0} />
        </Stack>

        <NextButton>Continue</NextButton>
      </Card>
    </Slide>
  );
}

export function MetabolismRateSlide() {
  return (
    <Slide id="metabolism-rate" type="filler" containerProps={{ px: 3, py: 1 }}>
      <Card>
        <Heading>How does stress and poor sleep affect your weight loss?</Heading>

        <Text textAlign={"center"} fontSize={"sm"} my={2}>
          Elevated cortisol levels slow down metabolism by promoting muscle breakdown, increasing
          insulin resistance, and interfering with thyroid function, collectively making it harder
          for the body to burn calories efficiently.
        </Text>

        <Stack
          px={4}
          py={4}
          borderRadius={"lg"}
          width={"100%"}
          alignItems={"center"}
          justifyContent={"space-between"}
          spacing={1}
          boxShadow={"0px 7px 20px 0px #00000052"}
          position={"relative"}
        >
          <Text fontWeight={"semibold"} fontSize={"sm"}>
            Your metabolism
          </Text>

          <Text fontSize={"4xl"} fontWeight={"semibold"} color={"red.700"}>
            Slow
          </Text>

          <Text mt={3} fontSize={"sm"}>
            You’ve high level of cortisol that might impact difficulty for you to shed weight
          </Text>

          <Box
            position="absolute"
            bottom={"0px"}
            left={`calc(35% - 15px)`}
            transform="translateY(100%)"
            width={0}
            height={0}
            borderLeft="15px solid transparent"
            borderRight="15px solid transparent"
            borderTop="15px solid white"
          />
        </Stack>

        <Stack width={"full"}>
          <Box position="relative" width="100%">
            <Grid
              gridTemplateColumns={"repeat(4, 1fr)"}
              height="20px"
              width="100%"
              borderRadius={"full"}
              overflow={"hidden"}
            >
              <Box bg="red.300" border="1px solid white" />
              <Box bg="yellow.300" border="1px solid white" />
              <Box bg="blue.100" border="1px solid white" />
              <Box bg="green.200" border="1px solid white" />
            </Grid>

            <Box
              position="absolute"
              left={`35%`}
              transform="translate(-50%, -50%)"
              top={"50%"}
              height="150%"
              width="7px"
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
              Very slow
            </Text>
            <Text fontSize={"10px"} textAlign={"center"}>
              Slow
            </Text>
            <Text fontSize={"10px"} textAlign={"center"}>
              Normal
            </Text>
            <Text fontSize={"10px"} textAlign={"center"}>
              Fast
            </Text>
          </Grid>
        </Stack>

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
    <Slide id="weight-loss-forecast" type="filler" containerProps={{ px: 3, py: 1 }}>
      <Card>
        <Heading>Your weight loss forecast with Calmr</Heading>

        <Stack
          px={4}
          py={4}
          borderRadius={"lg"}
          width={"100%"}
          alignItems={"left"}
          justifyContent={"space-between"}
          spacing={1}
          boxShadow={"0px 0px 10px 0px #00000052"}
        >
          <Text mb={3} fontWeight={"bold"} fontSize={"xl"} color="primary.700">
            Weight estimate*
          </Text>

          <Grid width={"100%"} alignItems={"center"} gridTemplateColumns={"1fr auto 1fr"}>
            <Stack alignItems={"left"} textAlign={"left"} spacing={0} lineHeight={1.2}>
              <Text fontSize={"sm"} fontWeight={"semibold"}>
                {getReadableDateTime(startDate)}
              </Text>
              <Text fontSize={"3xl"} fontWeight={"bold"}>
                {state.weightStart}
                {state.weightUnits}
              </Text>
            </Stack>

            <Icon mx="auto" as={ArrowRight} boxSize="24px" color="black" />

            <Stack ml="auto" alignItems={"left"} textAlign={"left"} spacing={0} lineHeight={1.2}>
              <Text fontSize={"sm"} fontWeight={"semibold"}>
                {getReadableDateTime(endDate)}
              </Text>
              <Text fontSize={"3xl"} fontWeight={"bold"} textAlign={"right"}>
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
        </Stack>

        <Stack
          px={5}
          py={4}
          borderRadius={"lg"}
          width={"100%"}
          alignItems={"left"}
          justifyContent={"space-between"}
          spacing={1}
          boxShadow={"0px 0px 10px 0px #00000052"}
        >
          <Stack justifyContent={"end"} spacing={1} lineHeight={1.3} mb={6}>
            <Text fontSize={"3xl"} fontWeight={"bold"} textAlign={"right"}>
              -{state.weightAvgMonthlyLoss}
              {state.weightUnits}
            </Text>
            <Text textAlign={"right"} fontSize={"sm"}>
              In your first month*
            </Text>
          </Stack>

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
        </Stack>

        <Stack mt={4}>
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

  return (
    <Stack width={"full"}>
      <Box position="relative" width="100%">
        <Box display="flex" height="20px" width="100%" borderRadius={"full"} overflow={"hidden"}>
          <Box bg="teal.300" width={`${((normalRange[1] - minBMI) / (maxBMI - minBMI)) * 100}%`} />
          <Box
            bg="yellow.300"
            width={`${((badRange[1] - normalRange[1]) / (maxBMI - minBMI)) * 100}%`}
          />
          <Box bg="red.300" flex="1" />
        </Box>

        <Box
          position="absolute"
          left={`${bmiPosition}%`}
          transform="translate(-50%, -50%)"
          top={"50%"}
          height="150%"
          width="7px"
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
