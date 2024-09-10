import { flattenConnection } from "@shopify/hydrogen-react";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import {
  ProductFragment,
  ProductVariantFragment,
  SellingPlanFragment,
} from "types/storefront.generated";

export type PurchaseType = "subscription" | "one-off";

export type ProductMeta = {
  id: string;
  subscriptionPlanID: string;
  stripeID: string;
  count: number;
  unitServingsCount: number;
  subtitle: string;
  image: React.ReactNode;
};

export type ProductShopifyData = {
  unitPrice: number;
  unitPriceBefore: number;
  shopifyProductVariant: ProductVariantFragment;
  subscriptionPlan?: {
    title: string;
    priceAdjustmentAmountOff?: {
      amount: number;
    };
  };
};

export type Product = ProductMeta & ProductShopifyData;

// const TEST_VARIANT_ID = "gid://shopify/ProductVariant/43217257824303";

const productMeta1: ProductMeta = {
  id: "bundle-1",
  stripeID: "gid://shopify/ProductVariant/43142721372207",
  subscriptionPlanID: "gid://shopify/SellingPlan/1478197295",
  count: 1,
  unitServingsCount: 30,
  subtitle: "Ideal solution for trying out",
  image: (
    <StaticImage
      alt="ashwagandha supplements bottle"
      src={"./images/product-1.jpg"}
      placeholder="blurred"
      width={240}
    />
  ),
};

const productMeta3: ProductMeta = {
  id: "bundle-3",
  stripeID: "gid://shopify/ProductVariant/43142721404975",
  subscriptionPlanID: "gid://shopify/SellingPlan/1478230063",
  count: 3,
  unitServingsCount: 30,
  subtitle: "Great for building new habits",
  image: (
    <StaticImage
      alt="ashwagandha supplements bottle"
      src={"./images/product-2.jpg"}
      placeholder="blurred"
      width={240}
    />
  ),
};

const productMeta6: ProductMeta = {
  id: "bundle-6",
  stripeID: "gid://shopify/ProductVariant/43142721437743",
  subscriptionPlanID: "gid://shopify/SellingPlan/1478262831",
  count: 6,
  unitServingsCount: 30,
  subtitle: "For achieving the most sustainable results",
  image: (
    <StaticImage
      alt="ashwagandha supplements bottle"
      src={"./images/product-3.jpg"}
      placeholder="blurred"
      width={240}
    />
  ),
};

const allProducts: ProductMeta[] = [productMeta1, productMeta3, productMeta6];

export const getProducts = () => {
  return [productMeta3, productMeta6, productMeta1];
};

export function getProduct(productID: string) {
  return allProducts.find((p) => p.id === productID);
}

export function mergeWithStripeVariant(
  productMeta: ProductMeta,
  productVariant: ProductVariantFragment,
  sellingPlan?: SellingPlanFragment
): Product {
  const priceBefore = parseFloat(productVariant.price.amount);
  const priceNow = parseFloat(
    productVariant.priceAfterDiscount?.value ?? productVariant.price.amount
  );

  const unitPrice = priceNow;
  const unitPriceBefore = priceBefore;

  const p: Product = {
    ...productMeta,
    unitPrice,
    unitPriceBefore,
    shopifyProductVariant: productVariant,
  };

  if (sellingPlan) {
    const priceAdjustment = sellingPlan.priceAdjustments[0];
    const amountOff = priceAdjustment?.adjustmentValue?.adjustmentAmount;

    p.subscriptionPlan = {
      title: sellingPlan.name,
    };

    if (amountOff) {
      p.subscriptionPlan!.priceAdjustmentAmountOff = {
        amount: parseFloat(amountOff.amount),
      };
    }
  }

  return p;
}

export function mergeWithStripeProduct(product: ProductFragment): Product[] {
  const variants = product.variants.edges.map((it) => it.node);
  const sellingPlans = flattenConnection(product.sellingPlanGroups).flatMap((group) =>
    flattenConnection(group.sellingPlans)
  );

  return getProducts()
    .map((productMeta) => {
      const variant = variants.find((v) => v.id === productMeta.stripeID);
      if (!variant) {
        return;
      }
      const sellingPlan = sellingPlans.find((p) => p.id === productMeta.subscriptionPlanID);
      return mergeWithStripeVariant(productMeta, variant, sellingPlan);
    })
    .filter((it): it is Product => !!it);
}
