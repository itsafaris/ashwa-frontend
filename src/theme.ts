import { extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/open-sans";
import "@fontsource-variable/eb-garamond";

export const theme = extendTheme({
  fonts: {
    heading: `'EB Garamond Variable', serif`,
    body: `'Open Sans Variable', sans-serif`,
  },
});
