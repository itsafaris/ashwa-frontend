import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import { theme } from "./theme";
import { Global } from "@emotion/react";

export interface IRootWrapperProps {}

const GlobalCtx = React.createContext<{
  pageLoadedAt: number;
}>({} as any);

export function RootWrapper(props: React.PropsWithChildren<IRootWrapperProps>) {
  const [w, setW] = React.useState({ pageLoadedAt: Date.now() });

  return (
    <ChakraProvider theme={theme}>
      <GlobalCtx.Provider value={w}>{props.children}</GlobalCtx.Provider>
    </ChakraProvider>
  );
}

export function useGlobalState() {
  return React.useContext(GlobalCtx);
}
