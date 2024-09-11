import { Box, Stack, Text } from "@chakra-ui/react";
import { Span } from "./components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export function Recommendation() {
  return (
    <Stack
      p={3}
      direction={["column", "row"]}
      alignItems={"center"}
      spacing={4}
      maxW={"container.sm"}
      mx="auto"
    >
      <Box width={["70px", "80px"]}>
        <StaticImage
          src="../images/product-6-small.png"
          alt="bundle of 6 supplement bottles"
          width={80}
        />
      </Box>

      <Text flex={1} fontSize={"sm"}>
        We recommend starting with the{" "}
        <Link to="#product-selection">
          <Span fontWeight={"bold"} textDecoration={"underline"}>
            3-month plan
          </Span>
        </Link>{" "}
        to achieve effective results or a{" "}
        <Link to="#product-selection">
          <Span fontWeight={"bold"} textDecoration={"underline"}>
            6-month plan
          </Span>
        </Link>{" "}
        to form a longer-lasting routine.
      </Text>
    </Stack>
  );
}
