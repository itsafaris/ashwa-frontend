import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
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
} from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { FiShoppingCart } from "react-icons/fi";
import { IoPersonCircle } from "react-icons/io5";
import {
  FaCheck,
  FaCheckCircle,
  FaShippingFast,
  FaTimes,
} from "react-icons/fa";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { RiRefund2Line } from "react-icons/ri";
import { Logo } from "../components/logo";
import { Rating, Span } from "../components/components";
import { Review, reviews } from "../reviews";

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
      <Header />
      <HeroSection />
      <BadgesSection />
      <RecommendedUsageSection />
      <ComparisonSection />
      <FactsFromCustomersSection />
      <ReviewsSection reviews={reviews} />
      <Footer />
    </Box>
  );
}

const Banner = () => (
  <Flex
    alignItems={"center"}
    bg="purple.400"
    color="white"
    fontWeight={"bold"}
    py={1}
    gap={4}
    justifyContent={"center"}
  >
    <Text>⚡</Text>
    <Text>Summer sale</Text>
    <Text>⚡</Text>
    <Text>25% OFF + Free Gifts</Text>
    <Text>⚡</Text>
    <Text>Offer Expires in 02:14:32</Text>
    <Text>⚡</Text>
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

const benefits = [
  "😌 Stress Relief",
  "😴 Better Sleep Quality",
  "🔋 Increased Energy Levels",
  "🧘‍♀️ Balanced Mood",
  "🧠 Improved Cognitive Function",
  "💪 Enhanced Physical Performance",
];

const HeroSection = () => (
  <Box>
    <Box py={8} bg="yellow.100">
      <Heading
        mx="auto"
        maxWidth={"720px"}
        fontSize={"3xl"}
        fontWeight={"regular"}
        px={8}
        textAlign={"center"}
      >
        NEW Ashwagandha Blend Designed For Adults Seeking{" "}
        <Span decoration={"underline"}>Stress Relief</Span> And{" "}
        <Span decoration={"underline"}>Enhanced Energy</Span> While Promoting{" "}
        <Span decoration={"underline"}>Better Sleep</Span>
      </Heading>
    </Box>
    <Container maxWidth={"1000px"}>
      <SimpleGrid columns={[1, 1, 2]} spacing={4} py={4}>
        <Box>
          <StaticImage
            src="../images/product1.png"
            alt="Ashwagandha Supplement"
          />
        </Box>
        <Box>
          <Text color="purple.700" fontWeight={"bold"}>
            Summer Sale
          </Text>
          <Heading as="h1" fontSize="3xl">
            Unique Blend Ashwagandha Gummies
          </Heading>
          <Flex alignItems={"center"} gap={2} py={2}>
            <Text fontSize={"sm"}>4.8</Text>
            <Rating />
            <a href="#reviews">
              <Text fontSize={"sm"} decoration={"underline"}>
                {TOTAL_NUMBER_OF_REVIEWS} Reviews
              </Text>
            </a>
          </Flex>
          <Text mt={4}>
            Meet the fastest growing alternative to regular coffee and
            stimulants that combines functional mushrooms, collagen protein, and
            nootropics to promote laser focus, improved mood, all-day energy,
            and reduced stress.
          </Text>
          <Flex direction={"column"} gap={1} py={4}>
            {benefits.map((b) => (
              <Text key={b}>{b}</Text>
            ))}
          </Flex>
        </Box>
      </SimpleGrid>

      <ProductSelection />
    </Container>
  </Box>
);

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

function ProductSelection() {
  const [purchaseType, setPurchaseType] =
    React.useState<PurchaseType>("subscription");

  const productList = getProducts(purchaseType);

  return (
    <Flex id="product-selection" direction={"column"} alignItems={"center"}>
      <SimpleGrid
        columns={2}
        my={4}
        gap={2}
        border="1px solid"
        borderColor={"bg.200"}
        bg="bg.50"
        borderRadius={"md"}
        padding={1}
      >
        <Button
          size="sm"
          variant={purchaseType === "one-off" ? "solid" : "ghost"}
          colorScheme="bg"
          onClick={() => setPurchaseType("one-off")}
        >
          One time purchase
        </Button>
        <Button
          size="sm"
          variant={purchaseType === "subscription" ? "solid" : "ghost"}
          colorScheme="bg"
          gap={2}
          onClick={() => setPurchaseType("subscription")}
        >
          <Text>Subscribe</Text> <Badge colorScheme="red">Sale %</Badge>
        </Button>
      </SimpleGrid>

      <SimpleGrid columns={[1, 1, 3]} gap={4}>
        <ProductSelectItem
          product={productList[0]}
          badgeText={`Best value SAVE ${productList[0].discount}%`}
          badgeBg="green.500"
        />
        <ProductSelectItem
          product={productList[1]}
          badgeText={`Most popular SAVE ${productList[1].discount}%`}
          badgeBg="purple.500"
        />
        <ProductSelectItem product={productList[2]} />
      </SimpleGrid>
    </Flex>
  );
}

function ProductSelectItem({
  product,
  badgeText,
  badgeBg,
}: {
  product: Product;
  badgeText?: string;
  badgeBg?: string;
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
          Cancel anytime. Free shipping
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

function ReviewsSection({ reviews }: { reviews: Review[] }) {
  return (
    <Box my={8} px={4}>
      <Container>
        <Heading my={4}>Our customers love us!</Heading>
        <Flex my={2} justifyContent={"space-between"}>
          <Text fontSize={"sm"}>
            Showing <Span decoration={"underline"}>most recent</Span> reviews
            from <Span decoration={"underline"}>United States</Span>{" "}
          </Text>
          <Text fontSize={"xs"} color="gray.500">
            <Span color="black" fontWeight={"semibold"}>
              {reviews.length}
            </Span>{" "}
            / {TOTAL_NUMBER_OF_REVIEWS}
          </Text>
        </Flex>
        <Flex direction={"column"} gap={2}>
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
    <Container maxWidth={"1200px"} my={20}>
      <SimpleGrid spacing={8} columns={[1, 1, 5]} alignItems={"center"}>
        <GridItem colSpan={[1, 1, 2]}>
          <StaticImage
            src="../images/stressed.png"
            alt="stressed woman"
            width={400}
            style={{ borderRadius: 16 }}
          />
        </GridItem>
        <GridItem colSpan={[1, 1, 3]}>
          <Heading>Conquer Chaos, Embrace Calm!</Heading>
          <Text my={4}>
            78% of women aged 25-45 battle daily stress. Our gummies have helped
            100,000+ women reclaim their calm and energy. Join them. Stress
            less. Achieve more. Glow naturally. Your vibrant life starts now.*
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
      </SimpleGrid>
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
    <Container maxWidth={"1200px"} my={20}>
      <Heading textAlign={"center"}>
        We know for a <Span textDecoration={"underline"}>fact</Span>, you will
        be calmer
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
