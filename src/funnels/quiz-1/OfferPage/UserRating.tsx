import { Flex, Text } from "@chakra-ui/react";
import { Rating } from "@components/components";

const TOTAL_NUMBER_OF_REVIEWS = 1247;

export function UserRating() {
  return (
    <Flex alignItems={"center"} gap={2} fontSize={"sm"} fontWeight={"semibold"}>
      <Rating />
      <Text>4.7/5</Text>
      <a href="#reviews">
        <Text>{TOTAL_NUMBER_OF_REVIEWS} reviews</Text>
      </a>
    </Flex>
  );
}
