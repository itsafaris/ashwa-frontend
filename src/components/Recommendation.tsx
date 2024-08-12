import { Stack, Text } from "@chakra-ui/react";
import { Span } from "./components";
import { StaticImage } from "gatsby-plugin-image";

export function Recommendation() {
  return (
    <Stack flexDir={"row"} alignItems={"center"} spacing={4} maxW={"container.sm"} mx="auto">
      <StaticImage
        src="../images/product-2-small.png"
        alt="bundle of 3 supplement bottles"
        width={90}
      />

      <Text flex={1} fontSize={"sm"} fontWeight={"semibold"}>
        We recommend starting with the{" "}
        <Span fontWeight={"bold"} textDecoration={"underline"}>
          3-month plan
        </Span>{" "}
        to achieve the most effective results in the shortest time.
      </Text>
    </Stack>
  );
}
