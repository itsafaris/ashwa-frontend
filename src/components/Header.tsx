import { Box, Container, Flex } from "@chakra-ui/react";
import { Logo } from "./logo";

export const Header = () => (
  <Box bg="white">
    <Container as={Flex} py={[1, 2]} alignItems={"center"} justifyContent={"center"}>
      <Logo height={["35px", "45px"]} fill={"pink.700"} />
    </Container>
  </Box>
);
