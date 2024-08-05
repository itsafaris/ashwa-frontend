import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import React from "react";
import { siteConfig } from "src/conf";
import { getPageUrl } from "src/pages/purchase-success";
import { Product, PurchaseType } from "src/products";
import { useGlobalState } from "src/RootWrapper";
import { trackEvent, trackPixelEvent } from "src/tracking";
import { SafeCheckout } from "./SafeCheckout";
import { FaArrowRight } from "react-icons/fa6";
import { BuyNowButton } from "@shopify/hydrogen-react";

export function ProductSelectionSection({ email }: { email?: string }) {
  const { websiteHostname, stripePublicKey } = siteConfig;
  const { mainProductOneOffVariants } = useGlobalState();

  const stripePromise = React.useRef<Promise<Stripe | null> | null>(null);

  const [purchaseType, setPurchaseType] = React.useState<PurchaseType>("subscription");

  const dynamicText = purchaseType === "one-off" ? "One-time payment" : "Cancel anytime";

  const handleClick = async (product: Product) => {
    trackEvent({
      name: "InitiateCheckout",
      properties: {
        productID: product.id,
      },
    });

    trackPixelEvent({
      name: "InitiateCheckout",
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
      cancelUrl: window.location.href,
      shippingAddressCollection: { allowedCountries: ["US"] },
      customerEmail: email,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  };

  React.useEffect(() => {
    stripePromise.current = loadStripe(stripePublicKey);
  }, []);

  const v1 = mainProductOneOffVariants[0];
  const v2 = mainProductOneOffVariants[1];
  const v3 = mainProductOneOffVariants[2];

  return (
    <Box backgroundColor={"brand.100"} py={8}>
      <Container maxW={"container.lg"} id="pricing-section">
        <Heading mx="auto" mb={6} px={8} textAlign={"center"}>
          Choose your plan
        </Heading>

        {/* <Grid gridTemplateColumns={"1fr 1fr"} gap={1} mx="auto" maxW={"450px"}>
          <Button
            size="md"
            variant={purchaseType === "one-off" ? "solid" : "outline"}
            colorScheme={"green"}
            onClick={() => setPurchaseType("one-off")}
            px={1}
            borderRadius={"full"}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <Icon as={purchaseType === "one-off" ? FaRegCheckCircle : FaRegCircle} />
              <Text textTransform={"uppercase"} fontSize={"xs"} fontWeight={"bold"}>
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
              <Icon as={purchaseType === "subscription" ? FaRegCheckCircle : FaRegCircle} />

              <Text textTransform={"uppercase"} fontSize={"xs"} fontWeight={"bold"}>
                Subscribe
              </Text>

              <Badge colorScheme="primary" p={1}>
                Sale %
              </Badge>
            </Stack>
          </Button>
        </Grid> */}

        <SimpleGrid columns={[1, 1, 3]} gap={4} mt={4}>
          {v1 && (
            <ProductSelectItem
              product={v1}
              badgeText={`Best value SAVE ${v1.discount}%`}
              badgeBg="pink.300"
              footerText={`${dynamicText}. Free shipping`}
              onBuyClick={() => {
                handleClick(v1);
              }}
            />
          )}

          {v2 && (
            <ProductSelectItem
              product={v2}
              badgeText={`Most popular SAVE ${v2.discount}%`}
              badgeBg="purple.300"
              footerText={`${dynamicText}. Free shipping`}
              onBuyClick={() => {
                handleClick(v2);
              }}
            />
          )}

          {v3 && (
            <ProductSelectItem
              product={v3}
              footerText={`${dynamicText}. Free shipping`}
              onBuyClick={() => {
                handleClick(v3);
              }}
            />
          )}
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

        <SimpleGrid columns={[2, 2, 1]} alignItems={"center"} gap={4} flexWrap={"wrap"}>
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
                  ${product.unitPriceBefore}
                </Text>
              </Flex>

              <Text fontSize={"xs"}>Per bottle</Text>
            </Stack>

            <Flex direction={"column"} gap={0} fontSize={"xs"} my={3}>
              <Text>- {product.count * product.unitServingsCount} servings</Text>
              <Text>- ${(product.unitPrice / 30).toFixed(2)} per day</Text>
              <Text>
                - {product.count} bottle{product.count === 1 ? "" : "s"} delivered
              </Text>
            </Flex>
          </Box>
        </SimpleGrid>

        <Button
          as={BuyNowButton}
          variantId={product.stripeID}
          quantity={product.count}
          colorScheme="green"
          rightIcon={<Icon as={FaArrowRight} />}
          // onClick={onBuyClick}
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
