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
            The statements made on this website have not been evaluated by the FDA (U.S. Food & Drug
            Administration). The products sold on this website are not intended to diagnose, treat,
            cure, or prevent any disease. The information provided by this website or this company
            is not a substitute for a face-to-face consultation with your physician, and should not
            be construed as individual medical advice.
          </Text>

          <Text fontSize={"xs"} textAlign={"center"}>
            ©2024 Calmr. All rights reserved.
          </Text>
        </Flex>
      </Container>
    </Flex>
  );
}
