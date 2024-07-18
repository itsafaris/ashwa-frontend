import { Container, Stack } from "@chakra-ui/react";
import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FAQ } from "../components/FAQ";

export default function FAQPage() {
  return (
    <Stack>
      <Header />
      <Container>
        <FAQ />
      </Container>
      <Footer />
    </Stack>
  );
}
