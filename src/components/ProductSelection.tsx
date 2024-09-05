import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  Icon,
  Grid,
  Heading,
  Button,
  Badge,
} from "@chakra-ui/react";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import React from "react";
import { siteConfig } from "src/conf";

import { Product, PurchaseType } from "src/products";
import { useGlobalState } from "src/RootWrapper";
import { trackEvent } from "src/tracking";
import { SafeCheckout } from "./SafeCheckout";
import { FaArrowRight, FaRegCircle } from "react-icons/fa6";
import { StaticImage } from "gatsby-plugin-image";
import { CgPill } from "react-icons/cg";
import { MdLocalShipping } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import { FaPrescriptionBottle } from "react-icons/fa6";
import { BuyNowButton, BuyNowButtonProps } from "./BuyNowButton";
import { FaRegCheckCircle } from "react-icons/fa";
import { ProductFragment } from "types/storefront.generated";

export function ProductSelectionSection() {
  const { mainProductOneOffVariants, freeGiftProduct } = useGlobalState();
  const [purchaseType, setPurchaseType] = React.useState<PurchaseType>("subscription");

  const v1 = mainProductOneOffVariants[0];
  const v2 = mainProductOneOffVariants[1];
  const v3 = mainProductOneOffVariants[2];

  return (
    <Box id={"product-selection"} backgroundColor={"primary.100"} pt={3} pb={8}>
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

              <Badge colorScheme="green" p={1}>
                Sale %
              </Badge>
            </Stack>
          </Button>
        </Grid>

        <SimpleGrid columns={[1, 1, 3]} gap={4} mt={4}>
          {v1 && (
            <ProductSelectItem
              purchaseType={purchaseType}
              product={v1}
              giftProduct={freeGiftProduct}
              badgeTextPrefix={`Most popular SAVE`}
              badgeBg="orange.400"
              hasFreeGift
              hasFreeShipping
            />
          )}

          {v2 && (
            <ProductSelectItem
              purchaseType={purchaseType}
              product={v2}
              giftProduct={freeGiftProduct}
              badgeTextPrefix={`Best value SAVE`}
              badgeBg="orange.400"
              hasFreeGift
              hasFreeShipping
            />
          )}

          {v3 && <ProductSelectItem purchaseType={purchaseType} product={v3} />}
        </SimpleGrid>
        <SafeCheckout />
        {/* <RiskFreeGuaranteed /> */}
      </Container>
    </Box>
  );
}

function ProductSelectItem({
  purchaseType,
  product,
  giftProduct,
  badgeTextPrefix,
  badgeBg,
  footerText,
  hasFreeGift = false,
  hasFreeShipping = false,
}: {
  purchaseType: PurchaseType;
  product: Product;
  giftProduct?: ProductFragment;
  badgeTextPrefix?: string;
  badgeBg?: string;
  footerText?: string;
  hasFreeGift?: boolean;
  hasFreeShipping?: boolean;
}) {
  function getLines() {
    const lines: BuyNowButtonProps["lines"] = [];

    const mainProductLineItem: BuyNowButtonProps["lines"][number] = {
      merchandiseId: product.stripeID,
      quantity: product.count,
    };

    if (purchaseType === "subscription" && product.subscriptionPlan) {
      mainProductLineItem.sellingPlanId = product.subscriptionPlanID;
    }

    lines.push(mainProductLineItem);

    if (hasFreeGift && giftProduct) {
      lines.push({
        merchandiseId: giftProduct.variants.edges[0].node.id,
        quantity: 1,
      });
    }

    return lines;
  }

  let unitPrice = product.unitPrice;
  let unitPriceBefore = product.unitPriceBefore;

  if (
    purchaseType === "subscription" &&
    product.subscriptionPlan &&
    product.subscriptionPlan.priceAdjustmentAmountOff
  ) {
    const amountOff = product.subscriptionPlan.priceAdjustmentAmountOff.amount;
    unitPrice = product.unitPrice - amountOff;
    unitPriceBefore = product.unitPriceBefore - amountOff;
  }

  let discountPercentage = Math.ceil((1 - unitPrice / unitPriceBefore) * 100);
  let badgeText = [badgeTextPrefix || "", `${discountPercentage}%`].join(" ");

  return (
    <Flex
      direction={"column"}
      bg="white"
      p={4}
      borderRadius={"md"}
      border="1px solid"
      borderColor={"bg.100"}
      gap={2}
      position={"relative"}
      justifyContent={"space-between"}
      height={"100%"}
    >
      {badgeTextPrefix && (
        <Box
          width={"full"}
          position={"absolute"}
          top={0}
          left={0}
          color="white"
          px={2}
          py={1}
          fontSize={"sm"}
          bg={badgeBg}
          textAlign={"center"}
          fontWeight={"bold"}
          borderRadius={"sm"}
        >
          {badgeText}
        </Box>
      )}

      <SimpleGrid columns={[2, 2, 1]} alignItems={"center"} gap={4} flexWrap={"wrap"}>
        <Box p={[0, 6]} position={"relative"}>
          {product.image}

          {hasFreeGift && (
            <Grid
              gridTemplateColumns="1fr 1fr"
              alignItems={"center"}
              position={"absolute"}
              bottom={[-3, 5]}
              zIndex={0}
              gap={0}
              width={["70%", "50%"]}
            >
              <StaticImage
                alt=""
                src="../images/free-gift-label.png"
                width={100}
                style={{
                  transform: "rotate(15deg)",
                  marginLeft: "auto",
                }}
              />

              <StaticImage
                alt=""
                src="../images/free-gift-1-sm.png"
                width={100}
                style={{ marginRight: "auto" }}
              />
            </Grid>
          )}
        </Box>

        <Box mt={[6, 6, 0]}>
          <Text fontSize={"sm"} minH={10} mb={2} fontWeight={"bold"} color="primary.600">
            {product.subtitle}
          </Text>

          <Text fontSize={"lg"} fontWeight={"bold"}>
            {product.count} month supply
          </Text>

          <Stack spacing={0}>
            <Flex gap={2} mt={3} fontSize={"lg"}>
              <Text fontWeight={"bold"}>${unitPrice.toFixed(2)}</Text>
              <Text textDecoration={"line-through"} color={"red.400"}>
                ${unitPriceBefore.toFixed(2)}
              </Text>
            </Flex>

            <Text fontSize={"xs"}>Per bottle</Text>
          </Stack>

          <Flex direction={"column"} gap={0} fontSize={"xs"} fontWeight={"semibold"} my={3}>
            <Stack direction={"row"} gap={2} alignItems={"center"}>
              <Icon as={CgPill} />
              <Text>{product.count * product.unitServingsCount} servings</Text>
            </Stack>

            <Stack direction={"row"} gap={2} alignItems={"center"}>
              <Icon as={IoMdSunny} />
              <Text>${(unitPrice / 30).toFixed(2)} per day</Text>
            </Stack>

            <Stack direction={"row"} gap={2} alignItems={"center"}>
              <Icon as={FaPrescriptionBottle} />
              <Text>
                {product.count} bottle{product.count === 1 ? "" : "s"} delivered
              </Text>
            </Stack>

            {hasFreeShipping && (
              <Stack
                direction={"row"}
                gap={2}
                alignItems={"center"}
                backgroundColor={"green.200"}
                mr="auto"
              >
                <Icon as={MdLocalShipping} />
                <Text>FREE shipping</Text>
              </Stack>
            )}
          </Flex>
        </Box>
      </SimpleGrid>

      <BuyNowButton
        lines={getLines()}
        colorScheme="green"
        rightIcon={<Icon as={FaArrowRight} />}
        onClick={() => {
          trackEvent({
            name: "InitiateCheckout",
            properties: {
              productID: product.id,
              value: product.unitPrice * product.count,
            },
          });
        }}
        borderRadius={"full"}
        size={"lg"}
      >
        Order now
      </BuyNowButton>

      {footerText && (
        <Text fontSize={"xs"} textAlign={"center"}>
          {footerText}
        </Text>
      )}
    </Flex>
  );
}
