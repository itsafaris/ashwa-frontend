import { Flex, Text, Container, Stack, Box } from "@chakra-ui/react";
import { Timer } from "@components/components";

export const SpecialOfferBannerTop = () => (
  <Stack spacing={0}>
    <Box
      bgGradient="linear(to-r, orange.300, orange.500)"
      fontWeight={"semibold"}
      color="white"
      py={1}
    >
      <Container
        as={Flex}
        gap={0}
        alignItems={"center"}
        justifyContent={"space-between"}
        maxW={["container.sm"]}
        fontSize={["sm", null, "md"]}
      >
        <Text>SUMMER SALE</Text>

        <Text>⚡</Text>

        <Text textAlign={"center"} fontWeight={"bold"}>
          50% OFF
        </Text>

        <Text>⚡</Text>

        <Text textAlign={"right"}>Free Shipping</Text>
      </Container>
    </Box>

    <Box
      bgGradient="linear(to-r, orange.400, orange.200)"
      fontWeight={"semibold"}
      color="white"
      py={1}
    >
      <Container
        as={Flex}
        gap={0}
        alignItems={"center"}
        justifyContent={"space-between"}
        maxW={["container.sm"]}
        fontSize={["sm", null, "md"]}
      >
        <Timer color={"white"} fontSize={["2xl", "3xl"]} fontWeight={"semibold"} />
        <Text fontSize={["sm", "md"]} textAlign={"center"} color="orange.800">
          <Text as="span" fontWeight={"bold"}>
            HURRY!
          </Text>{" "}
          Offer expires soon
        </Text>
      </Container>
    </Box>
  </Stack>
);
