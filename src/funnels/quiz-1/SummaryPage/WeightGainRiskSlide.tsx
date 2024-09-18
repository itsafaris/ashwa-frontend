import { Box, Stack, Text, Grid } from "@chakra-ui/react";
import { Selector, Slide } from "@lib/quiz-lib";
import { useSummaryState } from "../components/summaryCtx/ctx";
import { Card, Heading, NextButton, Subtitle, SummaryCard } from "./components";

export function WeightGainRiskSlide() {
  const state = useSummaryState();

  return (
    <Slide id="weight-gain-risk" type="filler" containerProps={{ px: 3, py: 1 }}>
      <Card>
        <Heading>What do your quiz answers reveal about your weight gain risk?</Heading>

        <Subtitle>
          Your answers suggest that your weight gain concerns may continue to get worse and happen
          over and over again.
        </Subtitle>

        <Stack>
          <SummaryCard>
            <Stack width={"full"} backgroundColor={"#ffe7e7"} p={2} position={"relative"} mb={6}>
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
                borderTop="12px solid #ffe7e7"
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
