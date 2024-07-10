import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Button,
  Badge,
  SimpleGrid,
  Icon,
  Container,
  IconButton,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { StaticImage } from "gatsby-plugin-image";
import { FiShoppingCart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { Logo } from "../components/logo";
import { Span } from "../components/components";

export default function Page() {
  return (
    <Box bg="bg.50">
      <Banner />
      <Header />
      <HeroSection />
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
            <Flex gap={1}>
              {Array(5)
                .fill("")
                .map((_, idx) => (
                  <Icon
                    key={idx}
                    boxSize={"12px"}
                    color={"orange.300"}
                    as={FaStar}
                  />
                ))}
            </Flex>
            <Text fontSize={"sm"} decoration={"underline"}>
              1247 Reviews
            </Text>
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

      <Box mt={4}>
        <Badge colorScheme="green">Money-back Guarantee</Badge>
        <Badge colorScheme="blue" ml={2}>
          Free Shipping
        </Badge>
      </Box>
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

export const Head: HeadFC = () => <title>Home Page</title>;
