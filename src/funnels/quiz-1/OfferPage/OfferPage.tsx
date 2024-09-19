import * as React from "react";
import { Box, Heading, Button, Icon, Container, Stack, Grid } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { FaArrowRight } from "react-icons/fa";
import { Footer } from "@components/Footer";
import { trackPixelEvent } from "src/tracking";
import "blaze-slider/dist/blaze.css";
import { SpecialOfferBannerTop } from "@components/SpecialOfferBannerTop";
import { HeroSection } from "./HeroSection";
import { SummaryStateProvider, useSummaryState } from "../components/summaryCtx/ctx";

export function OfferPage() {
  React.useEffect(() => {
    trackPixelEvent({ name: "AddToCart" });
  }, []);

  return (
    <SummaryStateProvider>
      <Content />
    </SummaryStateProvider>
  );
}

function Content() {
  const summaryState = useSummaryState();

  return (
    <Box bg="bg.50">
      <SpecialOfferBannerTop />

      <HeroSection
        weightAvgMonthlyLoss={summaryState.weightAvgMonthlyLoss}
        weightUnits={summaryState.weightUnits}
      />

      <FreeGift />
      <Footer />
    </Box>
  );
}

const FreeGift = () => {
  return (
    <Box bg="white" pt={8}>
      <Container maxW={"container.lg"} as={Stack} spacing={4} py={8}>
        <Heading px={8} textAlign={"center"} fontSize={["3xl", "3xl", "4xl"]} mb={8}>
          When you buy bundles, you also get
        </Heading>

        <Grid
          gridTemplateColumns={["1fr", "1fr 1fr"]}
          gap={5}
          alignItems={"start"}
          maxW={["260px", "600px"]}
          mx="auto"
          mb={8}
        >
          <Stack alignItems={"center"}>
            <StaticImage alt="" src="../../../images/free-gift-1.jpg" layout="constrained" />
          </Stack>
          <Stack alignItems={"center"}>
            <StaticImage alt="" src="../../../images/free-gift-2.jpg" layout="constrained" />
          </Stack>
        </Grid>

        <JumptToPricingButton />
      </Container>
    </Box>
  );
};

function JumptToPricingButton() {
  return (
    <Button
      as="a"
      colorScheme="green"
      mx="auto"
      size={"lg"}
      borderRadius={"full"}
      rightIcon={
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          height={"20px"}
          width={"20px"}
          borderRadius={"full"}
          backgroundColor={"white"}
        >
          <Icon as={FaArrowRight} color={"green.500"} boxSize={3} />
        </Stack>
      }
      href="#product-selection"
    >
      Order yours now
    </Button>
  );
}
