import { Box, Container, Flex, SimpleGrid, Stack, Text, Icon, Grid } from "@chakra-ui/react";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import React from "react";
import { siteConfig } from "src/conf";

import { Product } from "src/products";
import { useGlobalState } from "src/RootWrapper";
import { trackEvent } from "src/tracking";
import { SafeCheckout } from "./SafeCheckout";
import { FaArrowRight } from "react-icons/fa6";
import { StaticImage } from "gatsby-plugin-image";
import { CgPill } from "react-icons/cg";
import { MdLocalShipping } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import { FaPrescriptionBottle } from "react-icons/fa6";
import { BuyNowButton } from "./BuyNowButton";

export function ProductSelectionSection() {
  const { stripePublicKey } = siteConfig;
  const { mainProductOneOffVariants } = useGlobalState();

  const stripePromise = React.useRef<Promise<Stripe | null> | null>(null);

  React.useEffect(() => {
    stripePromise.current = loadStripe(stripePublicKey);
  }, []);

  const v1 = mainProductOneOffVariants[0];
  const v2 = mainProductOneOffVariants[1];
  const v3 = mainProductOneOffVariants[2];

  return (
    <Box id={"product-selection"} backgroundColor={"primary.100"} pt={3} pb={8}>
      <Container maxW={"container.lg"} id="pricing-section">
        <SimpleGrid columns={[1, 1, 3]} gap={4} mt={4}>
          {v1 && (
            <ProductSelectItem
              product={v1}
              badgeText={`Most popular SAVE ${v1.discount}%`}
              badgeBg="orange.400"
              hasFreeGift
              hasFreeShipping
            />
          )}

          {v2 && (
            <ProductSelectItem
              product={v2}
              badgeText={`Best value SAVE ${v2.discount}%`}
              badgeBg="orange.400"
              hasFreeGift
              hasFreeShipping
            />
          )}

          {v3 && <ProductSelectItem product={v3} />}
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
  hasFreeGift = false,
  hasFreeShipping = false,
}: {
  product: Product;
  badgeText?: string;
  badgeBg?: string;
  footerText?: string;
  hasFreeGift?: boolean;
  hasFreeShipping?: boolean;
}) {
  const { freeGiftProduct } = useGlobalState();

  const lines = [
    {
      merchandiseId: product.stripeID,
      quantity: product.count,
    },
  ];

  if (freeGiftProduct) {
    lines.push({
      merchandiseId: freeGiftProduct.variants.edges[0].node.id,
      quantity: 1,
    });
  }

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
      {badgeText && (
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
              <Text fontWeight={"bold"}>${product.unitPrice.toFixed(2)}</Text>
              <Text textDecoration={"line-through"} color={"red.400"}>
                ${product.unitPriceBefore}
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
              <Text>${(product.unitPrice / 30).toFixed(2)} per day</Text>
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
        lines={lines}
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
