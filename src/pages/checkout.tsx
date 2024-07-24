import * as React from "react";
import { type HeadFC } from "gatsby";

import { LiaShippingFastSolid } from "react-icons/lia";
import { IoBookOutline } from "react-icons/io5";

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
  Stack,
  Grid,
} from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import {
  FaArrowRight,
  FaRegCheckCircle,
  FaRegCircle,
  FaShippingFast,
} from "react-icons/fa";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { RiRefund2Line } from "react-icons/ri";
import { Span, Timer } from "../components/components";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import { siteConfig } from "../conf";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SEO } from "@components/SEO";
import { getProducts, Product, PurchaseType } from "src/products";
import { getPageUrl } from "./purchase-success";
import { trackEvent } from "src/tracking";

import "blaze-slider/dist/blaze.css";
import { SafeCheckout } from "@components/SafeCheckout";

export const Head: HeadFC = () => {
  return <SEO />;
};

export default function Page() {
  return (
    <Box bg="bg.50">
      <BannerTop />
      <Header />
      <Hero />
      <Banner />
      <SpecialOfferTimer />
      <ProductSelectionSection />
      <BadgesSection />
      <FreeGift />
      <Footer />
    </Box>
  );
}
const FreeGift = () => {
  return (
    <Container maxW={"container.lg"} as={Stack} spacing={4} py={8}>
      <Stack
        flexDirection={["column", "column", "row"]}
        alignItems={"center"}
        spacing={6}
        width={"full"}
        justifyContent={"space-between"}
      >
        <Heading
          px={8}
          textAlign={["center", "center", "left"]}
          fontSize={["2xl", "2xl", "4xl"]}
          maxW={"container.sm"}
        >
          We Did It: Prevent Hair Loss and Boost Overall Hair Health with Our
          All-in-One Solution!
        </Heading>

        <StaticImage
          src="../images/free-gift.png"
          alt=""
          style={{ maxWidth: "300px" }}
        />
      </Stack>

      <JumptToPricingButton />
    </Container>
  );
};

const Hero = () => {
  return (
    <Box backgroundColor="brand.100" pt={6} pb={10}>
      <Container maxW={"container.lg"} as={Stack} spacing={4}>
        <Heading
          mx="auto"
          px={8}
          textAlign={"center"}
          fontSize={["2xl", "2xl", "4xl"]}
          maxW={"container.sm"}
        >
          We Did It: Prevent Hair Loss and Boost Overall Hair Health with Our
          All-in-One Solution!
        </Heading>

        <Stack
          flexDir={"row"}
          alignItems={"center"}
          spacing={4}
          maxW={"container.sm"}
          mx="auto"
        >
          <StaticImage
            src="../images/product2.png"
            alt="bundle of 3 supplement bottles"
            width={80}
          />

          <Text flex={1} fontSize={"sm"}>
            We recommend starting with the{" "}
            <Span fontWeight={"bold"} textDecoration={"underline"}>
              3-month plan
            </Span>{" "}
            to achieve effective results or a{" "}
            <Span fontWeight={"bold"} textDecoration={"underline"}>
              6-month plan
            </Span>{" "}
            to form a longer-lasting routine.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const SpecialOfferTimer = () => {
  return (
    <Box backgroundColor={"brand.100"} pt={3}>
      <Container maxW={"container.lg"}>
        <Stack backgroundColor="white" px={4} py={3} width={"full"} mx="auto">
          <Stack
            maxW={"container.sm"}
            width={"full"}
            mx="auto"
            alignItems={"center"}
            direction={["column", "row"]}
            justifyContent={"space-between"}
            spacing={0}
          >
            <Timer color={"red.400"} fontSize={"3xl"} fontWeight={"semibold"} />
            <Text fontSize={"sm"}>
              <Text as="span" fontWeight={"bold"}>
                HURRY!
              </Text>{" "}
              Summer special offer expires soon
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

const Banner = () => (
  <Box backgroundColor={"brand.100"} pt={4}>
    <Container maxW={"container.lg"} color="white">
      <Stack bgGradient="linear(to-r, orange.400, primary.500)" px={4} py={3}>
        <Stack
          maxW={"container.sm"}
          width={"full"}
          mx="auto"
          direction={"row"}
          alignItems={"center"}
        >
          <Stack lineHeight={1}>
            <Text
              textTransform={"uppercase"}
              fontWeight={"bold"}
              fontSize={"lg"}
            >
              Summer sale
            </Text>

            <Stack spacing={1}>
              <Stack direction={"row"} alignItems={"center"}>
                <Icon as={LiaShippingFastSolid} />
                <Text
                  textTransform={"uppercase"}
                  fontWeight={"semibold"}
                  fontSize={"xs"}
                >
                  Free shipping
                </Text>
              </Stack>

              <Stack direction={"row"} alignItems={"center"}>
                <Icon as={IoBookOutline} />
                <Text
                  textTransform={"uppercase"}
                  fontWeight={"semibold"}
                  fontSize={"xs"}
                >
                  Diet guide included
                </Text>
              </Stack>
            </Stack>
          </Stack>

          <Stack lineHeight={1} spacing={1} alignItems={"center"} ml="auto">
            <Text
              textTransform={"uppercase"}
              fontWeight={"bold"}
              fontSize={"sm"}
            >
              Save up to
            </Text>

            <Text
              textTransform={"uppercase"}
              fontWeight={"bold"}
              fontSize={"4xl"}
            >
              60%
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  </Box>
);

const BannerTop = () => (
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
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        gap={[0, 1, 1]}
        flexWrap={"wrap"}
      >
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

function ProductSelectionSection() {
  const { websiteHostname, stripePublicKey } = siteConfig;

  const stripePromise = React.useRef<Promise<Stripe | null> | null>(null);

  const [purchaseType, setPurchaseType] =
    React.useState<PurchaseType>("subscription");

  const productList = getProducts(purchaseType);
  const dynamicText =
    purchaseType === "one-off" ? "One-time payment" : "Cancel anytime";

  const handleClick = async (product: Product) => {
    trackEvent({
      name: "InitiateCheckout",
      properties: {
        productID: product.id,
      },
    });

    const stripe = await stripePromise.current;

    const { error } = await stripe!.redirectToCheckout({
      lineItems: [
        {
          price: product.stripeID, // Replace with the ID of your price
          quantity: purchaseType === "one-off" ? product.count : 1,
        },
      ],
      mode: purchaseType === "one-off" ? "payment" : "subscription",
      successUrl: getPageUrl(product.id),
      cancelUrl: `${websiteHostname}`,
      shippingAddressCollection: { allowedCountries: ["US"] },
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  };

  React.useEffect(() => {
    stripePromise.current = loadStripe(stripePublicKey);
  }, []);

  return (
    <Box backgroundColor={"brand.100"} py={8}>
      <Container maxW={"container.lg"} id="pricing-section">
        <Heading mx="auto" mb={6} px={8} textAlign={"center"}>
          Choose your plan
        </Heading>

        <Grid gridTemplateColumns={"1fr 1fr"} gap={1} mx="auto" maxW={"450px"}>
          <Button
            size="md"
            variant={purchaseType === "one-off" ? "solid" : "outline"}
            colorScheme={"green"}
            onClick={() => setPurchaseType("one-off")}
            px={1}
            borderRadius={"full"}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <Icon
                as={purchaseType === "one-off" ? FaRegCheckCircle : FaRegCircle}
              />
              <Text
                textTransform={"uppercase"}
                fontSize={"xs"}
                fontWeight={"bold"}
              >
                One-time purchase
              </Text>
            </Stack>
          </Button>

          <Button
            size="md"
            variant={purchaseType === "subscription" ? "solid" : "outline"}
            colorScheme={"green"}
            onClick={() => setPurchaseType("subscription")}
            px={1}
            borderRadius={"full"}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <Icon
                as={
                  purchaseType === "subscription"
                    ? FaRegCheckCircle
                    : FaRegCircle
                }
              />

              <Text
                textTransform={"uppercase"}
                fontSize={"xs"}
                fontWeight={"bold"}
              >
                Subscribe
              </Text>

              <Badge colorScheme="primary" p={1}>
                Sale %
              </Badge>
            </Stack>
          </Button>
        </Grid>

        <SimpleGrid columns={[1, 1, 3]} gap={4} mt={4}>
          <ProductSelectItem
            product={productList[0]}
            badgeText={`Best value SAVE ${productList[0].discount}%`}
            badgeBg="pink.300"
            footerText={`${dynamicText}. Free shipping`}
            onBuyClick={() => {
              const product = productList[0];
              handleClick(product);
            }}
          />

          <ProductSelectItem
            product={productList[1]}
            badgeText={`Most popular SAVE ${productList[1].discount}%`}
            badgeBg="purple.300"
            footerText={`${dynamicText}. Free shipping`}
            onBuyClick={() => {
              const product = productList[1];
              handleClick(product);
            }}
          />

          <ProductSelectItem
            product={productList[2]}
            footerText={`${dynamicText}. Free shipping`}
            onBuyClick={() => {
              const product = productList[2];
              handleClick(product);
            }}
          />
        </SimpleGrid>
        <SafeCheckout />
        {/* <RiskFreeGuaranteed /> */}
      </Container>
    </Box>
  );
}

function ProductSelectItem({
  product,
  badgeText,
  badgeBg,
  footerText,
  onBuyClick,
}: {
  product: Product;
  badgeText?: string;
  badgeBg?: string;
  footerText?: string;
  onBuyClick: () => void;
}) {
  return (
    <Box position={"relative"}>
      <Flex
        direction={"column"}
        bg="white"
        p={4}
        borderRadius={"md"}
        border="1px solid"
        borderColor={"bg.100"}
        gap={2}
      >
        <Box
          color="white"
          px={2}
          py={1}
          fontSize={"sm"}
          bg={badgeBg}
          textAlign={"center"}
          fontWeight={"bold"}
          borderRadius={"sm"}
          mx={-4}
          mt={-4}
        >
          {badgeText ?? "\u200b"}
        </Box>

        <SimpleGrid
          columns={[2, 2, 1]}
          alignItems={"center"}
          gap={4}
          flexWrap={"wrap"}
        >
          <Box p={[0, 6]}>{product.image}</Box>
          <Box>
            <Text fontSize={"lg"} fontWeight={"bold"}>
              {product.count} month supply
            </Text>
            <Text fontSize={"xs"} minHeight={"3em"}>
              {product.subtitle}
            </Text>

            <Stack spacing={0}>
              <Flex gap={2} mt={3} fontSize={"lg"}>
                <Text fontWeight={"bold"}>${product.unitPrice.toFixed(2)}</Text>
                <Text textDecoration={"line-through"} color={"red.400"}>
                  $
                  {(
                    product.unitPrice /
                    ((100 - product.discount) / 100)
                  ).toFixed(2)}
                </Text>
              </Flex>

              <Text fontSize={"xs"}>Per bottle</Text>
            </Stack>

            <Flex direction={"column"} gap={0} fontSize={"xs"} my={3}>
              <Text>
                - {product.count * product.unitServingsCount} servings
              </Text>
              <Text>- ${(product.unitPrice / 30).toFixed(2)} per day</Text>
              <Text>
                - {product.count} bottle{product.count === 1 ? "" : "s"}{" "}
                delivered
              </Text>
            </Flex>
          </Box>
        </SimpleGrid>

        <Button
          colorScheme="green"
          rightIcon={<Icon as={FaArrowRight} />}
          onClick={onBuyClick}
          borderRadius={"full"}
          size={"lg"}
        >
          Order now
        </Button>

        <Text fontSize={"xs"} textAlign={"center"}>
          {footerText}
        </Text>
      </Flex>
    </Box>
  );
}

function BadgesSection() {
  return (
    <SimpleGrid
      columns={[1, 1, 3]}
      bg="white"
      py={6}
      flexWrap={"wrap"}
      spacing={3}
      justifyItems={"center"}
      color="pink.800"
      id="reviews"
      fontSize={"sm"}
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

function JumptToPricingButton() {
  return (
    <Button
      as="a"
      colorScheme="green"
      mx="auto"
      size={"lg"}
      borderRadius={"full"}
      rightIcon={<Icon as={FaArrowRight} />}
      href="#pricing-section"
    >
      Order yours now
    </Button>
  );
}
