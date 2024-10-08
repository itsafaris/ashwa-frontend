import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import { theme } from "./theme";
import { CartProvider, ShopifyProvider } from "@shopify/hydrogen-react";
import { siteConfig } from "./conf";
import { client } from "@lib/shopify/client";
import { getProductQuery } from "@lib/shopify/queries/product";
import { ProductFragment } from "types/storefront.generated";
import posthog from "posthog-js";

import { mergeWithStripeProduct, Product } from "./products";

export interface IRootWrapperProps {}

type GlobalContextType = {
  pageLoadedAt: number;
  mainProduct?: ProductFragment;
  freeGiftProduct?: ProductFragment;
  mainProductOneOffVariants: Product[];
};

const GlobalCtx = React.createContext<GlobalContextType>({} as any);

export function RootWrapper(props: React.PropsWithChildren<IRootWrapperProps>) {
  const [globalState, setGlobalState] = React.useState<GlobalContextType>({
    pageLoadedAt: Date.now(),
    freeGiftProduct: undefined,
    mainProduct: undefined,
    mainProductOneOffVariants: [],
  });

  React.useEffect(() => {
    let hash = window.location.hash;
    if (hash) {
      hash = hash.slice(1, hash.length);
      const [paramName, paramValue] = hash.split("=");
      if (paramName === "userid") {
        posthog.identify(paramValue);
      }
    }

    loadProducts();
  }, []);

  async function loadProducts() {
    const [res1, res2] = await Promise.all([
      client.request(getProductQuery, {
        variables: { handle: "free-gift-optimal-weight-loss-cheat-sheet-pdf-book" },
      }),
      client.request(getProductQuery, {
        variables: { handle: "calmer-1-month-supply" },
      }),
    ]);

    const freeGiftProduct = res1.data?.product;
    const mainProduct = res2.data?.product;

    setGlobalState((p) => ({
      ...p,
      freeGiftProduct: freeGiftProduct ?? undefined,
      mainProduct: mainProduct ?? undefined,
      mainProductOneOffVariants: mainProduct ? mergeWithStripeProduct(mainProduct) : [],
    }));
  }

  return (
    <ShopifyProvider
      storeDomain={siteConfig.shopifyStoreDomain!}
      storefrontToken={siteConfig.shopifyPublicAccessToken!}
      storefrontApiVersion="2024-07"
      countryIsoCode="US"
      languageIsoCode="EN"
    >
      <CartProvider>
        <ChakraProvider theme={theme}>
          <GlobalCtx.Provider value={globalState}>{props.children}</GlobalCtx.Provider>
        </ChakraProvider>
      </CartProvider>
    </ShopifyProvider>
  );
}

export function useGlobalState() {
  return React.useContext(GlobalCtx);
}
