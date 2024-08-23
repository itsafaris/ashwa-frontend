const stripePublicKey = process.env.GATSBY_STRIPE_PUBLIC_KEY ?? "";
const stripeEnv = stripePublicKey.includes("live") ? "live" : "test";
import pkgjson from "../package.json";

export type SiteConfig = {
  websiteHostname: string;
  brandName: string;
  title: string;
  email: string;
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
  email: "info@trycalmr.com",
  image: "/images/facts-image.jpg",
  title: `Combat Stress and Shed Pounds with an All-in-One Solution`,
  description:
    "Our carefully crafted formula works in harmony with your body's natural rhythms. By improving your sleep quality and supporting your metabolism, it contributes to your weight management efforts.",
  websiteHostname: process.env.GATSBY_WEBSITE_HOSTNAME ?? `http://localhost:8000`,
  stripePublicKey,
  stripeEnv,
  shopifyStoreDomain: process.env.GATSBY_SHOPIFY_STORE_DOMAIN,
  shopifyPublicAccessToken: process.env.GATSBY_SHOPIFY_PUBLIC_ACCESS_TOKEN,
};
