import * as React from "react";
import { Link, type HeadFC, navigate } from "gatsby";

import { IoMdFemale } from "react-icons/io";
import { IoMdSpeedometer } from "react-icons/io";
import { RiScales2Line } from "react-icons/ri";
import { LiaRulerVerticalSolid } from "react-icons/lia";
import { PiPersonBold } from "react-icons/pi";
import { GiTreeBranch } from "react-icons/gi";
import { FaArrowRight as ArrowRight } from "react-icons/fa6";

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
import { getReadableState, ReadableState } from "src/utils";

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

// const customer: Customer = {
//   system: "metric",
//   age: 34,
//   gender: "male",
//   weight: 80,
//   goalWeight: 60,
//   height: 180,
// };

// const customer: Customer = {
//   system: "imperial",
//   age: 34,
//   gender: "male",
//   weight: 176,
//   goalWeight: 132,
//   height: 71,
// };

const ReadableStateCtx = React.createContext<ReadableState | null>(null);

function ReadableStateProvider({ children }: React.PropsWithChildren) {
  const [state, setState] = React.useState<ReadableState | null>(null);

  React.useEffect(() => {
    const readableState = getReadableState();
    if (!readableState) {
      navigate("/weight-loss");
    } else {
      setState(readableState);
    }
  }, []);

  if (state === null) {
    return null;
  }

  return <ReadableStateCtx.Provider value={state}>{children}</ReadableStateCtx.Provider>;
}

function useReadableState() {
  const res = React.useContext(ReadableStateCtx);
  if (!res) {
    throw Error("useReadableState had to be used within ReadableStateProvider");
  }

  return res;
}

export default function Page() {
  return (
    <ReadableStateProvider>
      <Box bg="bg.50">
        <Header />
        <Hero />
        <ProductCarouselSection />
        <Summary />
        <TopReviewsSection reviews={topReviews} />
        <IngredientsSection />
        <HowItWorksSection />
        <FactsFromCustomersSection />
        <AshwaRevivalSection />
        <ReviewsSection reviews={reviews} />
        <FAQSection />
        <Footer />
      </Box>
    </ReadableStateProvider>
  );
}

const Hero = () => {
  const state = useReadableState();

  return (
    <Box backgroundColor={"brand.100"}>
      <Container maxW={"container.lg"} pb={8} pt={16}>
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
              <Heading fontSize={["4xl", "4xl", "5xl"]} maxW={"container.sm"}>
                Fuel your weight loss with Calmr
              </Heading>

              <Text fontSize={"md"}>
                Reach your goals faster and feel your best with our organic aswhagandha based
                formula.
              </Text>
            </Stack>

            <Stack p={6} backgroundColor={"white"} borderRadius={"lg"} alignItems={"left"}>
              <Text mb={5} fontWeight={"bold"} fontSize={"xl"}>
                Weight estimate*
              </Text>

              <Grid width={"100%"} alignItems={"center"} gridTemplateColumns={"1fr auto 1fr"}>
                <Stack alignItems={"left"} textAlign={"left"} spacing={0} lineHeight={1.2}>
                  <Text fontSize={"md"} fontWeight={"semibold"}>
                    {state.startDate}
                  </Text>
                  <Text fontSize={"4xl"} fontWeight={"bold"}>
                    {state.startWeight}
                  </Text>
                </Stack>

                <Icon mx="auto" as={ArrowRight} boxSize="30px" color="pink.400" />

                <Stack
                  ml="auto"
                  alignItems={"left"}
                  textAlign={"left"}
                  spacing={0}
                  lineHeight={1.2}
                >
                  <Text fontSize={"md"} fontWeight={"semibold"}>
                    {state.endDate}
                  </Text>
                  <Text fontSize={"4xl"} fontWeight={"bold"}>
                    {state.endWeight}
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
                </Text>
              </Box>
            </Stack>
          </Grid>

          <Grid
            gridTemplateColumns={["auto", "auto", "1fr 1fr"]}
            gridTemplateAreas={["auto auto", "auto auto", "auto"]}
            backgroundColor="white"
            alignItems={"start"}
            gap={6}
            width={"full"}
            justifyContent={"space-between"}
            borderRadius={"lg"}
            p={6}
          >
            <Stack textAlign={["center", "center", "left"]}>
              <Heading fontSize={["3xl", "3xl", "4xl"]} maxW={"container.sm"} fontWeight={"bold"}>
                Turn small wins into big achievements
              </Heading>

              <Text fontSize={"md"}>
                Calmr helps you gradually build your wellness goals and achieve better results every
                month.
              </Text>
            </Stack>

            <Stack>
              <Stack justifyContent={"end"} spacing={1} lineHeight={1.3} mb={6}>
                <Text fontSize={"4xl"} fontWeight={"bold"} textAlign={"right"}>
                  {state.monthlyLoss}
                </Text>
                <Text textAlign={"right"}>In your first month</Text>
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
                      {state.lossByWeeks[0]}
                    </Text>
                  </Stack>

                  <Stack height={"15%"} justifyContent={"end"}>
                    <Text
                      fontSize={["sm", "md", "lg"]}
                      fontWeight={"semibold"}
                      textAlign={"center"}
                      mb={2}
                    >
                      {state.lossByWeeks[1]}
                    </Text>
                  </Stack>

                  <Stack height={"46%"} justifyContent={"end"}>
                    <Text
                      fontSize={["sm", "md", "lg"]}
                      fontWeight={"semibold"}
                      textAlign={"center"}
                      mb={2}
                    >
                      {state.lossByWeeks[2]}
                    </Text>
                  </Stack>

                  <Stack height={"69%"} justifyContent={"end"}>
                    <Text
                      fontSize={["sm", "md", "lg"]}
                      fontWeight={"semibold"}
                      textAlign={"center"}
                      mb={2}
                    >
                      {state.lossByWeeks[3]}
                    </Text>
                  </Stack>
                </Grid>

                <StaticImage src="../images/chart-2.jpg" alt="" />
              </Box>

              <Grid gridTemplateColumns={"repeat(4, 1fr)"} zIndex={1} width={"120%"} mx={"-10%"}>
                <Text
                  fontSize={"xs"}
                  textAlign={"center"}
                  textTransform={"uppercase"}
                  color="gray.500"
                >
                  week 1
                </Text>

                <Text
                  fontSize={"xs"}
                  textAlign={"center"}
                  textTransform={"uppercase"}
                  color="gray.500"
                >
                  week 2
                </Text>

                <Text
                  fontSize={"xs"}
                  textAlign={"center"}
                  textTransform={"uppercase"}
                  color="gray.500"
                >
                  week 3
                </Text>

                <Text
                  fontSize={"xs"}
                  textAlign={"center"}
                  textTransform={"uppercase"}
                  color="gray.500"
                >
                  week 4
                </Text>
              </Grid>
            </Stack>
          </Grid>

          <Box width={["full", "unset"]}>
            <Link to="/product-selection">
              <Button
                size="lg"
                mx="auto"
                variant={"solid"}
                colorScheme={"green"}
                borderRadius={"full"}
                width={"100%"}
                py={7}
                px={10}
                my={6}
              >
                See the product
              </Button>
            </Link>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

const Summary = () => {
  const state = useReadableState();

  return (
    <Box backgroundColor={"brand.100"} py={10}>
      <Container maxW={"container.lg"}>
        <Stack spacing={2} alignItems={"center"}>
          <Heading fontSize={["3xl", "3xl", "4xl"]} maxW={"container.sm"} mb={8}>
            Your Personal Summary
          </Heading>

          <Grid
            width={"100%"}
            gridTemplateColumns={["1fr 1fr", "repeat(4, 1fr)"]}
            gridTemplateRows={["1fr 1fr", "1fr"]}
            gap={2}
          >
            <Stack
              px={3}
              py={4}
              backgroundColor="white"
              borderRadius={"lg"}
              width={"100%"}
              alignItems={"center"}
              spacing={1}
            >
              <Icon as={IoMdFemale} boxSize={"36px"} />
              <Text fontSize={"3xl"} fontWeight={"bold"}>
                {state.gender}
              </Text>
              <Text color="gray.500">Gender</Text>
            </Stack>

            <Stack
              px={3}
              py={4}
              backgroundColor="white"
              borderRadius={"lg"}
              width={"100%"}
              alignItems={"center"}
              spacing={1}
            >
              <Icon as={PiPersonBold} boxSize={"36px"} />
              <Text fontSize={"4xl"} fontWeight={"bold"}>
                {state.age}
              </Text>
              <Text color="gray.500">Age</Text>
            </Stack>

            <Stack
              px={3}
              py={4}
              backgroundColor="white"
              borderRadius={"lg"}
              width={"100%"}
              alignItems={"center"}
              spacing={1}
            >
              <Icon as={LiaRulerVerticalSolid} boxSize={"36px"} />
              <Text fontSize={"4xl"} fontWeight={"bold"}>
                {state.height}
              </Text>
              <Text color="gray.500">Height</Text>
            </Stack>

            <Stack
              px={3}
              py={4}
              backgroundColor="white"
              borderRadius={"lg"}
              width={"100%"}
              alignItems={"center"}
              spacing={1}
            >
              <Icon as={RiScales2Line} boxSize={"36px"} />
              <Text fontSize={"4xl"} fontWeight={"bold"}>
                {state.startWeight}
              </Text>
              <Text color="gray.500">Weight</Text>
            </Stack>
          </Grid>

          <Grid
            width={"100%"}
            gridTemplateColumns={["1fr", "1fr 1fr"]}
            gridTemplateRows={["1fr 1fr", "1fr"]}
            gap={2}
          >
            <Stack
              px={3}
              py={4}
              backgroundColor="white"
              borderRadius={"lg"}
              width={"100%"}
              alignItems={"center"}
              spacing={1}
            >
              <Icon as={IoMdSpeedometer} boxSize={"36px"} />
              <Text color="gray.500">Your BMI</Text>
              <Text fontSize={"4xl"} fontWeight={"bold"}>
                {state.bmi}
              </Text>
              <BMIMeter bmi={27.68} />
            </Stack>

            <Stack
              px={3}
              py={4}
              backgroundColor="white"
              borderRadius={"lg"}
              width={"100%"}
              alignItems={"center"}
              spacing={1}
            >
              <Icon as={GiTreeBranch} boxSize={"36px"} />
              <Text color="gray.500">Metabolic age</Text>
              <Text fontSize={"4xl"} fontWeight={"bold"}>
                {state.metabolicAge} years
              </Text>
            </Stack>
          </Grid>
        </Stack>

        <Stack mt={12}>
          <CTAButton />
        </Stack>
      </Container>
    </Box>
  );
};

interface BMIMeterProps {
  bmi: number;
}

const BMIMeter: React.FC<BMIMeterProps> = ({ bmi }) => {
  const minBMI = 0;
  const maxBMI = 40;
  const normalRange = [18.5, 24.9];
  const badRange = [25, 29.9];

  const bmiPosition = ((bmi - minBMI) / (maxBMI - minBMI)) * 100;

  return (
    <Box position="relative" width="100%" height="12px">
      <Box display="flex" height="12px" width="100%">
        <Box bg="green.300" width={`${((normalRange[1] - minBMI) / (maxBMI - minBMI)) * 100}%`} />
        <Box
          bg="yellow.300"
          width={`${((badRange[1] - normalRange[1]) / (maxBMI - minBMI)) * 100}%`}
        />
        <Box bg="red.300" flex="1" />
      </Box>

      <Box
        position="absolute"
        left={`${bmiPosition}%`}
        transform="translate(-50%, -50%)"
        top={"50%"}
        height="20px"
        width="4px"
        bg="black"
      />
    </Box>
  );
};

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
        <Flex py={4} flexWrap={"wrap"} gap={8} alignItems={"center"}>
          <Box flex={1} minWidth={300}>
            <Heading as="h1" fontWeight={"bold"}>
              Our most complete blend of Ashwagandha for busy women
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
              Our unique formula is designed to help you{" "}
              <Span fontWeight={"bold"}>combat stress</Span>,{" "}
              <Span fontWeight={"bold"}>curb cravings</Span>, and{" "}
              <Span fontWeight={"bold"}>boost energy</Span>, making it the only supplement you'll
              need on your weight loss journey. This revolutionary blend combines Ashwagandha,
              Rhodiola Extract, and Bacopa with essential vitamins and minerals, creating a
              powerhouse solution tailored specifically for the modern woman aiming to shed those
              extra pounds and maintain a healthy weight.
            </Text>
          </Box>

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
        </Flex>
      </Container>
    </Box>
  );
};

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
    <Box py={16}>
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

        <Stack mt={16}>
          <CTAButton />
        </Stack>
      </Container>
    </Box>
  );
};

function FAQSection() {
  return (
    <Box py={8}>
      <Container maxW={"container.md"}>
        <FAQ />
      </Container>
    </Box>
  );
}

function TopReviewsSection({ reviews }: { reviews: Review[] }) {
  return (
    <Box py={8}>
      <Container maxW={"container.lg"}>
        <Heading my={6} textAlign={"center"}>
          But Don't Just Take Our Word
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
    <Box py={8} bg={"brand.100"}>
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

        <Stack mt={12}>
          <CTAButton />
        </Stack>
      </Container>
    </Box>
  );
}

function HowItWorksSection() {
  const ours = comparisonData.map((it) => it.your_product);
  const theirs = comparisonData.map((it) => it.competitors);

  return (
    <Container maxW={"container.xl"} my={16}>
      <Heading textAlign={"center"} my={10}>
        Conquer chaos. Weight loss will come naturally
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
            Over 40 million women in the US experience stress and anxiety every day, leading to
            unwanted weight gain and the dreaded "stress belly." We've already helped over 250,000
            women manage their stress and achieve a healthier weight. Take action now to reduce your
            stress, shed those extra pounds, and improve your overall well-being.
          </Text>

          <SimpleGrid flex={1} columns={[1, 1, 2]} spacing={2}>
            <Stack p={3} borderRadius={"lg"}>
              <Text color="black" fontWeight={"semibold"} fontSize={"lg"} mb={4}>
                Life before you start using Calmr
              </Text>

              <Flex direction={"column"}>
                {theirs.map((it, idx) => (
                  <Flex
                    key={it}
                    py={3}
                    px={3}
                    borderBottom={"1px solid"}
                    borderBottomColor={"gray.300"}
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
            </Stack>

            <Stack backgroundColor="teal.400" p={3} borderRadius={"lg"}>
              <Text color="white" fontWeight={"semibold"} fontSize={"lg"} mb={4}>
                Life after you start using Calmr
              </Text>

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
            </Stack>
          </SimpleGrid>
        </GridItem>
      </Grid>

      <Stack mt={12}>
        <CTAButton />
      </Stack>
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
      number: "30%",
      fact: "Drop in cortisol levels lead to a natual weight loss",
    },
  ];
  return (
    <Box py={16} bg="brand.100">
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
  ];

  return (
    <Container maxWidth={"container.lg"} my={16}>
      <Heading textAlign={"center"} my={10}>
        Meet The Fantastic <Span decoration={"underline"}>Trio</Span>:<br /> The Ultimate
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

function CTAButton() {
  return (
    <Stack width={["full", "unset"]} alignItems="center">
      <Link to="/product-selection">
        <Button
          size="lg"
          mx="auto"
          variant={"solid"}
          colorScheme={"green"}
          borderRadius={"full"}
          width={"100%"}
          py={7}
          px={10}
        >
          See the product
        </Button>
      </Link>
    </Stack>
  );
}
