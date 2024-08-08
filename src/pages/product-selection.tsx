import * as React from "react";
import { type HeadFC } from "gatsby";

import { LiaShippingFastSolid } from "react-icons/lia";
import { IoBookOutline } from "react-icons/io5";

import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Icon,
  Container,
  Stack,
  Grid,
} from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { FaArrowRight, FaShippingFast } from "react-icons/fa";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { RiRefund2Line } from "react-icons/ri";
import { Span, Timer } from "../components/components";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SEO } from "@components/SEO";

import { trackPixelEvent } from "src/tracking";
import "blaze-slider/dist/blaze.css";
import { loadQuizState, SavedState } from "src/localStorage";
import { ProductSelectionSection } from "@components/ProductSelection";
import { Recommendation } from "@components/Recommendation";

export const Head: HeadFC = () => {
  return <SEO />;
};

export default function Page() {
  const [quizState, setQuizState] = React.useState<SavedState>();

  React.useEffect(() => {
    trackPixelEvent({ name: "AddToCart" });
    setQuizState(loadQuizState());
  }, []);

  return (
    <Box bg="bg.50">
      <BannerTop />
      <Header />
      <Hero />
      <Banner />
      <SpecialOfferTimer />
      <ProductSelectionSection email={quizState?.email} />
      <BadgesSection />
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
          maxW={"container.sm"}
          mx="auto"
          mb={8}
        >
          <Stack alignItems={"center"}>
            <StaticImage alt="" src="../images/free-gift-1.jpg" layout="constrained" />
          </Stack>
          <Stack alignItems={"center"}>
            <StaticImage alt="" src="../images/free-gift-2.jpg" layout="constrained" />
          </Stack>
        </Grid>

        <JumptToPricingButton />
      </Container>
    </Box>
  );
};

const Hero = () => {
  return (
    <Box backgroundColor="brand.100" pt={6} pb={5}>
      <Container maxW={"container.lg"} as={Stack} spacing={4}>
        <Heading
          mx="auto"
          px={8}
          textAlign={"center"}
          fontSize={["2xl", "2xl", "4xl"]}
          maxW={"container.sm"}
        >
          We Did It: Combat Stress and Shed Pounds with Our All-in-One Solution!
        </Heading>

        <Recommendation />
      </Container>
    </Box>
  );
};

const SpecialOfferTimer = () => {
  return (
    <Box backgroundColor={"brand.100"} pt={3}>
      <Container maxW={"container.lg"}>
        <Stack backgroundColor="white" px={4} py={3} width={"full"} mx="auto">
          <Stack
            maxW={"container.sm"}
            width={"full"}
            mx="auto"
            alignItems={"center"}
            direction={["column", "row"]}
            justifyContent={"space-between"}
            spacing={[0, 4]}
          >
            <Timer color={"red.400"} fontSize={"3xl"} fontWeight={"semibold"} />
            <Text fontSize={["sm", "md"]} textAlign={"center"}>
              <Text as="span" fontWeight={"bold"}>
                HURRY!
              </Text>{" "}
              Summer special offer expires soon
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

const Banner = () => (
  <Box backgroundColor={"brand.100"} pt={4}>
    <Container maxW={"container.lg"} color="white">
      <Stack bgGradient="linear(to-r, #f49d15, #ff4b4b)" px={4} py={3}>
        <Stack
          maxW={"container.sm"}
          width={"full"}
          mx="auto"
          direction={"row"}
          alignItems={"center"}
        >
          <Stack lineHeight={1}>
            <Text textTransform={"uppercase"} fontWeight={"bold"} fontSize={"lg"}>
              Summer sale
            </Text>

            <Stack spacing={1}>
              <Stack direction={"row"} alignItems={"center"}>
                <Icon as={LiaShippingFastSolid} />
                <Text textTransform={"uppercase"} fontWeight={"semibold"} fontSize={"xs"}>
                  Get free shipping
                </Text>
              </Stack>

              <Stack direction={"row"} alignItems={"center"}>
                <Icon as={IoBookOutline} />
                <Text textTransform={"uppercase"} fontWeight={"semibold"} fontSize={"xs"}>
                  + Effective Weight Loss Guide
                </Text>
              </Stack>
            </Stack>
          </Stack>

          <Stack lineHeight={1} spacing={1} alignItems={"center"} ml="auto">
            <Text textTransform={"uppercase"} fontWeight={"bold"} fontSize={"sm"}>
              Save up to
            </Text>

            <Text textTransform={"uppercase"} fontWeight={"bold"} fontSize={"4xl"}>
              60%
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  </Box>
);

const BannerTop = () => (
  <Flex
    bgGradient="linear(to-r, #f49d15, #ff4b4b)"
    fontWeight={"semibold"}
    color="white"
    py={1}
    px={3}
  >
    <Container
      as={Flex}
      gap={0}
      alignItems={"center"}
      justifyContent={"space-between"}
      maxW={["container.lg"]}
      fontSize={["sm", null, "md"]}
    >
      <Flex justifyContent={"center"} alignItems={"center"} gap={[0, 1, 1]} flexWrap={"wrap"}>
        <Flex gap={1}>
          <Text>Summer sale</Text>
        </Flex>
      </Flex>
      <Text>⚡</Text>
      <Text textAlign={"center"}>60% OFF</Text>
      <Text>⚡</Text>
      <Text textAlign={"center"}>Free Shipping</Text>
    </Container>
  </Flex>
);

function BadgesSection() {
  return (
    <SimpleGrid
      columns={[1, 1, 3]}
      bg="primary.300"
      py={6}
      flexWrap={"wrap"}
      spacing={3}
      justifyItems={"center"}
      color="pink.800"
      id="reviews"
      fontSize={"sm"}
    >
      <Flex alignItems={"center"} gap={2}>
        <Icon boxSize={6} as={FaShippingFast} />
        <Text fontWeight={"bold"}>Free Shipping</Text>
      </Flex>

      <Flex alignItems={"center"} gap={2}>
        <Icon boxSize={6} as={RiRefund2Line} />
        <Text fontWeight={"bold"}>14-Day Money-back Guarantee</Text>
      </Flex>

      <Flex alignItems={"center"} gap={2}>
        <Icon boxSize={6} as={LiaFlagUsaSolid} />
        <Text fontWeight={"bold"}>Blended in the USA</Text>
      </Flex>
    </SimpleGrid>
  );
}

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
