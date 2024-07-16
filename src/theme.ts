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
      "50": "#f6f6f9",
      "100": "#ebebf3",
      "200": "#d3d4e4",
      "300": "#adafcc",
      "400": "#8084b0",
      "500": "#606597",
      "600": "#4c4f7d",
      "700": "#3e4066",
      "800": "#363856",
      "900": "#313249",
      "950": "#060609",
    },

    black: {
      50: "#E6E6E6",
      100: "#CCCCCC",
      200: "#999999",
      300: "#666666",
      400: "#333333",
      500: "#000000",
      600: "#000000",
      700: "#000000",
      800: "#000000",
      900: "#000000",
      950: "#000000",
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
      "50": "#fff1f3",
      "100": "#ffe3e7",
      "200": "#ffcbd6",
      "300": "#ffa1b4",
      "400": "#ff6d8e",
      "500": "#fa3969",
      "600": "#e9205c",
      "700": "#c30d47",
      "800": "#a30e43",
      "900": "#8c0f40",
      "950": "#4e031e",
    },
  },
};

export const theme = extendTheme(extensions);
