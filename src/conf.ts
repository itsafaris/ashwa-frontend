const stripePublicKey = process.env.GATSBY_STRIPE_PUBLIC_KEY ?? "";
const stripeEnv = stripePublicKey.includes("live") ? "live" : "test";

export type SiteConfig = {
  websiteHostname: string;
  title: string;
  stripePublicKey: string;
  stripeEnv: "live" | "test";
};

export const siteConfig: SiteConfig = {
  title: `ashwa-frontend`,
  websiteHostname:
    process.env.GATSBY_WEBSITE_HOSTNAME ?? `http://localhost:8000`,
  stripePublicKey,
  stripeEnv,
};
