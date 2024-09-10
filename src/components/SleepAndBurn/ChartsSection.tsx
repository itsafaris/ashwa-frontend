import { Box, Container, Grid, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { CTAButton } from "@components/components";
import { StaticImage } from "gatsby-plugin-image";
import { FaArrowUp } from "react-icons/fa";

export function ChartsSection(props: {
  weightAvgMonthlyLoss: number;
  weightUnits: string;
  weightLossByWeeks: number[];
}) {
  return (
    <Box bg="brand.50" py={10}>
      <Container maxW={"container.lg"}>
        <Stack alignItems={"center"} gap={6} width={"full"} justifyContent={"space-between"}>
          <Stack textAlign={["center", "center", "right"]}>
            <Heading lineHeight={1.2} fontSize={["3xl", "3xl", "4xl"]} textAlign={"center"}>
              Enjoy Quick & Effortless Results
            </Heading>

            <Text fontSize={"md"} mt={3}>
              Sleep & Burn helps you gradually build your wellness goals and{" "}
              <Text as="span" fontWeight={"bold"}>
                achieve better results every month.
              </Text>
            </Text>
          </Stack>

          <Grid alignItems={"center"} gap={3} gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}>
            <Stack height={"full"} p={6} backgroundColor="white" borderRadius={"lg"}>
              <Stack justifyContent={"end"} spacing={1} lineHeight={1.3} mb={6}>
                <Text fontSize={"4xl"} fontWeight={"bold"} textAlign={"right"}>
                  -{props.weightAvgMonthlyLoss}
                  {props.weightUnits}
                </Text>
                <Text textAlign={"right"} fontWeight={"semibold"} fontSize={"sm"}>
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

                <StaticImage src="../../images/chart-2.jpg" alt="" />
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

            <Stack height={"full"} p={6} backgroundColor="white" borderRadius={"lg"}>
              <Stack spacing={1} lineHeight={1.3} mb={6}>
                <Text fontSize={"2xl"} fontWeight={"bold"} mb={2}>
                  Your Overall Wellbeing
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

              <Stack mt="auto">
                <StaticImage alt="" src="../../images/chart-3.jpg" />
              </Stack>
            </Stack>
          </Grid>
        </Stack>

        <CTAButton mt={6} />
      </Container>
    </Box>
  );
}
