import { Link } from "gatsby";

import { FaArrowRight as ArrowRight } from "react-icons/fa6";

import { Box, Heading, Text, Button, Icon, Container, Stack, Grid } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { FaArrowRight } from "react-icons/fa6";

import { useReadableState } from "./ctx";
import { Recommendation } from "@components/Recommendation";

export const Hero = () => {
  const state = useReadableState();

  return (
    <Box backgroundColor={"brand.100"}>
      <Container maxW={"container.lg"} pb={8} pt={8}>
        <Stack spacing={6} alignItems={"center"}>
          <Grid
            gridTemplateColumns={["auto", "auto", "1fr 1fr"]}
            gridTemplateAreas={["auto auto", "auto auto", "auto"]}
            alignItems={"center"}
            gap={6}
            width={"full"}
            justifyContent={"space-between"}
          >
            <Stack textAlign={["center", "center", "left"]}>
              <Heading fontSize={["4xl", "4xl", "5xl"]} maxW={"container.sm"}>
                Fuel your weight loss with Calmr
              </Heading>

              <Text fontSize={"md"}>
                Reach your goals faster and feel your best with our organic aswhagandha based
                formula.
              </Text>
            </Stack>

            <Stack p={4} backgroundColor={"white"} borderRadius={"lg"} alignItems={"left"}>
              <Text mb={3} fontWeight={"bold"} fontSize={"xl"} color="primary.700">
                Weight estimate*
              </Text>

              <Grid width={"100%"} alignItems={"center"} gridTemplateColumns={"1fr auto 1fr"}>
                <Stack alignItems={"left"} textAlign={"left"} spacing={0} lineHeight={1.2}>
                  <Text fontSize={"sm"}>{state.startDate}</Text>
                  <Text fontSize={"3xl"} fontWeight={"bold"}>
                    {state.startWeight}
                  </Text>
                </Stack>

                <Icon mx="auto" as={ArrowRight} boxSize="24px" color="black" />

                <Stack
                  ml="auto"
                  alignItems={"left"}
                  textAlign={"left"}
                  spacing={0}
                  lineHeight={1.2}
                >
                  <Text fontSize={"sm"}>{state.endDate}</Text>
                  <Text fontSize={"3xl"} fontWeight={"bold"} textAlign={"right"}>
                    {state.endWeight}
                  </Text>
                </Stack>
              </Grid>

              <Box position={"relative"}>
                <StaticImage src="../../images/chart-1.jpg" alt="" />

                <Text
                  position={"absolute"}
                  bottom={"38%"}
                  right={"9%"}
                  fontSize={["md", "lg", "lg"]}
                  fontWeight={"bold"}
                  textAlign={"center"}
                >
                  {state.weightDiff}
                </Text>
              </Box>
            </Stack>
          </Grid>

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
                  {state.monthlyLoss}
                </Text>
                <Text textAlign={"right"} fontSize={"sm"}>
                  In your first month
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
                      {state.lossByWeeks[0]}
                    </Text>
                  </Stack>

                  <Stack height={"15%"} justifyContent={"end"}>
                    <Text
                      fontSize={["sm", "md", "lg"]}
                      fontWeight={"semibold"}
                      textAlign={"center"}
                      mb={2}
                    >
                      {state.lossByWeeks[1]}
                    </Text>
                  </Stack>

                  <Stack height={"46%"} justifyContent={"end"}>
                    <Text
                      fontSize={["sm", "md", "lg"]}
                      fontWeight={"semibold"}
                      textAlign={"center"}
                      mb={2}
                    >
                      {state.lossByWeeks[2]}
                    </Text>
                  </Stack>

                  <Stack height={"69%"} justifyContent={"end"}>
                    <Text
                      fontSize={["sm", "md", "lg"]}
                      fontWeight={"semibold"}
                      textAlign={"center"}
                      mb={2}
                    >
                      {state.lossByWeeks[3]}
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

            <Stack
              textAlign={["center", "center", "right"]}
              maxW={"90%"}
              ml="auto"
              display={["none", "none", "flex"]}
            >
              <Heading fontSize={["2xl", "2xl", "4xl"]} maxW={"container.sm"} fontWeight={"bold"}>
                Turn small wins into big achievements
              </Heading>

              <Text fontSize={"md"}>
                Calmr helps you gradually build your wellness goals and achieve better results every
                month.
              </Text>
            </Stack>
          </Grid>

          <Stack
            width={"100%"}
            p={6}
            backgroundColor="white"
            borderRadius={"lg"}
            alignItems={"center"}
          >
            <Text fontSize={"xl"} fontWeight={"bold"} textAlign={"center"} color="primary.700">
              What we recommend:
            </Text>

            <Recommendation />
          </Stack>

          <Box width={["full", "unset"]}>
            <Link to="/product-selection">
              <Button
                size="lg"
                mx="auto"
                variant={"solid"}
                colorScheme={"pink"}
                borderRadius={"full"}
                width={"100%"}
                py={7}
                px={10}
                my={6}
              >
                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                  <Text lineHeight={1}>See the product</Text>
                  <Icon as={FaArrowRight} />
                </Stack>
              </Button>
            </Link>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
