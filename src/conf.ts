import pkgjson from "../package.json";
import { isProdMode } from "./utils";

export type SiteConfig = {
  websiteHostname: string;
  brandName: string;
  title: string;
  email: string;
  version: string;
  image: string;
  description: string;
  shopifyStoreDomain?: string;
  shopifyPublicAccessToken?: string;
  posthogApiKey: string;
  posthogApiHost: string;
};

export const siteConfig: SiteConfig = {
  brandName: "Calmr",
  version: pkgjson.version,
  email: "info@trycalmr.com",
  image: "/images/facts-image.jpg",
  title: `Combat Stress and Shed Pounds with an All-in-One Solution`,
  description:
    "Our carefully crafted formula works in harmony with your body's natural rhythms. By improving your sleep quality and supporting your metabolism, it contributes to your weight management efforts.",
  websiteHostname: isProdMode() ? "https://trycalmr.com" : `http://localhost:8000`,
  shopifyPublicAccessToken: "fbdbe2ed192dcc7faada6059ca9fef38",
  shopifyStoreDomain: "https://calmrsupps.myshopify.com",
  posthogApiKey: "phc_8GZnMTIRMuj7aNKBpluPe46MiqUaFn4RiuH4TtCnmme",
  posthogApiHost: "https://us.i.posthog.com",
};
