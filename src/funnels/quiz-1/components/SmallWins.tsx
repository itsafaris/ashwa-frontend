import { Box, Heading, Text, Stack, Grid } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";

export function SmallWinsSection(props: {
  weightAvgMonthlyLoss: number;
  weightUnits: string;
  weightLossByWeeks: number[];
}) {
  return (
    <Grid
      gridTemplateColumns={["auto", "auto", "1fr 1fr"]}
      gridTemplateAreas={["auto auto", "auto auto", "auto"]}
      alignItems={"center"}
      gap={6}
      width={"full"}
      justifyContent={"space-between"}
    >
      <Stack p={6} backgroundColor="white" borderRadius={"lg"}>
        <Stack justifyContent={"end"} spacing={1} lineHeight={1.3} mb={6}>
          <Text fontSize={"3xl"} fontWeight={"bold"} textAlign={"right"}>
            {props.weightAvgMonthlyLoss}
            {props.weightUnits}
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
              <Text
                fontSize={["sm", "md", "lg"]}
                fontWeight={"semibold"}
                textAlign={"center"}
                mb={2}
              >
                {props.weightLossByWeeks[0]}
                {props.weightUnits}
              </Text>
            </Stack>

            <Stack height={"15%"} justifyContent={"end"}>
              <Text
                fontSize={["sm", "md", "lg"]}
                fontWeight={"semibold"}
                textAlign={"center"}
                mb={2}
              >
                {props.weightLossByWeeks[1]}
                {props.weightUnits}
              </Text>
            </Stack>

            <Stack height={"46%"} justifyContent={"end"}>
              <Text
                fontSize={["sm", "md", "lg"]}
                fontWeight={"semibold"}
                textAlign={"center"}
                mb={2}
              >
                {props.weightLossByWeeks[2]}
                {props.weightUnits}
              </Text>
            </Stack>

            <Stack height={"69%"} justifyContent={"end"}>
              <Text
                fontSize={["sm", "md", "lg"]}
                fontWeight={"semibold"}
                textAlign={"center"}
                mb={2}
              >
                {props.weightLossByWeeks[3]}
                {props.weightUnits}
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

      <Stack
        textAlign={["center", "center", "right"]}
        maxW={"90%"}
        ml="auto"
        display={["none", "none", "flex"]}
      >
        <Heading
          fontSize={["3xl", "3xl", "3xl"]}
          maxW={"container.sm"}
          fontWeight={"bold"}
          color="black"
        >
          Turn Small Wins Into Big Achievements
        </Heading>

        <Text fontSize={"md"}>
          Sleep & Burn helps you gradually build your wellness goals and achieve better results
          every month.
        </Text>
      </Stack>
    </Grid>
  );
}
