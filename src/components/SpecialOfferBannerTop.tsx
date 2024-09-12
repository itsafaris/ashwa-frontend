import { Text, Container, Stack, Box } from "@chakra-ui/react";
import { Timer } from "@components/components";

export const SpecialOfferBannerTop = () => (
  <Box
    position={"fixed"}
    width={"full"}
    bgGradient="linear(to-r, orange.400, orange.300)"
    fontWeight={"semibold"}
    color="white"
    py={2}
    zIndex={5}
    top={0}
  >
    <Container maxW={"container.sm"} fontSize={["sm", "md", "md"]}>
      <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
        <Stack spacing={0} lineHeight={1.2}>
          <Text>SUMMER SALE! 🔥</Text>
          <Text fontSize={"xl"}>50% OFF</Text>
        </Stack>

        <Text fontSize={"xl"}></Text>

        <Stack spacing={0} alignItems={"end"} lineHeight={1.2}>
          <Text>HURRY! Offer expires soon:</Text>
          <Timer fontSize={["xl", "2xl"]} />
        </Stack>
      </Stack>
    </Container>
  </Box>
);
