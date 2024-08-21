import { Flex, Text, Container } from "@chakra-ui/react";

export const SpecialOfferBannerTop = () => (
  <Flex
    bgGradient="linear(to-r, pink.300, pink.500)"
    fontWeight={"semibold"}
    color="white"
    py={1}
    px={3}
  >
    <Container
      as={Flex}
      gap={0}
      alignItems={"center"}
      justifyContent={"space-between"}
      maxW={["container.lg"]}
      fontSize={["sm", null, "md"]}
    >
      <Flex justifyContent={"center"} alignItems={"center"} gap={[0, 1, 1]} flexWrap={"wrap"}>
        <Flex gap={1}>
          <Text>Summer sale</Text>
        </Flex>
      </Flex>
      <Text>⚡</Text>
      <Text textAlign={"center"}>50% OFF</Text>
      <Text>⚡</Text>
      <Text textAlign={"center"}>Free Shipping</Text>
    </Container>
  </Flex>
);
