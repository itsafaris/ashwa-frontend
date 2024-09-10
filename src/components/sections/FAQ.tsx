import { Box, Container } from "@chakra-ui/react";
import { CTAButton } from "@components/components";
import { FAQ } from "@components/FAQ";

export function FAQSection() {
  return (
    <Box py={8} bg="brand.50">
      <Container maxW={"container.md"}>
        <FAQ />
      </Container>

      <CTAButton mt={10} />
    </Box>
  );
}
