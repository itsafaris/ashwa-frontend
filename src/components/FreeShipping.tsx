import { Flex, Text, SimpleGrid, Icon, Container, Box } from "@chakra-ui/react";

import { FaShippingFast } from "react-icons/fa";
import { LiaFlagUsaSolid } from "react-icons/lia";

export function FreeShippingSection() {
  return (
    <Box id="reviews" bg="primary.200" py={6}>
      <Container>
        <SimpleGrid
          columns={[1, 1, 2]}
          flexWrap={"wrap"}
          spacing={3}
          justifyItems={"center"}
          color="pink.800"
          fontSize={"sm"}
        >
          <Flex alignItems={"center"} gap={2}>
            <Icon boxSize={6} as={FaShippingFast} />
            <Text fontWeight={"bold"}>Free Shipping</Text>
          </Flex>

          <Flex alignItems={"center"} gap={2}>
            <Icon boxSize={6} as={LiaFlagUsaSolid} />
            <Text fontWeight={"bold"}>Made in the USA</Text>
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
