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

import { Shipping } from "@components/sections/Shipping";
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
import { MediaSection } from "@components/SleepAndBurn/MediaSection";
import { ChartsSection } from "@components/SleepAndBurn/ChartsSection";
import { CTAButton } from "@components/components";

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
      <MediaSection />
      <VideoTestimonials reviews={topReviews} />

      <ChartsSection
        weightUnits={weightUnits}
        weightAvgMonthlyLoss={weightAvgMonthlyLoss}
        weightLossByWeeks={weightLossByWeeks}
      />

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
