import { Box, Image, Stack, Text } from "@chakra-ui/react";
import SafeCheckoutImg from "@images/safe-checkout.png";

export function SafeCheckout() {
  return (
    <Stack
      mt={4}
      mb={6}
      px={2}
      flexDirection={"column"}
      alignItems={"center"}
      maxW={"400px"}
      mx="auto"
      spacing={3}
    >
      <Text fontSize={"sm"} lineHeight={"normal"}>
        <Text as="span" fontWeight={"bold"}>
          {" "}
          Guaranteed
        </Text>{" "}
        Safe Checkout
      </Text>

      <Box mx="auto">
        <Image alt="Safe checkout" src={SafeCheckoutImg} />
      </Box>
    </Stack>
  );
}
