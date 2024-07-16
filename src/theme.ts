import { ChakraTheme, DeepPartial, extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/open-sans";
import "@fontsource-variable/eb-garamond";

const extensions: DeepPartial<ChakraTheme> = {
  fonts: {
    heading: `'EB Garamond Variable', serif`,
    body: `'Open Sans Variable', sans-serif`,
  },
  components: {
    Heading: {
      baseStyle: {
        color: "black",
      },
    },
  },
  colors: {
    bg: {
      "50": "#f6faf7",
      "100": "#dbece0",
      "200": "#b6d9c0",
      "300": "#8abe9b",
      "400": "#61a077",
      "500": "#47855e",
      "600": "#376a4b",
      "700": "#2f563f",
      "800": "#294635",
      "900": "#253c2e",
      "950": "#112218",
    },

    shade: {
      "50": "#faf7f6",
      "100": "#f6edea",
      "200": "#eedfda",
      "300": "#e2c8bf",
      "400": "#d8b6ab",
      "500": "#bc8877",
      "600": "#a66e5c",
      "700": "#8a5a4b",
      "800": "#734d41",
      "900": "#62443a",
      "950": "#33221c",
    },
    primary: {
      "50": "#fef2f2",
      "100": "#ffe1e1",
      "200": "#ffc8c8",
      "300": "#ffa2a2",
      "400": "#fd5454",
      "500": "#f63d3d",
      "600": "#e31f1f",
      "700": "#bf1616",
      "800": "#9e1616",
      "900": "#831919",
      "950": "#470808",
    },
  },
};

export const theme = extendTheme(extensions);
