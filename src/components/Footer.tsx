import { Container, Flex, Text, SimpleGrid, Stack, Box } from "@chakra-ui/react";
import React from "react";
import { Logo } from "./logo";

import { Link } from "gatsby";

export function Footer() {
  return (
    <Box py={10} bg="white" color="bg.700">
      <Container maxWidth={"container.lg"}>
        <Stack spacing={5}>
          <Logo height={"32px"} color={"primary.400"} />

          <Stack mx="auto" spacing={4} direction={['column', 'row']} alignItems={"center"} textDecoration={"underline"} fontSize={"sm"}>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/privacy-policy">Privacy policy</Link>
            <Link to="/shipping-policy">Shipping policy</Link>
            <Link to="/refund-policy">Refund policy</Link>
            <Link to="/about-us">About us</Link>
          </Stack>

          <Text fontSize={"xs"}>
            The statements made on this website have not been evaluated by the
            FDA (U.S. Food & Drug Administration). The products sold on this
            website are not intended to diagnose, treat, cure, or prevent any
            disease. The information provided by this website or this company is
            not a substitute for a face-to-face consultation with your
            physician, and should not be construed as individual medical advice.
          </Text>

          <Text fontSize={"xs"} textAlign={"center"}>
            ©2024 Calmr. All rights reserved.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
