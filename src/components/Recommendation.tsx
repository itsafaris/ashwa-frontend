import { Stack, Text } from "@chakra-ui/react";
import { Span } from "./components";
import { StaticImage } from "gatsby-plugin-image";

export function Recommendation() {
  return (
    <Stack p={3} flexDir={"row"} alignItems={"center"} spacing={4} maxW={"container.sm"} mx="auto">
      <StaticImage
        src="../images/product-6-small.png"
        alt="bundle of 6 supplement bottles"
        width={80}
      />

      <Text flex={1} fontSize={"sm"}>
        We recommend starting with the <Span fontWeight={"bold"}>3-month plan</Span> to achieve
        effective results or a<Span fontWeight={"bold"}> 6-month plan</Span> to form a
        longer-lasting routine.
      </Text>
    </Stack>
  );
}
