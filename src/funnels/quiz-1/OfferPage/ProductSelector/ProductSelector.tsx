import { Icon, SimpleGrid, Stack } from "@chakra-ui/react";
import React from "react";

import { Product, PurchaseType } from "src/products";
import { ProductItem } from "./ProductItem";
import { PurchaseTypeSelector } from "./PurchaseTypeSelector";
import { SafeCheckout } from "@components/SafeCheckout";
import { BuyNowButton, BuyNowButtonProps } from "@components/BuyNowButton";
import { trackEvent } from "src/tracking";
import { FaArrowRight } from "react-icons/fa6";

import { ProductFragment } from "types/storefront.generated";

export type ExtendedProduct = Product & {
  hasFreeShipping?: boolean;
  hasFreeGift?: boolean;
  giftProduct?: ProductFragment;
  badge?: { title: string; showDiscount: boolean };
};

export function ProductSelector({ products }: { products: ExtendedProduct[] }) {
  const [purchaseType, setPurchaseType] = React.useState<PurchaseType>("subscription");
  const [selectedProduct, setSelectedProduct] = React.useState<Product>(products[0]);
  const lines = useLines(selectedProduct, purchaseType);

  const anchorUnitPriceBefore = products.find((it) => it.id === "bundle-1")?.unitPriceBefore;

  return (
    <Stack id={"product-selection"} width={"full"} spacing={6}>
      <PurchaseTypeSelector purchaseType={purchaseType} onChange={setPurchaseType} />

      <SimpleGrid columns={[1, 1, products.length]} gap={3}>
        {products.map((it, idx) => {
          return (
            <ProductItem
              key={idx}
              product={it}
              purchaseType={purchaseType}
              isSelected={selectedProduct.id === it.id}
              onSelect={setSelectedProduct}
              anchorUnitPriceBefore={anchorUnitPriceBefore}
            />
          );
        })}
      </SimpleGrid>

      <BuyNowButton
        lines={lines}
        colorScheme="green"
        rightIcon={
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            height={"20px"}
            width={"20px"}
            borderRadius={"full"}
            backgroundColor={"white"}
          >
            <Icon as={FaArrowRight} color={"green.500"} boxSize={3} />
          </Stack>
        }
        onClick={() => {
          trackEvent({
            name: "InitiateCheckout",
            properties: {
              productID: selectedProduct.id,
              value: selectedProduct.unitPrice * selectedProduct.count,
            },
          });
        }}
        borderRadius={"full"}
        size={"lg"}
      >
        Order Now
      </BuyNowButton>

      <SafeCheckout />
    </Stack>
  );
}

function useLines(selectedProduct: ExtendedProduct, purchaseType: PurchaseType) {
  const lines = React.useMemo(() => {
    const result: BuyNowButtonProps["lines"] = [];

    const mainProductLineItem: BuyNowButtonProps["lines"][number] = {
      merchandiseId: selectedProduct.stripeID,
      quantity: selectedProduct.count,
    };

    if (purchaseType === "subscription" && selectedProduct.subscriptionPlan) {
      mainProductLineItem.sellingPlanId = selectedProduct.subscriptionPlanID;
    }

    result.push(mainProductLineItem);

    if (selectedProduct.giftProduct) {
      result.push({
        merchandiseId: selectedProduct.giftProduct.variants.edges[0].node.id,
        quantity: 1,
      });
    }

    return result;
  }, [selectedProduct, purchaseType]);

  return lines;
}
