import React from "react";
import { Box, Stack, Text, Grid, Image, Icon } from "@chakra-ui/react";

import { Product, PurchaseType } from "src/products";
import { StaticImage } from "gatsby-plugin-image";
import { calcPrices } from "./utils";
import { FaRegCircle } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";

export function ProductItem({
  purchaseType,
  product,
  onSelect,
  isSelected,
  anchorUnitPriceBefore,
}: {
  purchaseType: PurchaseType;
  product: Product;
  onSelect: (product: Product) => void;
  isSelected: boolean;
  anchorUnitPriceBefore?: number;
}) {
  const { unitPrice, unitPriceBefore } = calcPrices(product, purchaseType);

  let badgeTitle = undefined;

  if (product.badge) {
    badgeTitle = product.badge.title;

    if (product.badge.showDiscount) {
      const discountPercentage = Math.ceil((1 - unitPrice / unitPriceBefore) * 100);
      badgeTitle = [`${discountPercentage}% OFF - `, badgeTitle].join(" ");
    }
  }

  return (
    <Stack
      spacing={0}
      cursor={"pointer"}
      boxShadow={isSelected ? "0 0 0 3px #febf03" : undefined}
      bg={isSelected ? "#fff4e1" : "white"}
      onClick={() => {
        onSelect(product);
      }}
    >
      <TopBar
        isSelected={isSelected}
        title={badgeTitle}
        bgColor={isSelected ? "#febf03" : badgeTitle ? "#FFD600" : undefined}
      />

      <Stack
        px={2}
        pb={3}
        pt={5}
        mx="auto"
        maxW={"320px"}
        direction={["row", "row", "row", "column"]}
        alignItems={"center"}
        justifyContent={"space-between"}
        spacing={4}
        marginTop={"auto"}
      >
        <Box position={"relative"}>
          {product.image}

          {product.giftProduct && (
            <Box position={"absolute"} bottom={"-5%"} right={"-5%"} zIndex={0}>
              <StaticImage
                alt=""
                src="../../../images/free-gift-label.png"
                width={40}
                style={{
                  transform: "rotate(15deg)",
                  marginLeft: "auto",
                  position: "absolute",
                  bottom: 0,
                  left: "-20px",
                }}
              />

              <Image alt="" src={product.giftProduct.featuredImage?.url} width={45} />
            </Box>
          )}
        </Box>

        <Stack flexShrink={0} spacing={2} alignItems={"center"} textAlign={"center"}>
          <Text fontSize={"sm"}>
            {product.count} {product.count > 1 ? "bottles" : "bottle"} / {product.count} month
            supply
          </Text>

          <Stack spacing={2} direction="row" alignItems={"center"}>
            <Text
              fontWeight={"semibold"}
              textDecoration={"line-through"}
              color={"red.400"}
              fontSize={"sm"}
            >
              ${unitPriceBefore.toFixed(2)}
            </Text>

            <Text fontWeight={"bold"} fontSize={"md"}>
              ${unitPrice.toFixed(2)} Each
            </Text>
          </Stack>

          {anchorUnitPriceBefore && (
            <Text
              fontSize={"xs"}
              py={"2px"}
              px={3}
              borderRadius={"full"}
              backgroundColor={isSelected ? "orange.500" : "orange.400"}
              fontWeight={"bold"}
              color={"white"}
            >
              TOTAL SAVED $
              {getTotalSavings({
                unitCount: product.count,
                unitPrice,
                anchorUnitPriceBefore,
              }).toFixed(2)}
            </Text>
          )}

          <Text fontSize={"xs"} textAlign={"center"}>
            {purchaseType === "subscription" ? "Cancel anytime" : "One-time payment"}
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
}

function TopBar({
  title,
  bgColor,
  isSelected,
}: {
  isSelected: boolean;
  title?: string;
  bgColor?: string;
}) {
  return (
    <Grid
      gridTemplateColumns={["16px 1fr 16px", "16px 1fr 16px", "auto 1fr"]}
      width={"full"}
      color="black"
      px={2}
      py={2}
      bg={bgColor}
      textAlign={"center"}
      fontWeight={"bold"}
      alignItems={"center"}
      gap={2}
    >
      <Icon
        color={isSelected ? "black" : "yellow.500"}
        as={isSelected ? FaRegCheckCircle : FaRegCircle}
      />
      <Text fontSize={"13px"}>{title}</Text>
    </Grid>
  );
}

function getTotalSavings({
  unitCount,
  unitPrice,
  anchorUnitPriceBefore,
}: {
  unitCount: number;
  unitPrice: number;
  anchorUnitPriceBefore: number;
}) {
  const totalWithoutDiscounts = unitCount * anchorUnitPriceBefore;
  const totalWithDiscounts = unitCount * unitPrice;

  return Math.round((totalWithoutDiscounts - totalWithDiscounts) * 100) / 100;
}
