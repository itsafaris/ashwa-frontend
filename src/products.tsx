import { StaticImage } from "gatsby-plugin-image";
import { siteConfig } from "./conf";
import React from "react";

export type PurchaseType = "subscription" | "one-off";

export type Product = {
  id: string;
  stripeID: string;
  unitPrice: number;
  discount: number;
  count: number;
  unitServingsCount: number;
  subtitle: string;
  image: React.ReactNode;
};

const { stripeEnv } = siteConfig;

const common1 = {
  count: 1,
  unitServingsCount: 30,
  subtitle: "Ideal solution for trying out",
  image: (
    <StaticImage
      alt="ashwagandha supplements bottle"
      src={"./images/product1.png"}
      placeholder="blurred"
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
      src={"./images/product2.png"}
      placeholder="blurred"
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
      src={"./images/product3.png"}
      placeholder="blurred"
    />
  ),
};

const sub1 = {
  id: "sub-1",
  stripeID:
    stripeEnv === "test"
      ? "price_1PdaBTCSMlpgjECRDWZ2LB0k"
      : "price_1PfN5hCSMlpgjECRymGRUXV6",
  unitPrice: 24.9,
  discount: 40,
  ...common1,
};

const sub3 = {
  id: "sub-3",
  stripeID:
    stripeEnv === "test"
      ? "price_1PdanGCSMlpgjECRerg53HTL"
      : "price_1PfN51CSMlpgjECRe3Ax5mBo",
  unitPrice: 19.9,
  discount: 50,
  ...common3,
};

const sub6 = {
  id: "sub-6",
  stripeID:
    stripeEnv === "test"
      ? "price_1Pdaj3CSMlpgjECRCIDtwNt2"
      : "price_1PfN2UCSMlpgjECRDf9MCr2m",
  unitPrice: 14.9,
  discount: 60,
  ...common6,
};

const oneOff1 = {
  id: "one-off-1",
  stripeID:
    stripeEnv === "test"
      ? "price_1PdZhuCSMlpgjECR1eJj9PFi"
      : "price_1PdpSrCSMlpgjECROTMJLTEU",
  unitPrice: 29.9,
  discount: 30,
  ...common1,
};

const oneOff3 = {
  id: "one-off-3",
  stripeID:
    stripeEnv === "test"
      ? "price_1PdZinCSMlpgjECR1m4HUs2n"
      : "price_1PdpSpCSMlpgjECRn1EnzhdG",
  unitPrice: 25.9,
  discount: 40,
  ...common3,
};

const oneOff6 = {
  id: "one-off-6",
  stripeID:
    stripeEnv === "test"
      ? "price_1PdaDOCSMlpgjECRPNMPPzRr"
      : "price_1PdpSnCSMlpgjECRCONM7i7F",
  unitPrice: 21.9,
  discount: 50,
  ...common6,
};

const allProducts = [oneOff3, oneOff6, oneOff1, sub3, sub6, sub1];

export const getProducts = (type: PurchaseType) => {
  if (type === "one-off") {
    return [oneOff3, oneOff6, oneOff1];
  }

  return [sub3, sub6, sub1];
};

export function getProduct(productID: string) {
  return allProducts.find((p) => p.id === productID);
}
