import { Link, type HeadFC } from "gatsby";

import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Icon,
  Stack,
  StackProps,
  Text,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa6";

import { reviews, topReviews } from "../reviews";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { SEO } from "@components/SEO";

import { FreeShippingSection } from "@components/sections/FreeShipping";
import { Recommendation } from "@components/Recommendation";
import { FAQSection } from "@components/sections/FAQ";
import { Disclaimer } from "@components/sections/Disclaimer";
import { ReviewsSection } from "@components/sections/Reviews";
import { HowItWorksSection } from "@components/sections/HowItWorks";
import { IngredientsSection } from "@components/sections/Ingredients";
import { VideoTestimonials } from "@components/sections/VideoTestimonials";
import { ProductPreview } from "@components/sections/ProductPreview";
import { CustomerOutcomes } from "@components/sections/CustomerOutcomes";
import {
  getAvgMonthlyWeightLoss,
  getMonthlyWeightLossByWeeks,
} from "@components/sections/summary/utils";

import { HeroSection } from "@components/SleepAndBurn/HeroSection";
import { StaticImage } from "gatsby-plugin-image";

export const Head: HeadFC = () => {
  return <SEO />;
};

export default function Page() {
  const weightAvgMonthlyLoss = getAvgMonthlyWeightLoss("imperial");
  const weightLossByWeeks = getMonthlyWeightLossByWeeks("imperial").map((it) => -it);
  const weightUnits = "lbs";

  return (
    <Box>
      {/* <SpecialOfferBannerTop /> */}

      <Header />

      <HeroSection weightAvgMonthlyLoss={weightAvgMonthlyLoss} weightUnits={weightUnits} />

      <Box pt={6} bg="primary.100" px={4}>
        <Recommendation />
      </Box>

      <FreeShippingSection />

      <Stack spacing={0}>
        <VideoTestimonials reviews={topReviews} />
        <ProductPreview weightAvgMonthlyLoss={weightAvgMonthlyLoss} weightUnits={weightUnits} />
        <CTAButton mb={10} />
      </Stack>

      <Box bg="primary.100" py={10}>
        <Container maxW={"container.lg"}>
          <Stack spacing={6}>
            <SmallWinsSection
              weightUnits={weightUnits}
              weightAvgMonthlyLoss={weightAvgMonthlyLoss}
              weightLossByWeeks={weightLossByWeeks}
            />

            <CustomerOutcomes />

            <CTAButton mt={6} />
          </Stack>
        </Container>
      </Box>

      <IngredientsSection />
      <HowItWorksSection />

      <Stack backgroundColor={"#f3eef2"} spacing={0}>
        <CTAButton mb={10} />
      </Stack>

      <ReviewsSection reviews={reviews} />
      <CTAButton />

      <Disclaimer weightAvgMonthlyLoss={weightAvgMonthlyLoss} weightUnits={weightUnits} />
      <FAQSection />

      <Footer />
    </Box>
  );
}

function CTAButton(props: StackProps) {
  return (
    <Stack width={["full", "unset"]} alignItems="center" {...props}>
      <Link to="/sleep-and-burn/#product-selection">
        <Button
          size="lg"
          mx="auto"
          variant={"solid"}
          borderRadius={"full"}
          width={"100%"}
          py={7}
          px={10}
          colorScheme={"pink"}
          rightIcon={<Icon as={FaArrowRight} />}
        >
          Get Sleep & Burn
        </Button>
      </Link>
    </Stack>
  );
}

export function SmallWinsSection(props: {
  weightAvgMonthlyLoss: number;
  weightUnits: string;
  weightLossByWeeks: number[];
}) {
  return (
    <Grid
      gridTemplateColumns={["auto", "auto", "1fr 1fr"]}
      gridTemplateAreas={['"headline" "graph"', '"headline" "graph"', '"graph headline"']}
      alignItems={"center"}
      gap={6}
      width={"full"}
      justifyContent={"space-between"}
    >
      <Stack gridArea={"graph"} p={6} backgroundColor="white" borderRadius={"lg"}>
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

      <Stack gridArea={"headline"} textAlign={["center", "center", "right"]}>
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
