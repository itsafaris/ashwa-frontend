import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import { Logo } from "./logo";
import { Link } from "gatsby";

export const Header = () => (
  <Box bg="white">
    <Container as={Flex} py={3} alignItems={"center"} justifyContent={"center"}>
      <Link to="/">
        <Logo height={"34px"} />
      </Link>
    </Container>
  </Box>
);
