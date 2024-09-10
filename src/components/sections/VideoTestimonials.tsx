import { Box, Flex, Heading, Text, Container, Stack, Grid, Icon } from "@chakra-ui/react";

import { CTAButton, Rating } from "../components";
import { Review } from "../../reviews";

import { FaCheck } from "react-icons/fa";
import { UserRating } from "@components/SleepAndBurn/UserRating";

export function VideoTestimonials({ reviews }: { reviews: Review[] }) {
  return (
    <Box backgroundColor={"white"} py={10}>
      <Container maxW={"container.lg"}>
        <Stack spacing={6} alignItems={"center"}>
          <Stack alignItems={"center"} mb={5}>
            <UserRating />

            <Heading
              lineHeight={1.2}
              fontSize={["3xl", "3xl", "4xl"]}
              maxW={"container.sm"}
              textAlign={"center"}
            >
              These Women Saw a Significant Difference In{" "}
              <Text as="span" color="primary.600" textDecoration={"underline"}>
                Under 90 Days!
              </Text>
            </Heading>
          </Stack>

          <Grid
            gridTemplateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr 1fr 1fr"]}
            gridTemplateRows={["auto auto", "auto auto", "auto"]}
            alignItems={"center"}
            gap={3}
            width={"full"}
            justifyContent={"space-between"}
          >
            {reviews.map((it, idx) => {
              return <TopReview review={it} key={idx} />;
            })}
          </Grid>
        </Stack>

        <CTAButton mt={10} />
      </Container>
    </Box>
  );
}

function TopReview({ review }: { review: Review }) {
  return (
    <Stack
      width={"100%"}
      maxW={"400px"}
      backgroundColor={"white"}
      mx={"auto"}
      borderRadius={"lg"}
      position={"relative"}
      spacing={0}
      boxShadow={"0px 8px 10px 0px #a3a3a3"}
      border="1px solid"
      borderColor={"bg.100"}
      height={"100%"}
    >
      {review.img && (
        <Flex width={"100%"} position={"relative"}>
          <Flex overflow={"hidden"} borderTopRadius={"lg"} width={"100%"}>
            {review.img}
          </Flex>

          <Stack spacing={0} position={"absolute"} bottom={2} left={2}>
            <Rating rating={review.score} size="small" />

            <Stack
              mt={2}
              direction={"row"}
              alignItems={"center"}
              px={2}
              borderRadius="full"
              backgroundColor={"green.500"}
            >
              <Text fontWeight={"bold"} fontSize={"xs"} color={"white"}>
                Verified Buyer
              </Text>
              <Icon as={FaCheck} color={"white"} boxSize={3} />
            </Stack>
          </Stack>
        </Flex>
      )}

      <Grid
        alignItems={"center"}
        gridTemplateColumns={["40px 1fr", "50px 1fr"]}
        px={2}
        py={2}
        height={["100px", "90px"]}
        gap={2}
      >
        {review.productImg && <Flex>{review.productImg}</Flex>}

        <Stack spacing={0}>
          <Text fontWeight={"bold"} fontSize={["xs", "sm"]} lineHeight={1.2}>
            "{review.title}"
          </Text>
          <Text fontSize={"xs"}>{review.name}</Text>
        </Stack>
      </Grid>
    </Stack>
  );
}
