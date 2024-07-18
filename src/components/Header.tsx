import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import { Logo } from "./logo";

export const Header = () => (
  <Box bg="shade.100">
    <Container as={Flex} py={3} alignItems={"center"} justifyContent={"center"}>
      <Logo height={"24px"} />
    </Container>
  </Box>
);
