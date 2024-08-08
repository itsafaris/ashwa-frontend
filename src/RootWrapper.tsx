import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import { theme } from "./theme";
import { CartProvider, ShopifyProvider } from "@shopify/hydrogen-react";
import { siteConfig } from "./conf";
import { client } from "@lib/shopify/client";
import { getProductQuery } from "@lib/shopify/queries/product";
import { ProductFragment } from "types/storefront.generated";

import { mergeWithStripeVariants, Product } from "./products";

export interface IRootWrapperProps {}

type GlobalContextType = {
  pageLoadedAt: number;
  mainProduct?: ProductFragment;
  mainProductOneOffVariants: Product[];
};

const GlobalCtx = React.createContext<GlobalContextType>({} as any);

export function RootWrapper(props: React.PropsWithChildren<IRootWrapperProps>) {
  const [globalState, setGlobalState] = React.useState<GlobalContextType>({
    pageLoadedAt: Date.now(),
    mainProduct: undefined,
    mainProductOneOffVariants: [],
  });

  React.useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const res = await client.request(getProductQuery, {
      variables: { handle: "calmer-1-month-supply" },
    });

    const mainProduct = res.data?.product;
    if (!mainProduct) {
      return;
    }

    setGlobalState((p) => ({
      ...p,
      mainProduct: res.data?.product ?? undefined,
      mainProductOneOffVariants: mergeWithStripeVariants(
        mainProduct.variants.edges.map((it) => it.node)
      ),
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
