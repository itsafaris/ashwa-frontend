import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import { theme } from "./theme";

export interface IRootWrapperProps {}

export function RootWrapper(props: React.PropsWithChildren<IRootWrapperProps>) {
  return <ChakraProvider theme={theme}>{props.children}</ChakraProvider>;
}
