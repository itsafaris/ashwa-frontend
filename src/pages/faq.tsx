import { Container, Stack } from "@chakra-ui/react";
import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FAQList } from "../components/FAQList";

export default function FAQPage() {
  return (
    <Stack>
      <Header />
      <Container>
        <FAQList />
      </Container>
      <Footer />
    </Stack>
  );
}
