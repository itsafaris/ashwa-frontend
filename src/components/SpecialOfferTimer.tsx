import { Text, Container, Stack } from "@chakra-ui/react";
import { Timer } from "@components/components";

export const SpecialOfferTimer = () => {
  return (
    <Container maxW={"container.lg"}>
      <Stack
        bgGradient="linear(to-r, orange.400, orange.200)"
        px={4}
        py={[1, 2]}
        width={"full"}
        mx="auto"
      >
        <Stack
          maxW={"container.sm"}
          width={"full"}
          mx="auto"
          alignItems={"center"}
          direction={["column", "row"]}
          justifyContent={"space-between"}
          spacing={[0, 4]}
        >
          <Timer color={"white"} fontSize={["2xl", "3xl"]} fontWeight={"semibold"} />
          <Text fontSize={["sm", "md"]} textAlign={"center"} color="orange.800">
            <Text as="span" fontWeight={"bold"}>
              HURRY!
            </Text>{" "}
            Summer special offer expires soon
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
};
