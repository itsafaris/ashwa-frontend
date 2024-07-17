import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
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
import { FiShoppingCart } from "react-icons/fi";
import { IoPersonCircle } from "react-icons/io5";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaCheckCircle,
  FaShippingFast,
  FaTimes,
} from "react-icons/fa";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { RiRefund2Line } from "react-icons/ri";
import { Logo } from "../components/logo";
import { Rating, Span, Timer } from "../components/components";
import { Review, reviews } from "../reviews";
import { css, Global } from "@emotion/react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    // slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    // slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    // slidesToSlide: 1, // optional, default to 1.
  },
};

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

export default function Page() {
  return (
    <Box bg="bg.50">
      <Banner />
      {/* <Header /> */}
      <ProductCarouselSection />
      <ProductSelectionSection />
      <BadgesSection />
      <RecommendedUsageSection />
      <ComparisonSection />
      <AshwaRevivalSection />
      <IngredientsSection />
      <FactsFromCustomersSection />
      <ReviewsSection reviews={reviews} />
      <MainHero />
      <Footer />
    </Box>
  );
}

const Banner = () => (
  <Flex bg="black" fontWeight={"semibold"} color="white" py={1} px={3}>
    <Container
      as={Flex}
      gap={8}
      alignItems={"center"}
      justifyContent={"space-between"}
      maxW={["container.lg"]}
      fontSize={["sm", null, "md"]}
    >
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        flex={1}
        gap={[0, 2, 2]}
        flexWrap={"wrap"}
      >
        <Text>Summer sale</Text>
        <Flex gap={2}>
          <Text>ends in</Text>
          <Timer fontWeight={"bold"} />
        </Flex>
      </Flex>
      <Text flex={1} textAlign={"center"}>
        35% OFF + Free Gifts
      </Text>
    </Container>
  </Flex>
);

const Header = () => (
  <Box bg="gray.100">
    <Container as={Flex} py={2} alignItems={"center"}>
      <Logo height={"18px"} />
      <Button ml="auto" leftIcon={<Icon as={FiShoppingCart} />}>
        My Cart
      </Button>
    </Container>
  </Box>
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
        Go From Frazzled to Fabulous with our unique Nature-based 5-Key Solution
        to Modern Woman's Stress
      </Heading>

      <SimpleGrid columns={[1, 1, 2]}>
        <AspectRatio ratio={1} maxW={650}>
          <StaticImage
            src="../images/product3.png"
            alt="ashwagandha supplement for women health"
          />
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
            On average, our customers start feeling positive effects within the
            first week of use
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

const benefits = [
  "🧠 Sharpen your mind and banish brain fog",
  "⚡ Elevate your energy levels",
  "🧘‍♀️ Ease anxiety",
  "🧠 Improved Cognitive Function",
  "😴 Better Sleep Quality",
];

function ThumbnailPlugin(
  mainRef: React.MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }

    function addActive(idx: number) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();

      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        // with looping, this does not reset to 0 ever
        const idx = main.animator.targetIdx ?? 0;
        const realIdx = idx % main.slides.length;
        addActive(realIdx);
        slider.moveToIdx(realIdx);
      });
    });
  };
}

const ProductCarouselSection = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
  });

  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
      loop: true,
    },
    [ThumbnailPlugin(instanceRef)]
  );

  const images = [
    <StaticImage src="../images/product1.png" alt="Ashwagandha Supplement" />,
    <StaticImage src="../images/product2.png" alt="Ashwagandha Supplement" />,
    <StaticImage src="../images/ashwa1.jpeg" alt="Ashwagandha Supplement" />,
    <StaticImage src="../images/bacopa.jpg" alt="Ashwagandha Supplement" />,
    <StaticImage src="../images/product3.png" alt="Ashwagandha Supplement" />,
    <StaticImage src="../images/ltheanine.png" alt="Ashwagandha Supplement" />,
  ];

  return (
    <Box bg="white">
      <Global
        styles={css`
          .keen-slider__slide.active {
            border-color: var(--chakra-colors-primary-500);
            border-width: 2px;
          }
        `}
      />
      <Container maxW={["container.sm", null, "container.lg"]}>
        <SimpleGrid columns={[1, 1, 2]} spacing={8} py={4}>
          <Box>
            <div ref={sliderRef} className="keen-slider">
              {images.map((it, idx) => (
                <AspectRatio
                  className="keen-slider__slide"
                  key={idx}
                  ratio={1}
                  maxW={460}
                  mx="auto"
                >
                  {it}
                </AspectRatio>
              ))}
            </div>

            <Flex alignItems={"center"} gap={3} mt={2}>
              <IconButton
                aria-label="arrow left"
                icon={<Icon as={FaArrowLeft} />}
                onClick={() => instanceRef.current?.prev()}
              />

              <div ref={thumbnailRef} className="keen-slider">
                {images.map((it, idx) => (
                  <AspectRatio
                    className="keen-slider__slide"
                    key={idx}
                    ratio={1}
                    maxW={460}
                    mx="auto"
                    border={"1px solid"}
                    borderColor={"gray.300"}
                    borderRadius={"md"}
                  >
                    {it}
                  </AspectRatio>
                ))}
              </div>

              <IconButton
                aria-label="arrow right"
                icon={<Icon as={FaArrowRight} />}
                onClick={() => instanceRef.current?.next()}
              />
            </Flex>
          </Box>
          <Box>
            <Text
              color="purple.600"
              fontWeight={"bold"}
              textTransform={"uppercase"}
            >
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
              <Span fontWeight={"bold"}>boost energy</Span>. This revolutionary
              formula uniquely combines Ashwagandha, Rhodiola Extract, and
              Bacopa with essential vitamins and minerals, creating a powerhouse
              solution tailored specifically for the modern woman's needs.
            </Text>
            <Flex direction={"column"} gap={1} py={6}>
              {benefits.map((b) => (
                <Text key={b} fontWeight={"semibold"} fontSize={"sm"}>
                  {b}
                </Text>
              ))}
            </Flex>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

type PurchaseType = "subscription" | "one-off";

const getProducts = (type: PurchaseType) => {
  const subExtraDiscount = 10;

  return [
    {
      count: 3,
      unitServingsCount: 30,
      unitPrice: type === "one-off" ? 41.99 : 34.99,
      discount: 40,
      subtitle: "Great for building new habits",
      image: (
        <StaticImage
          alt="ashwagandha supplements bottle"
          src={"../images/product2.png"}
        />
      ),
    },
    {
      count: 6,
      unitServingsCount: 30,
      unitPrice: type === "one-off" ? 30.0 : 25.99,
      discount: 50,
      subtitle: "For achieving the most sustainable results",
      image: (
        <StaticImage
          alt="ashwagandha supplements bottle"
          src={"../images/product2.png"}
        />
      ),
    },
    {
      count: 1,
      unitServingsCount: 30,
      unitPrice: type === "one-off" ? 55.99 : 47.99,
      discount: 30,
      subtitle: "Ideal solution for trying out",
      image: (
        <StaticImage
          alt="ashwagandha supplements bottle"
          src={"../images/product2.png"}
        />
      ),
    },
  ].map((p) => ({
    ...p,
    discount:
      type === "subscription" ? p.discount + subExtraDiscount : p.discount,
  }));
};

type Product = ReturnType<typeof getProducts>[number];

function ProductSelectionSection() {
  const [purchaseType, setPurchaseType] =
    React.useState<PurchaseType>("subscription");

  const productList = getProducts(purchaseType);
  const dynamicText =
    purchaseType === "one-off" ? "One-time payment" : "Cancel anytime";

  return (
    <Container maxW={"container.lg"}>
      <SimpleGrid
        columns={2}
        my={4}
        gap={2}
        // border="1px solid"
        bg="bg.100"
        borderRadius={"md"}
        padding={2}
        maxW={"max"}
        mx="auto"
        shadow={"inner"}
      >
        <Button
          size="sm"
          variant={purchaseType === "one-off" ? "solid" : "ghost"}
          colorScheme="black"
          onClick={() => setPurchaseType("one-off")}
        >
          One time purchase
        </Button>
        <Button
          size="sm"
          variant={purchaseType === "subscription" ? "solid" : "ghost"}
          colorScheme="black"
          gap={2}
          onClick={() => setPurchaseType("subscription")}
        >
          <Text>Subscribe</Text> <Badge colorScheme="purple">Sale %</Badge>
        </Button>
      </SimpleGrid>

      <Flex gap={2} fontWeight={"bold"} mx="auto" width={"max"} my={4}>
        <Text>Sale ends in: </Text>
        <Timer color={"primary.600"} />
      </Flex>

      <SimpleGrid columns={[1, 1, 3]} gap={4}>
        <ProductSelectItem
          product={productList[0]}
          badgeText={`Best value SAVE ${productList[0].discount}%`}
          badgeBg="green.500"
          footerText={`${dynamicText}. Free shipping`}
        />
        <ProductSelectItem
          product={productList[1]}
          badgeText={`Most popular SAVE ${productList[1].discount}%`}
          badgeBg="purple.500"
          footerText={`${dynamicText}. Free shipping`}
        />
        <ProductSelectItem
          product={productList[2]}
          footerText={`${dynamicText}. Free shipping`}
        />
      </SimpleGrid>
    </Container>
  );
}

function ProductSelectItem({
  product,
  badgeText,
  badgeBg,
  footerText,
}: {
  product: Product;
  badgeText?: string;
  badgeBg?: string;
  footerText?: string;
}) {
  return (
    <Box position={"relative"}>
      <Box
        color="white"
        px={2}
        py={1}
        fontSize={"xs"}
        bg={badgeBg}
        textAlign={"center"}
        fontWeight={"semibold"}
        borderRadius={"sm"}
        position={"absolute"}
        top={1}
        left={1}
      >
        {badgeText ?? "\u200b"}
      </Box>
      <Flex
        direction={"column"}
        bg="white"
        p={4}
        borderRadius={"md"}
        border="1px solid"
        borderColor={"bg.100"}
      >
        <SimpleGrid
          columns={[2, 2, 1]}
          alignItems={"center"}
          gap={4}
          flexWrap={"wrap"}
        >
          {product.image}
          <Box>
            <Text fontSize={"lg"} fontWeight={"semibold"}>
              {product.count} month supply
            </Text>
            <Text fontSize={"xs"} minHeight={"3em"}>
              {product.subtitle}
            </Text>
            <Flex gap={2} mt={3} fontSize={"lg"}>
              <Text fontWeight={"semibold"}>
                ${product.unitPrice.toFixed(2)}
              </Text>
              <Text textDecoration={"line-through"} color={"red.400"}>
                $
                {(product.unitPrice / ((100 - product.discount) / 100)).toFixed(
                  2
                )}
              </Text>
            </Flex>
            <Text fontSize={"sm"} color="gray.600">
              Per bottle
            </Text>

            <Flex direction={"column"} gap={1} fontSize={"sm"} my={3}>
              <Text>{product.count * product.unitServingsCount} servings</Text>
              <Text>${(product.unitPrice / 30).toFixed(2)} per day</Text>
              <Text>
                {product.count} bottle{product.count === 1 ? "" : "s"} delivered
              </Text>
            </Flex>
          </Box>
        </SimpleGrid>

        <Button mt={3} colorScheme="primary">
          Order now
        </Button>
        <Text mt={2} fontSize={"sm"} color={"gray.600"} textAlign={"center"}>
          {footerText}
        </Text>
      </Flex>
    </Box>
  );
}

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
          💡 We recommend starting with the{" "}
          <Span fontWeight={"bold"}>3-month plan</Span> to achieve effective
          results or a <Span fontWeight={"bold"}>6-month plan</Span> to form a
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
      summarized_outcome:
        "56.5% reduction in anxiety scores on the Hamilton Anxiety Rating Scale",
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
    <Box my={16}>
      <Container maxW={"container.md"}>
        <Heading mx="auto" mb={6} px={8} textAlign={"center"} fontSize={"3xl"}>
          Why This Ancient Herb
          <br /> Is 2024's Stress-Busting Superstar
        </Heading>

        <Stack spacing={2} my={8}>
          <Text>
            Ashwagandha's recent surge in popularity is no coincidence. This
            ancient herb has captured modern attention due to a perfect storm of
            factors.
          </Text>
          <Text>
            Busy professionals are flocking to this stress-busting,
            energy-boosting powerhouse as their secret weapon against burnouts.
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
              <a href={study.src}>
                <Text textDecoration={"underline"} color="blue.500">
                  {study.year} - {study.title} (
                  <Span as={"a"} color="blue.500" href={study.src}>
                    link
                  </Span>
                  )
                </Text>
              </a>
              <Text fontWeight={"semibold"}>{study.summarized_outcome}</Text>
            </Flex>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

function ReviewsSection({ reviews }: { reviews: Review[] }) {
  return (
    <Box my={8}>
      <Container>
        <Heading my={6}>Our customers love us!</Heading>
        <Flex my={4} gap={2} justifyContent={"space-between"}>
          <Text fontSize={"sm"}>
            Showing <Span decoration={"underline"}>most recent</Span> reviews
            from{" "}
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
              <Flex key={idx} direction={"column"} bg="white" p={2} px={3}>
                <Flex alignItems={"center"} gap={2}>
                  <Icon as={IoPersonCircle} color="gray.400" boxSize={6}></Icon>
                  <Text>{review.name}</Text>
                  <Flex alignItems={"center"} gap={1}>
                    <Icon
                      as={FaCheckCircle}
                      color="orange.400"
                      boxSize={3}
                    ></Icon>
                    <Text
                      fontWeight={"bold"}
                      fontSize={"xs"}
                      color="orange.500"
                    >
                      Verified Purchase
                    </Text>
                  </Flex>
                </Flex>
                <Flex gap={2} alignItems={"center"}>
                  <Rating rating={review.score} />
                  <Text fontWeight={"bold"}>{review.title}</Text>
                </Flex>
                <Flex gap={1} direction={"column"}>
                  <Text
                    fontSize={"xs"}
                    fontWeight={"semibold"}
                    color={"gray.500"}
                  >
                    Reviewed in {review.location} 12 hours ago
                  </Text>
                </Flex>
                <Text my={2}>{review.text}</Text>
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
            Over 40 million women in the US experience stress and anxiety every
            day. We've already helped over 250,000 women find balance and
            calmness in their lives. Take action now to improve your well-being
            and mental clarity for good.
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
                  <Text
                    whiteSpace={"nowrap"}
                    fontWeight={"semibold"}
                    fontSize={"sm"}
                  >
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
                  <Text
                    whiteSpace={"nowrap"}
                    fontWeight={"semibold"}
                    fontSize={"sm"}
                  >
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
    <Container maxWidth={"container.lg"} my={16}>
      <Heading textAlign={"center"}>
        Here's what we know - <br />
        <Span textDecoration={"underline"}>for a fact</Span>
      </Heading>
      <Text textAlign={"center"} my={4}>
        Based on our{" "}
        <Span textDecoration={"underline"}>customer survey study</Span> , who've
        used our product for more than 3 weeks
      </Text>
      <SimpleGrid
        columns={[1, 1, 3]}
        alignItems={"start"}
        justifyContent={"center"}
        justifyItems={"center"}
      >
        {facts.map((fact, idx) => (
          <Flex
            key={idx}
            direction={"column"}
            alignItems={"center"}
            maxW={"260px"}
          >
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
        Nature's Time-Tested <Span decoration={"underline"}>Trio</Span>:<br />{" "}
        The Ultimate Stress-Busting Powerhouse
      </Heading>
      <Text textAlign={"center"} my={4} maxWidth={"xl"} mx="auto">
        This powerful trio of adaptogenic herbs works synergistically to create
        a comprehensive approach to{" "}
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

function Footer(props: {}) {
  return (
    <Flex py={20} bg="bg.100" color="bg.700">
      <Container as={Flex} maxWidth={1200} direction={"column"} gap={8}>
        <Flex direction={"column"} gap={2}>
          <Flex gap={4} alignItems={"center"}>
            <Logo height={"24px"} color={"primary.400"} />
            <Span color="primary.400">ZenPro™</Span>
          </Flex>
          <Text
            textAlign={"center"}
            fontSize={"4xl"}
            fontWeight={"black"}
            fontFamily={"heading"}
          >
            Stress Reduction Gummies
            <br /> for busy moms
          </Text>
        </Flex>
        <SimpleGrid
          columns={[1, 1, 2]}
          alignItems={"center"}
          justifyItems={"center"}
        >
          <Flex direction={"column"} justifyContent={"center"}>
            <Text fontWeight={"semibold"}>Operational Address</Text>
            <Text>
              Suite 403-B, 1013 Centre Road
              <br /> City of Wilmington <br /> Delaware - 19805.
            </Text>
          </Flex>
          <Flex gap={2} flexWrap={"wrap"} maxWidth={"220px"}>
            <Text>About us</Text>
            <Text>Affiliates</Text>
            <Text>FAQs</Text>
            <Text>Help</Text>
            <Text>Blog</Text>
            <Text>Learn</Text>
          </Flex>
        </SimpleGrid>
        <Flex direction={"column"} gap={2}>
          <Text fontSize={"sm"} textAlign={"center"}>
            ©2024 ZenPro. All rights reserved.
          </Text>
          <Flex gap={4} justifyContent={"center"} textDecoration={"underline"}>
            <Link to="/">Terms of Service</Link>
            <Link to="/">Privacy policy</Link>
            <Link to="/">Shipping & Returns</Link>
            <Link to="/">Refund policy</Link>
          </Flex>
          <Text my={4} fontSize={"xs"}>
            The statements made on this website have not been evaluated by the
            FDA (U.S. Food & Drug Administration). The products sold on this
            website are not intended to diagnose, treat, cure, or prevent any
            disease. The information provided by this website or this company is
            not a substitute for a face-to-face consultation with your
            physician, and should not be construed as individual medical advice.
          </Text>
        </Flex>
      </Container>
    </Flex>
  );
}

export const Head: HeadFC = () => <title>Home Page</title>;
