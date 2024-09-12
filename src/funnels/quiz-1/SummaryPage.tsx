import { reviews, topReviews } from "@components/reviews";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { VideoTestimonials } from "@components/VideoTestimonials";
import { HowItWorksSection } from "@components/HowItWorks";
import { ProductPreview } from "@components/ProductPreview";
import { ReviewList } from "@components/ReviewList";
import { QuizSummary } from "./components/Summary";
import { AshwaRevivalSection } from "./components/Research";
import { IngredientsSection } from "@components/Ingredients";
import { Link } from "gatsby";
import { FaArrowRight as ArrowRight } from "react-icons/fa6";
import { Box, Heading, Text, Button, Icon, Container, Stack, Grid } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { FaArrowRight } from "react-icons/fa6";
import { Recommendation } from "@components/Recommendation";
import { SummaryStateProvider, useSummaryState } from "./components/summaryCtx/ctx";
import { Span } from "@components/components";
import { getReadableDateTime } from "src/utils";
import { Disclaimer } from "@components/Disclaimer";
import { SmallWinsSection } from "./components/SmallWins";
import { FAQList } from "@components/FAQList";
import { CTAButton } from "./components/CTAButton";

export function SummaryPage() {
  return (
    <SummaryStateProvider>
      <PageContents />
    </SummaryStateProvider>
  );
}

function PageContents() {
  const summaryState = useSummaryState();

  return (
    <Box>
      <Header />
      <Hero />
      <ProductPreview />

      <Stack>
        <VideoTestimonials reviews={topReviews} />
        <CTAButton mb={12} />
      </Stack>

      <QuizSummary />
      <IngredientsSection />

      <Stack backgroundColor={"#f3eef2"}>
        <HowItWorksSection />
        <CTAButton mb={10} />
      </Stack>

      <Stack>
        <ReviewList reviews={reviews} />
        <CTAButton />
      </Stack>

      <Disclaimer
        weightAvgMonthlyLoss={summaryState.weightAvgMonthlyLoss}
        weightUnits={summaryState.weightUnits}
      />

      <Box py={8} bg="primary.100">
        <Container maxW={"container.md"}>
          <FAQList />
        </Container>
      </Box>

      <AshwaRevivalSection />
      <Footer />
    </Box>
  );
}

const Hero = () => {
  const state = useSummaryState();

  const startDate = new Date();
  const endDate = new Date();
  endDate.setMonth(startDate.getMonth() + state.weightLossDuration);

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
              <Heading color="primary.800" fontSize={["3xl", "3xl", "3xl"]} maxW={"container.sm"}>
                Sleep & Burn Is a Perfect Match For Your{" "}
                <Span textDecoration={"underline"} color="black">
                  Maximized Fat Burn
                </Span>{" "}
                and{" "}
                <Span textDecoration={"underline"} color="black">
                  Improved Sleep
                </Span>
              </Heading>

              <Text fontSize={"lg"} mt={4}>
                <Span fontWeight={"bold"} fontSize={"xl"}>
                  92%
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
                    {getReadableDateTime(startDate)}
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
                    {getReadableDateTime(endDate)}
                  </Text>
                  <Text fontSize={"3xl"} fontWeight={"bold"} textAlign={"right"}>
                    {state.weightEnd}
                    {state.weightUnits}
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
                  {state.weightDiff > 0 ? "-" : ""}
                  {state.weightDiff}
                  {state.weightUnits}
                </Text>
              </Box>
            </Stack>
          </Grid>

          <SmallWinsSection
            weightAvgMonthlyLoss={state.weightAvgMonthlyLoss}
            weightUnits={state.weightUnits}
            weightLossByWeeks={state.weightLossByWeeks}
          />

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

          <CTAButton />
        </Stack>
      </Container>
    </Box>
  );
};
