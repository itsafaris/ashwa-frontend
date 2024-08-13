import * as React from "react";

import { IoMdFemale } from "react-icons/io";
import { IoMdSpeedometer } from "react-icons/io";
import { RiScales2Line } from "react-icons/ri";
import { LiaRulerVerticalSolid } from "react-icons/lia";
import { PiPersonBold } from "react-icons/pi";
import { GiTreeBranch } from "react-icons/gi";

import { Box, Heading, Text, Icon, Container, Stack, Grid } from "@chakra-ui/react";

import { CTAButton } from "../components";

import { StaticImage } from "gatsby-plugin-image";
import { useSummaryState } from "./summaryCtx";
import { capitalizeFirstLetter } from "src/utils";

export const Summary = () => {
  const state = useSummaryState();

  return (
    <Box backgroundColor={"brand.100"} py={10}>
      <Container maxW={"container.lg"}>
        <Stack spacing={2} alignItems={"center"}>
          <Heading fontSize={["3xl", "3xl", "4xl"]} maxW={"container.sm"} mb={6} mt={12}>
            Your Personal Summary
          </Heading>

          <Grid
            width={"100%"}
            gridTemplateColumns={["1fr 1fr", "repeat(4, 1fr)"]}
            gridTemplateRows={["1fr 1fr", "1fr"]}
            gap={2}
          >
            <Stack
              px={3}
              py={4}
              backgroundColor="primary.200"
              borderRadius={"lg"}
              width={"100%"}
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={1}
            >
              <Icon as={IoMdFemale} boxSize={"30px"} color="primary.500" />
              <Text color="primary.700" fontWeight={"semibold"} fontSize={"sm"}>
                Gender
              </Text>
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                {capitalizeFirstLetter(state.gender)}
              </Text>
            </Stack>

            <Stack
              px={3}
              py={4}
              backgroundColor="primary.200"
              borderRadius={"lg"}
              width={"100%"}
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={1}
            >
              <Icon as={PiPersonBold} boxSize={"30px"} color="primary.500" />
              <Text color="primary.700" fontWeight={"semibold"} fontSize={"sm"}>
                Age
              </Text>
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                {state.age}
              </Text>
            </Stack>

            <Stack
              px={3}
              py={4}
              backgroundColor="primary.200"
              borderRadius={"lg"}
              width={"100%"}
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={1}
            >
              <Icon as={LiaRulerVerticalSolid} boxSize={"30px"} color="primary.500" />
              <Text color="primary.700" fontWeight={"semibold"} fontSize={"sm"}>
                Height
              </Text>
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                {state.height}
                {state.heightUnits}
              </Text>
            </Stack>

            <Stack
              px={3}
              py={4}
              backgroundColor="primary.200"
              borderRadius={"lg"}
              width={"100%"}
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={1}
            >
              <Icon as={RiScales2Line} boxSize={"30px"} color="primary.500" />
              <Text color="primary.700" fontWeight={"semibold"} fontSize={"sm"}>
                Weight
              </Text>
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                {state.weightStart}
                {state.weightUnits}
              </Text>
            </Stack>
          </Grid>

          <Grid
            width={"100%"}
            gridTemplateColumns={["1fr", "1fr 1fr"]}
            gridTemplateRows={["1fr 1fr", "1fr"]}
            gap={2}
          >
            <Stack
              px={3}
              py={4}
              backgroundColor="primary.200"
              borderRadius={"lg"}
              width={"100%"}
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={1}
            >
              <Icon as={IoMdSpeedometer} boxSize={"30px"} color="primary.500" />
              <Text color="primary.700" fontWeight={"semibold"} fontSize={"sm"}>
                Your BMI
              </Text>
              <Text fontSize={"3xl"} fontWeight={"bold"}>
                {state.bmi}
              </Text>

              <BMIMeter bmi={state.bmi} />
            </Stack>

            <Stack
              px={3}
              py={4}
              backgroundColor="primary.200"
              borderRadius={"lg"}
              width={"100%"}
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={1}
            >
              <Icon as={GiTreeBranch} boxSize={"30px"} color="primary.500" />
              <Text color="primary.700" fontWeight={"semibold"} fontSize={"sm"}>
                Metabolic age
              </Text>
              <Text fontSize={"3xl"} fontWeight={"bold"}>
                {state.metabolicAge} years
              </Text>
            </Stack>
          </Grid>

          <Stack
            backgroundColor="white"
            borderRadius={"lg"}
            width={"100%"}
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={1}
            p={6}
            border="1px solid"
            borderColor={"bg.100"}
          >
            <Grid
              gridTemplateColumns={["1fr", "1fr 1fr"]}
              gridTemplateRows={["auto auto", "1fr"]}
              gap={2}
              alignItems={"center"}
            >
              <Stack py={3} px={[3, 3, 10]}>
                <Stack alignItems={["center", "start"]} mb={3}>
                  <StaticImage alt="" src="../../images/woman-photo-1.jpg" width={170} />
                </Stack>

                <Heading textAlign={["center", "left"]} fontSize={"2xl"}>
                  92% of our customers report significant results in their first month of use
                </Heading>

                <Stack display={["none", "none", "flex"]} mt={5}>
                  <CTAButton alignItems={"left"} width={"260px"} />
                </Stack>
              </Stack>

              <Stack py={3} px={[3, 3, 10]}>
                <StaticImage alt="" src="../../images/summary-outcome-graph.jpg" />
              </Stack>
            </Grid>
          </Stack>
        </Stack>

        <Stack mt={12} display={["flex", "flex", "none"]}>
          <CTAButton />
        </Stack>
      </Container>
    </Box>
  );
};

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
    <Box position="relative" width="100%" height="12px">
      <Box display="flex" height="12px" width="100%">
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
        height="20px"
        width="4px"
        bg="black"
      />
    </Box>
  );
};
