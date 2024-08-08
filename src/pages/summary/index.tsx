import { type HeadFC } from "gatsby";

import { Box } from "@chakra-ui/react";

import { reviews, topReviews } from "../../reviews";

import { Header } from "@components/Header";
import { Footer } from "@components/Footer";

import { SEO } from "@components/SEO";

import { VideoTestimonials } from "./VideoTestimonials";
import { HowItWorksSection } from "./HowItWorks";
import { FactsFromCustomersSection } from "./Facts";
import { FAQSection } from "./FAQ";
import { Hero } from "./Hero";
import { ProductPreview } from "./ProductPreview";
import { ReviewsSection } from "./Reviews";
import { Summary } from "./Summary";
import { ReadableStateProvider } from "./ctx";
import { AshwaRevivalSection } from "./Research";
import { IngredientsSection } from "./Ingredients";
import { Recommendation } from "@components/Recommendation";

export const Head: HeadFC = () => {
  return <SEO />;
};

export default function Page() {
  return (
    <ReadableStateProvider>
      <Box>
        <Header />
        <Hero />
        <ProductPreview />
        <VideoTestimonials reviews={topReviews} />
        <Summary />
        <IngredientsSection />
        <HowItWorksSection />
        <ReviewsSection reviews={reviews} />
        {/* <FactsFromCustomersSection /> */}
        <AshwaRevivalSection />
        <FAQSection />
        <Footer />
      </Box>
    </ReadableStateProvider>
  );
}
