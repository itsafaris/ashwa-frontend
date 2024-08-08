import { createStorefrontApiClient } from "@shopify/storefront-api-client";
import { siteConfig } from "src/conf";

if (!siteConfig.shopifyStoreDomain) {
  throw new Error("shopify store domain not provided");
}

export const client = createStorefrontApiClient({
  storeDomain: siteConfig.shopifyStoreDomain,
  apiVersion: "2023-10",
  publicAccessToken: siteConfig.shopifyPublicAccessToken,
});
