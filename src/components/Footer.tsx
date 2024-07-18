import { Container, Flex, Text, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Logo } from "./logo";

import { Link } from "gatsby";

export function Footer() {
  return (
    <Flex py={20} bg="shade.200" color="bg.700">
      <Container as={Flex} maxWidth={1200} direction={"column"} gap={8}>
        <Flex direction={"column"} gap={2}>
          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Logo height={"32px"} color={"primary.400"} />
          </Flex>
          <Text textAlign={"center"} fontSize={"xl"} fontFamily={"heading"}>
            Stress-Free Living For Modern People
          </Text>
        </Flex>
        <SimpleGrid
          columns={[1, 1, 2]}
          alignItems={"center"}
          justifyItems={"center"}
        >
          <Flex direction={"column"} justifyContent={"center"}>
            <Text fontWeight={"semibold"}>Operational Address</Text>
            <Text>
              110 Innovation Blvd
              <br /> City of Wilmington <br /> DE 19805, USA
            </Text>
          </Flex>
          <Flex gap={2} flexWrap={"wrap"} maxWidth={"220px"}>
            <Link to="/about-us">About us</Link>
            <Link to="/faq">FAQs</Link>
            <Text>Blog</Text>
          </Flex>
        </SimpleGrid>
        <Flex direction={"column"} gap={2}>
          <Text fontSize={"sm"} textAlign={"center"}>
            ©2024 Calmr. All rights reserved.
          </Text>
          <Flex gap={4} justifyContent={"center"} textDecoration={"underline"}>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/privacy-policy">Privacy policy</Link>
            <Link to="/shipping-policy">Shipping policy</Link>
            <Link to="/refund-policy">Refund policy</Link>
          </Flex>
          <Text my={4} fontSize={"xs"}>
            The statements made on this website have not been evaluated by the
            FDA (U.S. Food & Drug Administration). The products sold on this
            website are not intended to diagnose, treat, cure, or prevent any
            disease. The information provided by this website or this company is
            not a substitute for a face-to-face consultation with your
            physician, and should not be construed as individual medical advice.
          </Text>
        </Flex>
      </Container>
    </Flex>
  );
}
