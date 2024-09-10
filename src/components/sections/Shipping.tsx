import { Flex, Text, SimpleGrid, Icon, Container, Box, Grid, GridProps } from "@chakra-ui/react";

import { FaShippingFast } from "react-icons/fa";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { BsBoxSeamFill } from "react-icons/bs";

export function Shipping(props: GridProps) {
  return (
    <Grid
      gridTemplateColumns={["1fr", "auto auto auto"]}
      gap={3}
      alignItems={"center"}
      fontSize={"sm"}
      width={"full"}
      {...props}
    >
      <Flex alignItems={"center"} gap={3} justifyContent={"center"} fontWeight={"bold"}>
        <Icon boxSize={4} as={BsBoxSeamFill} />
        <Text>Free Shipping On Orders $50+</Text>
      </Flex>

      <Flex alignItems={"center"} gap={3} justifyContent={"center"}>
        <Icon boxSize={5} as={FaShippingFast} />
        <Text>3-5 Day Delivery</Text>
      </Flex>

      <Flex alignItems={"center"} gap={3} justifyContent={"center"}>
        <Icon boxSize={5} as={LiaFlagUsaSolid} />
        <Text>Made In The USA</Text>
      </Flex>
    </Grid>
  );
}
