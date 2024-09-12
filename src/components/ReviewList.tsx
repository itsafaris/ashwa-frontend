import { Box, Flex, Heading, Text, Icon, Container, Stack } from "@chakra-ui/react";
import { IoPersonCircle } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { Rating, Span } from "./components";
import { Review } from "./reviews";

const TOTAL_NUMBER_OF_REVIEWS = 1247;

export function ReviewList({ reviews }: { reviews: Review[] }) {
  return (
    <Box py={8}>
      <Container maxW={"container.md"}>
        <Heading my={6} textAlign={"center"}>
          Real Stories, Real Results
        </Heading>

        <Flex my={4} gap={2} justifyContent={"space-between"}>
          <Text fontSize={"sm"}>
            Showing <Span decoration={"underline"}>most recent</Span> reviews from{" "}
            <Span decoration={"underline"} whiteSpace={"nowrap"}>
              United States
            </Span>{" "}
          </Text>
          <Text flexShrink={0} fontSize={"xs"} color="gray.500">
            <Span color="black" fontWeight={"semibold"}>
              {reviews.length}
            </Span>{" "}
            / {TOTAL_NUMBER_OF_REVIEWS}
          </Text>
        </Flex>

        <Flex direction={"column"} gap={3}>
          {reviews.map((review, idx) => {
            return (
              <Flex
                key={idx}
                bg="white"
                borderRadius={"lg"}
                border="1px solid"
                borderColor={"bg.100"}
                boxShadow={"lg"}
              >
                <Flex direction={"column"} p={2} px={3} flex={1} gap={1}>
                  <Flex alignItems={"center"} gap={2}>
                    <Icon as={IoPersonCircle} color="gray.400" boxSize={6}></Icon>
                    <Text>{review.name}</Text>
                    <Flex alignItems={"center"} gap={1}>
                      <Icon as={FaCheckCircle} color="green.400" boxSize={3}></Icon>
                      <Text fontWeight={"bold"} fontSize={"xs"} color="green.500">
                        Verified Purchase
                      </Text>
                    </Flex>
                  </Flex>

                  <Flex gap={2} alignItems={"center"}>
                    <Rating rating={review.score} />
                    <Text fontWeight={"bold"}>{review.title}</Text>
                  </Flex>

                  <Flex gap={1} direction={"column"}>
                    <Text fontSize={"sm"} color={"gray.700"}>
                      Reviewed in {review.location} {review.hoursAgo} hours ago
                    </Text>
                  </Flex>

                  {review.img && (
                    <Flex height={"140px"} width={"140px"} my={2}>
                      {review.img}
                    </Flex>
                  )}

                  <Text my={2} fontSize={"sm"}>
                    {review.text}
                  </Text>
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      </Container>
    </Box>
  );
}
