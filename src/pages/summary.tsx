import { type HeadFC } from "gatsby";

import { reviews, topReviews } from "../reviews";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { SEO } from "@components/SEO";
import { VideoTestimonials } from "@components/sections/VideoTestimonials";
import { HowItWorksSection } from "@components/sections/HowItWorks";
import { FAQSection } from "@components/sections/FAQ";

import { ProductPreview } from "@components/sections/ProductPreview";
import { ReviewsSection } from "@components/sections/Reviews";
import { Summary } from "@components/sections/Summary";
import { AshwaRevivalSection } from "@components/sections/Research";
import { IngredientsSection } from "@components/sections/Ingredients";
import { Link } from "gatsby";

import { FaArrowRight as ArrowRight } from "react-icons/fa6";

import { Box, Heading, Text, Button, Icon, Container, Stack, Grid } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { FaArrowRight } from "react-icons/fa6";

import { Recommendation } from "@components/Recommendation";

import { SummaryStateProvider, useSummaryState } from "@components/sections/summaryCtx";
import { Span } from "@components/components";
import { getReadableDateTime } from "src/utils";

export const Head: HeadFC = () => {
  return <SEO />;
};

export default function Page() {
  return (
    <SummaryStateProvider>
      <Box>
        <Header />
        <Hero />
        <ProductPreview />
        <VideoTestimonials reviews={topReviews} />
        <Summary />
        <IngredientsSection />
        <HowItWorksSection />
        <ReviewsSection reviews={reviews} />
        <FAQSection />
        <AshwaRevivalSection />
        <Footer />
      </Box>
    </SummaryStateProvider>
  );
}

const Hero = () => {
  const state = useSummaryState();

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
              <Heading fontSize={["2xl", "2xl", "3xl"]} maxW={"container.sm"}>
                Our product is a perfect match for your{" "}
                <Span textDecoration={"underline"}>improved sleep</Span> and{" "}
                <Span textDecoration={"underline"}>maximized fat burn</Span>
              </Heading>

              <Text fontSize={"lg"} mt={4}>
                <Span fontWeight={"bold"} fontSize={"xl"}>
                  83%
                </Span>{" "}
                of our users with the same answers started losing pounds in the first few weeks.
              </Text>
            </Stack>

            <Stack p={4} backgroundColor={"white"} borderRadius={"lg"} alignItems={"left"}>
              <Text mb={3} fontWeight={"bold"} fontSize={"xl"} color="primary.700">
                Weight estimate*
              </Text>

              <Grid width={"100%"} alignItems={"center"} gridTemplateColumns={"1fr auto 1fr"}>
                <Stack alignItems={"left"} textAlign={"left"} spacing={0} lineHeight={1.2}>
                  <Text fontSize={"sm"} fontWeight={"semibold"}>
                    {getReadableDateTime(state.weightStartTime)}
                  </Text>
                  <Text fontSize={"3xl"} fontWeight={"bold"}>
                    {state.weightStart}
                    {state.weightUnits}
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
                  <Text fontSize={"sm"} fontWeight={"semibold"}>
                    {getReadableDateTime(state.weightEndTime)}
                  </Text>
                  <Text fontSize={"3xl"} fontWeight={"bold"} textAlign={"right"}>
                    {state.weightEnd}
                    {state.weightUnits}
                  </Text>
                </Stack>
              </Grid>

              <Box position={"relative"}>
                <StaticImage src="../images/chart-1.jpg" alt="" />

                <Text
                  position={"absolute"}
                  bottom={"38%"}
                  right={"9%"}
                  fontSize={["md", "lg", "lg"]}
                  fontWeight={"bold"}
                  textAlign={"center"}
                >
                  {state.weightDiff}
                  {state.weightUnits}
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
                  {state.weightAvgMonthlyLoss}
                  {state.weightUnits}
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
                      {state.weightLossByWeeks[0]}
                      {state.weightUnits}
                    </Text>
                  </Stack>

                  <Stack height={"15%"} justifyContent={"end"}>
                    <Text
                      fontSize={["sm", "md", "lg"]}
                      fontWeight={"semibold"}
                      textAlign={"center"}
                      mb={2}
                    >
                      {state.weightLossByWeeks[1]}
                      {state.weightUnits}
                    </Text>
                  </Stack>

                  <Stack height={"46%"} justifyContent={"end"}>
                    <Text
                      fontSize={["sm", "md", "lg"]}
                      fontWeight={"semibold"}
                      textAlign={"center"}
                      mb={2}
                    >
                      {state.weightLossByWeeks[2]}
                      {state.weightUnits}
                    </Text>
                  </Stack>

                  <Stack height={"69%"} justifyContent={"end"}>
                    <Text
                      fontSize={["sm", "md", "lg"]}
                      fontWeight={"semibold"}
                      textAlign={"center"}
                      mb={2}
                    >
                      {state.weightLossByWeeks[3]}
                      {state.weightUnits}
                    </Text>
                  </Stack>
                </Grid>

                <StaticImage src="../images/chart-2.jpg" alt="" />
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
              <Heading fontSize={["2xl", "2xl", "3xl"]} maxW={"container.sm"} fontWeight={"bold"}>
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
