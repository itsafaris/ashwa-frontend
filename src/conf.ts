const stripePublicKey = process.env.GATSBY_STRIPE_PUBLIC_KEY ?? "";
const stripeEnv = stripePublicKey.includes("live") ? "live" : "test";
import pkgjson from "../package.json";

export type SiteConfig = {
  websiteHostname: string;
  brandName: string;
  title: string;
  stripePublicKey: string;
  stripeEnv: "live" | "test";
  version: string;
  image: string;
  description: string;
  shopifyStoreDomain?: string;
  shopifyPublicAccessToken?: string;
};

export const siteConfig: SiteConfig = {
  brandName: "Calmr",
  version: pkgjson.version,
  image: "/images/facts-image.jpg",
  title: `Most complete Blend of Ashwagandha for Modern Busy Women`,
  description:
    "Our all-in-one supplement blend - the only one you'll need to combat stress, sharpen focus, and boost energy. This revolutionary formula uniquely combines Ashwagandha, Rhodiola Extract, and Bacopa with essential vitamins and minerals, creating a powerhouse solution tailored specifically for the modern woman's needs.",
  websiteHostname: process.env.GATSBY_WEBSITE_HOSTNAME ?? `http://localhost:8000`,
  stripePublicKey,
  stripeEnv,
  shopifyStoreDomain: process.env.GATSBY_SHOPIFY_STORE_DOMAIN,
  shopifyPublicAccessToken: process.env.GATSBY_SHOPIFY_PUBLIC_ACCESS_TOKEN,
};
