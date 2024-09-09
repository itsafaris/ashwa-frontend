import { Box, Stack, Text } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export function SafeCheckout() {
  return (
    <Stack alignItems={"center"} maxW={"320px"} mx={"auto"}>
      <StaticImage alt="Safe checkout" src={"../images/safe-checkout_1.png"} width={350} />
    </Stack>
  );
}
