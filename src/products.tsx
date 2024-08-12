import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { ProductVariantFragment } from "types/storefront.generated";

export type PurchaseType = "subscription" | "one-off";

export type ProductMeta = {
  id: string;
  stripeID: string;
  count: number;
  unitServingsCount: number;
  subtitle: string;
  image: React.ReactNode;
};

export type Product = ProductMeta & {
  unitPrice: number;
  unitPriceBefore: number;
  discount: number;
  shopifyProductVariant: ProductVariantFragment;
};

const common1 = {
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

const common3 = {
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

const common6 = {
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

const sub1 = {
  id: "sub-1",
  stripeID: "price_1PdaBTCSMlpgjECRDWZ2LB0k",
  ...common1,
};

const sub3 = {
  id: "sub-3",
  stripeID: "price_1PdanGCSMlpgjECRerg53HTL",
  ...common3,
};

const sub6 = {
  id: "sub-6",
  stripeID: "price_1Pdaj3CSMlpgjECRCIDtwNt2",
  ...common6,
};

const oneOff1 = {
  id: "one-off-1",
  stripeID: "gid://shopify/ProductVariant/43142721372207",
  ...common1,
};

const oneOff3 = {
  id: "one-off-3",
  stripeID: "gid://shopify/ProductVariant/43142721404975",
  ...common3,
};

const oneOff6 = {
  id: "one-off-6",
  stripeID: "gid://shopify/ProductVariant/43142721437743",
  ...common6,
};

const allProducts: ProductMeta[] = [oneOff3, oneOff6, oneOff1, sub3, sub6, sub1];

export const getProducts = (type: PurchaseType) => {
  if (type === "one-off") {
    return [oneOff3, oneOff6, oneOff1];
  }

  return [sub3, sub6, sub1];
};

export function getProduct(productID: string) {
  return allProducts.find((p) => p.id === productID);
}

export function mergeWithStripeVariant(
  productMeta: ProductMeta,
  productVariant: ProductVariantFragment
): Product {
  const discount = parseInt(productVariant.autoDiscount?.value ?? "0");
  const priceBefore = parseFloat(productVariant.price.amount);
  const priceNow = Math.ceil((1 - discount / 100) * priceBefore * 100) / 100;
  const unitPrice = priceNow;
  const unitPriceBefore = priceBefore;

  return {
    ...productMeta,
    unitPrice,
    unitPriceBefore,
    discount,
    shopifyProductVariant: productVariant,
  };
}

export function mergeWithStripeVariants(variants: ProductVariantFragment[]): Product[] {
  return getProducts("one-off")
    .map((it) => {
      const variant = variants.find((v) => v.id === it.stripeID);
      if (!variant) {
        return;
      }
      return mergeWithStripeVariant(it, variant);
    })
    .filter((it): it is Product => !!it);
}
