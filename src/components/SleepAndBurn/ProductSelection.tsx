import { Box, Container, Flex, SimpleGrid, Stack, Text, Icon, Grid } from "@chakra-ui/react";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import React from "react";
import { siteConfig } from "src/conf";
import { Product } from "src/products";
import { useGlobalState } from "src/RootWrapper";
import { trackEvent } from "src/tracking";
import { SafeCheckout } from "../SafeCheckout";
import { FaArrowRight } from "react-icons/fa6";
import { StaticImage } from "gatsby-plugin-image";
import { BuyNowButton } from "../BuyNowButton";

export function ProductSelection({
  bundle1,
  bundle2,
  bundle3,
}: {
  bundle1: Product;
  bundle2: Product;
  bundle3: Product;
}) {
  const { freeGiftProduct } = useGlobalState();
  const { stripePublicKey } = siteConfig;
  const stripePromise = React.useRef<Promise<Stripe | null> | null>(null);

  const [selectedBundle, setSelectedBundle] = React.useState<Product>(bundle2);

  React.useEffect(() => {
    stripePromise.current = loadStripe(stripePublicKey);
  }, []);

  const lines = React.useMemo(() => {
    const result = [
      {
        merchandiseId: selectedBundle.stripeID,
        quantity: selectedBundle.count,
      },
    ];

    if (freeGiftProduct) {
      result.push({
        merchandiseId: freeGiftProduct.variants.edges[0].node.id,
        quantity: 1,
      });
    }

    return result;
  }, [selectedBundle, freeGiftProduct]);

  return (
    <Box id={"product-selection"} pt={3} pb={8}>
      <SimpleGrid columns={[1, 3, 3]} alignItems={"flex-end"} gap={3} mt={4}>
        <BundleItem
          singleUnitPrice={bundle3.unitPrice}
          bundle={bundle2}
          badgeText={`${bundle2.discount}% OFF / Best value`}
          hasFreeGift
          onSelect={setSelectedBundle}
          isSelected={selectedBundle.id === bundle2.id}
        />

        <BundleItem
          singleUnitPrice={bundle3.unitPrice}
          bundle={bundle1}
          badgeText={`${bundle1.discount}% OFF /  Most popular`}
          hasFreeGift
          onSelect={setSelectedBundle}
          isSelected={selectedBundle.id === bundle1.id}
        />

        <BundleItem
          singleUnitPrice={bundle3.unitPrice}
          bundle={bundle3}
          onSelect={setSelectedBundle}
          isSelected={selectedBundle.id === bundle3.id}
        />
      </SimpleGrid>

      <BuyNowButton
        lines={lines}
        colorScheme="green"
        rightIcon={<Icon as={FaArrowRight} />}
        onClick={() => {
          trackEvent({
            name: "InitiateCheckout",
            properties: {
              productID: selectedBundle.id,
              value: selectedBundle.unitPrice * selectedBundle.count,
            },
          });
        }}
        borderRadius={"full"}
        size={"lg"}
      >
        Order now
      </BuyNowButton>

      <SafeCheckout />
    </Box>
  );
}

function BundleItem({
  singleUnitPrice,
  bundle,
  badgeText,
  hasFreeGift = false,
  onSelect,
  isSelected,
}: {
  singleUnitPrice: number;
  bundle: Product;
  badgeText?: string;
  hasFreeGift?: boolean;
  onSelect: (product: Product) => void;
  isSelected: boolean;
}) {
  return (
    <Stack
      spacing={0}
      onClick={() => {
        onSelect(bundle);
      }}
      cursor={"pointer"}
      boxShadow={isSelected ? "0 0 0 3px #ed8936" : undefined}
    >
      {badgeText && (
        <Box
          width={"full"}
          color="white"
          px={2}
          py={1}
          fontSize={"sm"}
          bg={"orange.400"}
          textAlign={"center"}
          fontWeight={"bold"}
        >
          {badgeText}
        </Box>
      )}

      <Stack
        p={2}
        direction={["row", "row", "column"]}
        alignItems={"center"}
        bg="white"
        height={"100%"}
      >
        <Box position={"relative"}>
          {bundle.image}

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

        <Stack spacing={0} mt={[6, 6, 0]} alignItems={"center"} textAlign={"center"}>
          <Text fontSize={"sm"} fontWeight={"semibold"}>
            {bundle.count} {bundle.count > 1 ? "bottles" : "bottle"} / {bundle.count} month supply
          </Text>

          <Stack mt={3} spacing={2} direction="row" alignItems={"center"}>
            <Text
              fontWeight={"semibold"}
              textDecoration={"line-through"}
              color={"red.400"}
              fontSize={"sm"}
            >
              ${bundle.unitPriceBefore}
            </Text>

            <Text fontWeight={"bold"} fontSize={"md"}>
              ${bundle.unitPrice.toFixed(2)} Each
            </Text>
          </Stack>

          {bundle.count > 1 && (
            <Text fontSize={"xs"}>
              You save ${(Math.round((singleUnitPrice - bundle.unitPrice) * 100) / 100).toFixed(2)}{" "}
              Each
            </Text>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
