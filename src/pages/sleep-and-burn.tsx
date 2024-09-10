import { type HeadFC } from "gatsby";

import { Box, Stack } from "@chakra-ui/react";

import { reviews, topReviews } from "../reviews";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { SEO } from "@components/SEO";

import { FAQSection } from "@components/sections/FAQ";
import { Disclaimer } from "@components/sections/Disclaimer";
import { ReviewsSection } from "@components/sections/Reviews";
import { ComparisonSection } from "@components/sections/ComparisonSection";
import { IngredientsSection } from "@components/sections/Ingredients";
import { VideoTestimonials } from "@components/sections/VideoTestimonials";
import {
  getAvgMonthlyWeightLoss,
  getMonthlyWeightLossByWeeks,
} from "@components/sections/summary/utils";

import { HeroSection } from "@components/SleepAndBurn/HeroSection";
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

      <ComparisonSection />

      <IngredientsSection />

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
