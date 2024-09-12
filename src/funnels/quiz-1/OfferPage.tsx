import * as React from "react";
import { Box, Heading, Button, Icon, Container, Stack, Grid } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { FaArrowRight } from "react-icons/fa";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { trackPixelEvent } from "src/tracking";
import "blaze-slider/dist/blaze.css";
import { ProductSelectionSection } from "@components/ProductSelection";
import { Recommendation } from "@components/Recommendation";
import { FreeShippingSection } from "@components/FreeShipping";
import { SpecialOfferBannerTop } from "@components/SpecialOfferBannerTop";
import { SpecialOfferBanner } from "@components/SpecialOfferBanner";
import { SpecialOfferTimer } from "@components/SpecialOfferTimer";

export function OfferPage() {
  React.useEffect(() => {
    trackPixelEvent({ name: "AddToCart" });
  }, []);

  return (
    <Box bg="bg.50">
      <SpecialOfferBannerTop />
      <Header />
      <Box backgroundColor={"primary.100"} pt={4}>
        <SpecialOfferBanner />
      </Box>
      <Box backgroundColor={"primary.100"} pt={1}>
        <SpecialOfferTimer />
      </Box>
      <Hero />
      <ProductSelectionSection />
      <FreeShippingSection />
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
            <StaticImage alt="" src="../../images/free-gift-1.jpg" layout="constrained" />
          </Stack>
          <Stack alignItems={"center"}>
            <StaticImage alt="" src="../../images/free-gift-2.jpg" layout="constrained" />
          </Stack>
        </Grid>

        <JumptToPricingButton />
      </Container>
    </Box>
  );
};

const Hero = () => {
  return (
    <Box backgroundColor="primary.100" pt={10} pb={3}>
      <Container maxW={"container.lg"} as={Stack} spacing={4}>
        <Heading
          mx="auto"
          px={8}
          textAlign={"center"}
          fontSize={["3xl", "3xl", "4xl"]}
          maxW={"container.sm"}
        >
          Lose Weight For Under $1 Per Day!
        </Heading>

        <Box mt={1}>
          <Recommendation />
        </Box>
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
      rightIcon={<Icon as={FaArrowRight} />}
      href="#pricing-section"
    >
      Order yours now
    </Button>
  );
}
