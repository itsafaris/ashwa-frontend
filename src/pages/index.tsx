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
    <>
      <Banner />
      <Header />
      <HeroSection />
    </>
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
      <SimpleGrid columns={[1, 1, 2]} spacing={4}>
        <Box>
          <Image
            src="https://placehold.co/800x800"
            alt="Ashwagandha Supplement"
          />
        </Box>
        <Box minWidth={"400px"} py={4} px={8}>
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
          <Box mt={4}>
            <Button colorScheme="teal" size="lg">
              Add to Cart
            </Button>
          </Box>
          <Box mt={4}>
            <Badge colorScheme="green">Money-back Guarantee</Badge>
            <Badge colorScheme="blue" ml={2}>
              Free Shipping
            </Badge>
          </Box>
        </Box>
      </SimpleGrid>
    </Container>
  </Box>
);

export const Head: HeadFC = () => <title>Home Page</title>;
