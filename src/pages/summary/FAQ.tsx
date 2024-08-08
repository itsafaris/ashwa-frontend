import { Box, Container } from "@chakra-ui/react";
import { FAQ } from "@components/FAQ";

export function FAQSection() {
  return (
    <Box py={8}>
      <Container maxW={"container.md"}>
        <FAQ />
      </Container>
    </Box>
  );
}
