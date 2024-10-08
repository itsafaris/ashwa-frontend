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

    text: {
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
      "50": "#fcf6f0",
      "100": "#faede1",
      "200": "#f2d1b6",
      "300": "#e9b188",
      "400": "#e08857",
      "500": "#d96a36",
      "600": "#ca542c",
      "700": "#a84026",
      "800": "#873525",
      "900": "#6d2d21",
      "950": "#3a1510",
    },
    brand: {
      "50": "#faf5fa",
      "100": "#f7ecf6",
      "200": "#f0daee",
      "300": "#e8c5e5",
      "400": "#d393cc",
      "500": "#c371b8",
      "600": "#ae549d",
      "700": "#944282",
      "800": "#7b396c",
      "900": "#68335c",
      "950": "#3e1936",
    },
    primary: {
      "50": "#fcf7fc",
      "100": "#f7eff8",
      "200": "#f0ddf1",
      "300": "#e4c3e4",
      "400": "#d39fd2",
      "500": "#bd78bc",
      "600": "#a0599d",
      "700": "#8d4c89",
      "800": "#6c3c68",
      "900": "#5a3556",
      "950": "#381a35",
    },
    secondary: {
      "50": "#f4f9f8",
      "100": "#d9eeea",
      "200": "#c0e3dd",
      "300": "#84c4bb",
      "400": "#5aa79f",
      "500": "#408c85",
      "600": "#326f6b",
      "700": "#2b5a57",
      "800": "#264948",
      "900": "#233e3d",
      "950": "#102323",
    },
  },
};

export const theme = extendTheme(extensions);
