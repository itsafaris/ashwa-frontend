import { Container, Flex, Text, SimpleGrid, Stack, Box } from "@chakra-ui/react";
import React from "react";
import { Logo } from "./logo";

import { Link } from "gatsby";

export function Footer() {
  return (
    <Flex py={10} bg="white" color="bg.700">
      <Container as={Flex} maxWidth={1200} direction={"column"} gap={8}>
        <Flex direction={"column"} gap={2}>
          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Logo height={"32px"} color={"primary.400"} />
          </Flex>
        </Flex>

        <Flex direction={"column"} gap={2}>
          <Flex
            fontSize={"sm"}
            gap={3}
            justifyContent={"center"}
            textDecoration={"underline"}
            wrap={"wrap"}
          >
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/shipping-policy">Shipping Policy</Link>
            <Link to="/refund-policy">Return & Refund Policy</Link>
            <Link to="/about-us">About us</Link>
            <Link to="/faq">FAQs</Link>
          </Flex>

          <Text my={4} fontSize={"xs"}>
            Disclaimer: The Food and Drug Administration has not assessed the content and claims
            presented on this site. These products are not designed to identify, cure, alleviate, or
            avert any medical condition. It should not replace professional medical guidance or
            treatment. Please seek advice from a licensed healthcare professional for medical
            decision-making. A balanced diet and regular physical activity are essential for
            achieving and sustaining weight reduction. This product is not a substitute for medical
            expertise or intervention.
          </Text>

          <Text fontSize={"xs"} textAlign={"center"}>
            ©2024 Calmr. All rights reserved.
          </Text>
        </Flex>
      </Container>
    </Flex>
  );
}
