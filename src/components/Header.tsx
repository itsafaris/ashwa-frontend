import { Box, Container, Flex } from "@chakra-ui/react";
import { Logo } from "./logo";

export const Header = () => (
  <Box bg="white">
    <Container as={Flex} py={3} alignItems={"center"} justifyContent={"center"}>
      <Logo height={"34px"} />
    </Container>
  </Box>
);
