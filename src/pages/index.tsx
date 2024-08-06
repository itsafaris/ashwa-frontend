import * as React from "react";
import { type HeadFC } from "gatsby";

import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Badge,
  SimpleGrid,
  Icon,
  Container,
  GridItem,
  AspectRatio,
  Stack,
  Grid,
  IconButton,
} from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { IoPersonCircle } from "react-icons/io5";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaCheckCircle,
  FaRegCheckCircle,
  FaRegCircle,
  FaShippingFast,
  FaTimes,
} from "react-icons/fa";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { RiRefund2Line } from "react-icons/ri";
import { Rating, Span, Timer } from "../components/components";
import { Review, reviews, topReviews } from "../reviews";
import { css, Global } from "@emotion/react";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import { siteConfig } from "../conf";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FAQ } from "../components/FAQ";
import { SEO } from "@components/SEO";
import { getProducts, Product, PurchaseType } from "src/products";
import { getPageUrl } from "./purchase-success";
import { trackEvent } from "src/tracking";

import BlazeSlider, { BlazeConfig } from "blaze-slider";
import "blaze-slider/dist/blaze.css";
import { ProductSelectionSection } from "@components/ProductSelection";

function useBlazeSlider(config: BlazeConfig) {
  const sliderRef = React.useRef<BlazeSlider>();
  const elRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!sliderRef.current) {
      sliderRef.current = new BlazeSlider(elRef.current!, config);
    }
  }, []);

  return { elRef, sliderRef };
}

const TOTAL_NUMBER_OF_REVIEWS = 1247;

const comparisonData = [
  {
    your_product: "Handles stress with ease",
    competitors: "Overwhelmed by daily stress",
  },
  {
    your_product: "Enjoys steady, all-day energy",
    competitors: "Struggles with energy crashes",
  },
  {
    your_product: "Sleeps soundly, wakes refreshed",
    competitors: "Tosses and turns at night",
  },
  {
    your_product: "Skin glows with vitality",
    competitors: "Skin looks dull and tired",
  },
  {
    your_product: "Balanced mood, stronger connections",
    competitors: "Mood swings affect relationships",
  },
  {
    your_product: "Crushing goals, living vibrantly",
    competitors: "Feels stuck in a rut",
  },
];

export const Head: HeadFC = () => {
  return <SEO />;
};

export default function Page() {
  return (
    <Box bg="bg.50">
      <Banner />
      <Header />
      <ProductCarouselSection />
      <ProductSelectionSection />
      <RecommendedUsageSection />
      <BadgesSection />
      <TopReviewsSection reviews={topReviews} />
      <ComparisonSection />
      <FactsFromCustomersSection />
      <IngredientsSection />
      <AshwaRevivalSection />
      <ReviewsSection reviews={reviews} />
      <ProductSelectionSection />
      <FAQSection />
      {/* <MainHero /> */}
      <Footer />
    </Box>
  );
}

const Banner = () => (
  <Flex
    bgGradient="linear(to-r, orange.400, primary.500)"
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

const MainHero = () => {
  const values = [
    "🧠 Struggles with brain fog",
    "🔋 Feels lacking energy throughout the day",
    "😰 Often feels overwhelmed",
    "🎭 Finds it hard to cope with daily stress",
    "😴 Yearns for better quality sleep",
  ];

  return (
    <Box py={8}>
      <Heading
        as="h1"
        mx="auto"
        mb={3}
        maxWidth={"720px"}
        px={8}
        textAlign={"center"}
        fontSize={"2xl"}
      >
        Go From Frazzled to Fabulous with our unique Nature-based 5-Key Solution to Modern Woman's
        Stress
      </Heading>

      <SimpleGrid columns={[1, 1, 2]}>
        <AspectRatio ratio={1} maxW={650}>
          <StaticImage src="../images/product3.png" alt="ashwagandha supplement for women health" />
        </AspectRatio>

        <Box>
          <Text
            fontFamily={"heading"}
            fontSize={"2xl"}
            fontWeight={"bold"}
            textAlign={"center"}
            my={4}
          >
            If you are one who:
          </Text>
          <Flex gap={2} direction={"column"} alignItems={"center"}>
            {values.map((value) => (
              <Flex
                key={value}
                bg="shade.100"
                p={1}
                borderRadius={"full"}
                fontWeight={"semibold"}
                fontSize={"sm"}
                alignItems={"center"}
              >
                <Text>{value}</Text>
              </Flex>
            ))}
          </Flex>
          <Text textAlign={"center"} mt={4}>
            On average, our customers start feeling positive effects within the first week of use
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

const benefits = [
  "🧠 Banish brain fog",
  "⚖️ More Consistent weight-loss",
  "⚡ Elevate your energy levels",
  "🧘‍♀️ Ease anxiety",
  "🧠 Improve Cognitive Function",
  "😴 Better Sleep Quality",
];

const ProductCarouselSection = () => {
  const thumbsContainer = React.useRef<HTMLDivElement>(null);

  const { elRef, sliderRef } = useBlazeSlider({
    all: {
      slidesToShow: 1,
      loop: true,
    },
  });

  React.useEffect(() => {
    const s = sliderRef.current!;

    addActive(s.stateIndex);

    function removeActive() {
      thumbsContainer.current?.childNodes.forEach((it) => {
        let a = it as HTMLDivElement;
        a.classList.remove("active");
      });
    }

    function addActive(idx: number) {
      const it = thumbsContainer.current?.children.item(idx);
      it!.classList.add("active");
    }

    const unsub = s.onSlide((a) => {
      removeActive();
      addActive(a);
    });

    return () => {
      unsub();
    };
  }, []);

  const images = [
    <StaticImage
      src="../images/carousel1.jpg"
      alt="Ashwagandha Supplement"
      height={500}
      width={500}
    />,
    <StaticImage
      src="../images/carousel2.jpg"
      alt="Ashwagandha Supplement"
      height={500}
      width={500}
    />,
    <StaticImage
      src="../images/carousel3.jpg"
      alt="Ashwagandha Supplement"
      height={500}
      width={500}
    />,
    <StaticImage
      src="../images/carousel4.jpg"
      alt="Ashwagandha Supplement"
      height={500}
      width={500}
    />,
    <StaticImage
      src="../images/carousel5.jpg"
      alt="Ashwagandha Supplement"
      height={500}
      width={500}
    />,
    <StaticImage
      src="../images/carousel6.jpg"
      alt="Ashwagandha Supplement"
      height={500}
      width={500}
    />,
  ];

  return (
    <Box bg="white">
      <Global
        styles={css`
          .slider_thumbnail.active {
            border-color: var(--chakra-colors-primary-500);
            border-width: 2px;
          }
        `}
      />
      <Container maxW={["container.sm", null, "container.lg"]}>
        <Flex py={4} flexWrap={"wrap"} gap={8}>
          <Box minWidth={340} flex={1}>
            <Box className="blaze-slider" ref={elRef} position={"relative"}>
              <IconButton
                aria-label="arrow left"
                variant={"ghost"}
                icon={<Icon as={FaArrowLeft} />}
                position={"absolute"}
                top={"50%"}
                transform={"translateY(-50%)"}
                left={0}
                zIndex={1}
                onClick={() => sliderRef.current?.prev()}
              />
              <IconButton
                aria-label="arrow right"
                variant={"ghost"}
                icon={<Icon as={FaArrowRight} />}
                position={"absolute"}
                top={"50%"}
                transform={"translateY(-50%)"}
                right={0}
                zIndex={1}
                onClick={() => sliderRef.current?.next()}
              />

              <div className="blaze-container">
                <div className="blaze-track-container">
                  <div className="blaze-track">
                    {images.map((it, idx) => (
                      <AspectRatio className="keen-slider__slide" key={idx} ratio={1} mx="auto">
                        {it}
                      </AspectRatio>
                    ))}
                  </div>
                </div>
              </div>
            </Box>

            <Flex alignItems={"center"} gap={3} mt={2}>
              <Flex
                flex={1}
                gap={2}
                justifyContent={"start"}
                flexWrap={"wrap"}
                ref={thumbsContainer}
              >
                {images.map((it, idx) => (
                  <AspectRatio
                    key={idx}
                    ratio={1}
                    w={"60px"}
                    border={"1px solid"}
                    borderColor={"bg.200"}
                    borderRadius={"md"}
                    overflow={"hidden"}
                    // outline={"2px solid"}
                    className="slider_thumbnail"
                    onClick={() => {
                      const offset = sliderRef.current!.stateIndex;
                      console.log(sliderRef.current);
                      if (offset === idx) {
                        return;
                      }

                      const direction = idx > offset ? 1 : -1;
                      console.log(direction);

                      if (direction === 1) {
                        sliderRef.current?.next(idx - offset);
                      } else {
                        sliderRef.current?.prev(Math.abs(idx - offset));
                      }
                    }}
                  >
                    {it}
                  </AspectRatio>
                ))}
              </Flex>
            </Flex>
          </Box>
          <Box flex={1} minWidth={300}>
            <Text color="purple.600" fontWeight={"bold"} textTransform={"uppercase"}>
              Summer Sale
            </Text>
            <Heading as="h1" fontSize="3xl">
              Most complete Blend of Ashwagandha for Modern Busy Women
            </Heading>
            <Flex alignItems={"center"} gap={2} py={2}>
              <Text fontSize={"sm"}>4.7</Text>
              <Rating />
              <a href="#reviews">
                <Text fontSize={"sm"} decoration={"underline"}>
                  {TOTAL_NUMBER_OF_REVIEWS} Reviews
                </Text>
              </a>
            </Flex>
            <Text mt={4}>
              Our all-in-one supplement blend - the only one you'll need to{" "}
              <Span fontWeight={"bold"}>combat stress</Span>,{" "}
              <Span fontWeight={"bold"}>sharpen focus</Span>, and{" "}
              <Span fontWeight={"bold"}>boost energy</Span>. This revolutionary formula uniquely
              combines Ashwagandha, Rhodiola Extract, and Bacopa with essential vitamins and
              minerals, creating a powerhouse solution tailored specifically for the modern woman's
              needs.
            </Text>
            <Flex direction={"column"} gap={1} py={6}>
              {benefits.map((b) => (
                <Text key={b} fontWeight={"semibold"} fontSize={"sm"}>
                  {b}
                </Text>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

function BadgesSection() {
  return (
    <SimpleGrid
      mt={4}
      columns={[1, 1, 3]}
      bg="white"
      py={4}
      flexWrap={"wrap"}
      spacing={3}
      justifyItems={"center"}
      color="gray.700"
      id="reviews"
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

function RecommendedUsageSection() {
  return (
    <Flex mt={4} py={4}>
      <Container as={Flex} flexWrap={"wrap"} gap={3} alignItems={"center"}>
        <StaticImage
          src="../images/product2.png"
          alt="bundle of 3 supplement bottles"
          width={100}
        />
        <Text flex={1} fontSize={"sm"}>
          💡 We recommend starting with the <Span fontWeight={"bold"}>3-month plan</Span> to achieve
          effective results or a <Span fontWeight={"bold"}>6-month plan</Span> to form a
          longer-lasting routine.
        </Text>
      </Container>
    </Flex>
  );
}

const AshwaRevivalSection = () => {
  const studies = [
    {
      title: "Anxiety Reduction",
      year: 2000,
      src: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2958355/",
      summarized_outcome: "56.5% reduction in anxiety scores on the Hamilton Anxiety Rating Scale",
    },
    {
      title: "Stress Reduction",
      year: 2008,
      src: "https://pubmed.ncbi.nlm.nih.gov/23439798/",
      summarized_outcome: "30.5% reduction in cortisol levels",
    },
    {
      title: "Cortisol Reduction",
      year: 2012,
      src: "https://pubmed.ncbi.nlm.nih.gov/23439798/",
      summarized_outcome: "27.9% reduction in serum cortisol levels",
    },
    {
      title: "Muscle Strength and Recovery",
      year: 2015,
      src: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4658772/",
      summarized_outcome:
        "21.5% increase in muscle strength in the bench press and a 24% increase in leg extension strength",
    },
    {
      title: "Sleep Quality",
      year: 2019,
      src: "https://pubmed.ncbi.nlm.nih.gov/31728244/",
      summarized_outcome:
        "72% improvement in sleep onset latency and a 42% improvement in overall sleep quality",
    },
    {
      title: "Sports Performance",
      year: 2021,
      src: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8006238/",
      summarized_outcome:
        "13.6% increase in VO2 max and a 10.5% improvement in their time to exhaustion during endurance tests",
    },
    {
      title: "Cognitive Function",
      year: 2022,
      src: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9565281/",
      summarized_outcome:
        "14.3% improvement in memory and a 9.8% improvement in executive function",
    },
  ];

  return (
    <Box py={16} bg={"shade.100"}>
      <Container maxW={"container.md"}>
        <Heading mx="auto" mb={6} px={8} textAlign={"center"}>
          Why Ashwagandha
          <br /> Is 2024's Stress-Busting Superstar
        </Heading>

        <Stack spacing={2} my={8}>
          <Text>
            Ashwagandha's recent surge in popularity is no coincidence. This ancient herb has
            captured modern attention due to a perfect storm of factors.
          </Text>
          <Text>
            Busy professionals are flocking to this stress-busting, energy-boosting powerhouse as
            their secret weapon against burnouts.
          </Text>
        </Stack>

        <Heading as={"h3"} fontSize={"2xl"} textAlign={"center"} my={4}>
          And More So, It's Backed by numerous clinical studies
        </Heading>

        <Flex bg="white" borderRadius={"lg"}>
          <StaticImage
            src="../images/studies.png"
            alt="ashwagandha clinical studies timeline"
            width={800}
          />
        </Flex>
        <Stack spacing={4} my={6}>
          {studies.map((study) => (
            <Flex key={study.year} direction={"column"} fontSize={"sm"}>
              <a href={study.src} target="_blank" rel="noopener noreferrer">
                <Text textDecoration={"underline"} color="blue.500">
                  {study.year} - {study.title}
                </Text>
              </a>
              <Text fontWeight={"semibold"}>{study.summarized_outcome}</Text>
            </Flex>
          ))}
        </Stack>

        <Flex mt={16}>
          <JumptToPricingButton />
        </Flex>
      </Container>
    </Box>
  );
};

function FAQSection() {
  return (
    <Box py={8} bg="shade.100">
      <Container maxW={"container.md"}>
        <FAQ />
      </Container>
    </Box>
  );
}

function TopReviewsSection({ reviews }: { reviews: Review[] }) {
  return (
    <Box py={8} bg="shade.100">
      <Container maxW={"container.lg"}>
        <Heading my={6} textAlign={"center"}>
          Don't Just Take Our Word
        </Heading>

        <Grid
          gridTemplateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]}
          alignItems={"center"}
          gap={3}
        >
          {reviews.map((review, idx) => {
            return (
              <Stack
                key={idx}
                height={"400px"}
                width={"100%"}
                maxW={"400px"}
                backgroundColor={"white"}
                mx={"auto"}
                borderRadius={"lg"}
                position={"relative"}
                overflow={"hidden"}
              >
                {review.img && (
                  <Flex
                    height={"100%"}
                    width={"100%"}
                    position={"absolute"}
                    top={0}
                    left={0}
                    zIndex={0}
                  >
                    {review.img}
                  </Flex>
                )}

                <Box
                  position={"absolute"}
                  top={0}
                  left={0}
                  height={"100%"}
                  width={"100%"}
                  bgGradient={"linear(to-t, gray.900, transparent)"}
                  zIndex={0}
                />

                <Stack
                  direction={"column"}
                  p={2}
                  px={3}
                  zIndex={1}
                  color="white"
                  lineHeight={1.3}
                  spacing={1}
                  height={"220px"}
                  mt={"auto"}
                >
                  <Text fontWeight={"bold"} fontSize={"lg"}>
                    {review.title}
                  </Text>

                  <Stack flexDirection={"row"} spacing={1} alignItems={"center"}>
                    <Icon as={IoPersonCircle} color="gray.400" boxSize={6} />
                    <Text>{review.name}</Text>
                  </Stack>

                  <Stack flexDirection={"row"} spacing={1} alignItems={"center"}>
                    <Rating rating={review.score} />
                    <Text fontWeight={"semibold"} fontSize={"xs"}>
                      Verified Purchase
                    </Text>
                  </Stack>

                  <Text fontSize={"sm"}>{review.text}</Text>
                </Stack>
              </Stack>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

function ReviewsSection({ reviews }: { reviews: Review[] }) {
  return (
    <Box py={8}>
      <Container maxW={"container.md"}>
        <Heading my={6} textAlign={"center"}>
          Real Stories, Real Results
        </Heading>
        <Flex my={4} gap={2} justifyContent={"space-between"}>
          <Text fontSize={"sm"}>
            Showing <Span decoration={"underline"}>most recent</Span> reviews from{" "}
            <Span decoration={"underline"} whiteSpace={"nowrap"}>
              United States
            </Span>{" "}
          </Text>
          <Text flexShrink={0} fontSize={"xs"} color="gray.500">
            <Span color="black" fontWeight={"semibold"}>
              {reviews.length}
            </Span>{" "}
            / {TOTAL_NUMBER_OF_REVIEWS}
          </Text>
        </Flex>
        <Flex direction={"column"} gap={3}>
          {reviews.map((review, idx) => {
            return (
              <Flex key={idx} bg="white" border="1px solid" borderColor={"bg.100"}>
                <Flex direction={"column"} p={2} px={3} flex={1} gap={1}>
                  <Flex alignItems={"center"} gap={2}>
                    <Icon as={IoPersonCircle} color="gray.400" boxSize={6}></Icon>
                    <Text>{review.name}</Text>
                    <Flex alignItems={"center"} gap={1}>
                      <Icon as={FaCheckCircle} color="green.400" boxSize={3}></Icon>
                      <Text fontWeight={"bold"} fontSize={"xs"} color="green.500">
                        Verified Purchase
                      </Text>
                    </Flex>
                  </Flex>

                  <Flex gap={2} alignItems={"center"}>
                    <Rating rating={review.score} />
                    <Text fontWeight={"bold"}>{review.title}</Text>
                  </Flex>

                  <Flex gap={1} direction={"column"}>
                    <Text fontSize={"sm"} color={"gray.700"}>
                      Reviewed in {review.location} {review.hoursAgo} hours ago
                    </Text>
                  </Flex>

                  {review.img && (
                    <Flex height={"140px"} width={"140px"} my={2}>
                      {review.img}
                    </Flex>
                  )}

                  <Text my={2} fontSize={"sm"}>
                    {review.text}
                  </Text>
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      </Container>
    </Box>
  );
}

function ComparisonSection() {
  const ours = comparisonData.map((it) => it.your_product);
  const theirs = comparisonData.map((it) => it.competitors);

  return (
    <Container maxW={"container.xl"} my={16}>
      <Heading textAlign={"center"} my={10}>
        Conquer Chaos.
        <br /> Stay Focused.
        <br /> Embrace Calm.
      </Heading>
      <Grid
        gap={8}
        templateColumns={["1fr", null, "0.6fr 1fr"]}
        alignItems={"center"}
        justifyItems={"center"}
        justifyContent={"center"}
      >
        <GridItem justifySelf={"end"}>
          <StaticImage
            src="../images/stressed.png"
            alt="stressed woman"
            width={400}
            style={{ borderRadius: 16 }}
          />
        </GridItem>
        <GridItem justifySelf={"start"}>
          <Text mb={8} maxW={"md"}>
            Over 40 million women in the US experience stress and anxiety every day. We've already
            helped over 250,000 women find balance and calmness in their lives. Take action now to
            improve your well-being and mental clarity for good.
          </Text>

          <SimpleGrid flex={1} columns={[1, 1, 2]} spacing={2}>
            <Flex direction={"column"} gap={"1px"} bg="white">
              {ours.map((it) => (
                <Flex
                  key={it}
                  py={3}
                  px={3}
                  bg="teal.400"
                  alignItems={"center"}
                  color="white"
                  gap={2}
                >
                  <Icon as={FaCheck} />
                  <Text whiteSpace={"nowrap"} fontWeight={"semibold"} fontSize={"sm"}>
                    {it}
                  </Text>
                </Flex>
              ))}
            </Flex>
            <Flex direction={"column"} bg="white">
              {theirs.map((it, idx) => (
                <Flex
                  key={it}
                  py={3}
                  px={3}
                  borderBottom={"1px solid"}
                  borderBottomColor={"gray.100"}
                  alignItems={"center"}
                  gap={2}
                >
                  <Icon as={FaTimes} color="red.400" />
                  <Text whiteSpace={"nowrap"} fontWeight={"semibold"} fontSize={"sm"}>
                    {it}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Container>
  );
}

function FactsFromCustomersSection() {
  const facts = [
    {
      number: "92%",
      fact: "Feel more balanced and less stressed within just 3 weeks of daily use",
    },
    {
      number: "37 min",
      fact: "Less time to fall asleep",
    },
    {
      number: "78%",
      fact: "No longer need their afternoon coffee",
    },
  ];
  return (
    <Box py={16} bg="shade.100">
      <Container maxWidth={"container.lg"}>
        <Heading textAlign={"center"}>
          Here's what we know - <br />
          <Span textDecoration={"underline"}>for a fact</Span>
        </Heading>
        <Text textAlign={"center"} my={4}>
          Based on our <Span textDecoration={"underline"}>customer survey study</Span> , who've used
          our product for more than 3 weeks
        </Text>
        <SimpleGrid
          columns={[1, 1, 3]}
          alignItems={"start"}
          justifyContent={"center"}
          justifyItems={"center"}
        >
          {facts.map((fact, idx) => (
            <Flex key={idx} direction={"column"} alignItems={"center"} maxW={"260px"}>
              <Text fontSize={"6xl"} fontWeight={"bold"} fontFamily={"heading"}>
                {fact.number}
              </Text>
              <Text textAlign={"center"} fontSize={"sm"} fontWeight={"semibold"}>
                {fact.fact}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>

        <Flex mt={16}>
          <JumptToPricingButton />
        </Flex>
      </Container>
    </Box>
  );
}

function IngredientsSection() {
  const ingredients = [
    {
      name: "Ashwagandha",
      image: (
        <StaticImage
          alt="ashwagandha root"
          src="../images/ashwa1.jpeg"
          height={400}
          objectFit="contain"
        />
      ),
      mainValue: "🤺 Stress Warrior",
      description:
        "By lowering cortisol levels, Ashwagandha helps your body resist the physiological impacts of stress. It's not just about feeling relaxed - it's about empowering your body to thrive under pressure",
    },
    {
      name: "Rhodiola",
      mainValue: "🔋 Energy Amplifier",
      description:
        "Combats both mental and physical fatigue, helping you tap into reserves of energy you didn't know you had",
      image: (
        <StaticImage
          alt="Rhodiola rosea"
          src="../images/rhodiola-rosea.jpg"
          height={400}
          objectFit="contain"
        />
      ),
    },
    {
      name: "Bacopa",
      mainValue: "🧠 Memory Maestro",
      description:
        "An herb that supports cognitive function, memory, and focus. It works synergistically with ashwagandha to enhance mental clarity",
      image: (
        <StaticImage
          alt="Bacopa monnieri"
          src="../images/bacopa.jpg"
          height={400}
          objectFit="contain"
        />
      ),
    },
    // {
    //   name: "GABA",
    //   mainValue: "🌙 Calming Agent",
    //   description:
    //     "A neurotransmitter that promotes relaxation and reduces neural excitability, helping you unwind and de-stress.",
    //   image: (
    //     <StaticImage
    //       alt="Bacopa monnieri"
    //       src="../images/bacopa.jpg"
    //       height={400}
    //       objectFit="contain"
    //     />
    //   ),
    // },
    // {
    //   name: "L-Theanine",
    //   mainValue: "🌿 Relaxation Promoter",
    //   description:
    //     "A neurotransmitter that promotes relaxation and reduces neural excitability, helping you unwind and de-stress.",
    //   image: (
    //     <StaticImage
    //       alt="Bacopa monnieri"
    //       src="../images/ltheanine.png"
    //       height={400}
    //       objectFit="contain"
    //     />
    //   ),
    // },
  ];

  return (
    <Container maxWidth={"container.lg"} my={16}>
      <Heading textAlign={"center"} my={10}>
        Nature's Time-Tested <Span decoration={"underline"}>Trio</Span>:<br /> The Ultimate
        Stress-Busting Powerhouse
      </Heading>
      <Text textAlign={"center"} my={4} maxWidth={"xl"} mx="auto">
        This powerful trio of adaptogenic herbs works synergistically to create a comprehensive
        approach to{" "}
        <Span fontWeight={"bold"} decoration={"underline"}>
          stress management
        </Span>
        ,{" "}
        <Span fontWeight={"bold"} decoration={"underline"}>
          cognitive enhancement
        </Span>
        , and{" "}
        <Span fontWeight={"bold"} decoration={"underline"}>
          overall well-being
        </Span>
        , providing a natural solution to the demands of modern life.
      </Text>
      <SimpleGrid
        columns={[1, 1, 3]}
        my={8}
        gap={6}
        alignItems={"stretch"}
        justifyContent={"center"}
        justifyItems={"stretch"}
      >
        {ingredients.map((fact, idx) => (
          <Flex
            key={idx}
            direction={"column"}
            alignItems={"center"}
            // justifyContent={"center"}
            bg="white"
            p={4}
            borderRadius={"lg"}
            boxShadow={"xl"}
          >
            <Text fontWeight={"semibold"}>{fact.mainValue}</Text>
            <Text fontSize={"3xl"} fontWeight={"bold"} fontFamily={"heading"}>
              {fact.name}
            </Text>

            <Flex w={200} h={200}>
              {fact.image}
            </Flex>

            <Box textAlign={"start"}>
              <Text mt={2} mb={2} fontWeight={"bold"} fontSize={"sm"}>
                How does it work?
              </Text>
              <Text fontSize={"sm"}>{fact.description}</Text>
            </Box>
          </Flex>
        ))}
      </SimpleGrid>
    </Container>
  );
}

function JumptToPricingButton() {
  return (
    <Button
      as="a"
      colorScheme="green"
      mx="auto"
      rightIcon={<Icon as={FaArrowRight} />}
      href="#pricing-section"
    >
      Order yours now
    </Button>
  );
}
