import { Box, Text, Container, Stack } from "@chakra-ui/react";

import { Timer } from "@components/components";

export const SpecialOfferTimer = () => {
  return (
    <Box backgroundColor={"primary.100"} pt={1}>
      <Container maxW={"container.lg"}>
        <Stack backgroundColor="pink.200" px={4} py={2} width={"full"} mx="auto">
          <Stack
            maxW={"container.sm"}
            width={"full"}
            mx="auto"
            alignItems={"center"}
            direction={["column", "row"]}
            justifyContent={"space-between"}
            spacing={[0, 4]}
          >
            <Timer color={"pink.800"} fontSize={"3xl"} fontWeight={"semibold"} />
            <Text fontSize={["sm", "md"]} textAlign={"center"} color="pink.900">
              <Text as="span" fontWeight={"bold"}>
                HURRY!
              </Text>{" "}
              Summer special offer expires soon
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
