import { Container, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import PolicyRenderer, {
  PolicyRendererData,
} from "../components/PolicyRenderer";

const data: PolicyRendererData = [
  {
    title: "Our Purpose",
    content: [
      {
        text: "At Calmr, our goal is to empower women to take charge of their mental well-being and alleviate anxiety. We aim to offer high-quality anti-anxiety supplements that help women achieve a state of calm and balance in their lives.",
      },
    ],
  },
  {
    title: "Tailored Solutions",
    content: [
      {
        text: "Recognizing that every woman's experience with anxiety is unique, we provide customized solutions to meet those diverse needs. Our carefully formulated supplements are rooted in scientific research, ensuring that you receive the most effective support.",
      },
    ],
  },
  {
    title: "Our Principles",
    content: [
      {
        text: "Our work at Calmr is guided by our steadfast commitment to empathy, quality, community, and innovation. These principles are central to our mission as we assist you in your journey towards enhanced self-care and well-being.",
      },
    ],
  },
  {
    title: "Get In Touch",
    content: [
      {
        text: "Calmr is based in the USA. Our address is 110 Innovation Blvd, Wilmington, DE 19805, USA.",
      },
      {
        text: "If you have any questions, feel free to contact us at info@calmr.com.",
      },
      {
        text: "For more information about our products and services, visit our website at www.trycalmr.com.",
      },
    ],
  },
];

export default function AboutUsPage() {
  return (
    <Stack>
      <Header />
      <Container>
        <PolicyRenderer pageTitle="About us" data={data} />
      </Container>
      <Footer />
    </Stack>
  );
}
