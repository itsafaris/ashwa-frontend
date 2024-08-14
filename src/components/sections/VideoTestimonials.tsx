import { Box, Flex, Heading, Text, Container, Stack, Grid } from "@chakra-ui/react";

import { CTAButton, Rating } from "../components";
import { Review } from "../../reviews";

export function VideoTestimonials({ reviews }: { reviews: Review[] }) {
  return (
    <Box backgroundColor={"white"} py={10}>
      <Container maxW={"container.lg"}>
        <Stack spacing={6} alignItems={"center"}>
          <Stack alignItems={"center"}>
            <Rating rating={5} size="normal" />

            <Heading
              lineHeight={1.2}
              fontSize={["3xl", "3xl", "4xl"]}
              maxW={"container.sm"}
              textAlign={"center"}
            >
              Users experience <br /> massive changes in less than a month
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

        <Stack mt={12}>
          <CTAButton />
        </Stack>
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
    >
      {review.img && (
        <Flex width={"100%"} position={"relative"}>
          <Flex overflow={"hidden"} borderTopRadius={"lg"} width={"100%"}>
            {review.img}
          </Flex>

          <Stack spacing={0} position={"absolute"} bottom={2} left={2}>
            <Rating rating={review.score} size="small" />
            <Text fontWeight={"bold"} fontSize={"xs"} color={"white"}>
              Verified Purchase
            </Text>
          </Stack>
        </Flex>
      )}

      <Grid alignItems={"center"} gridTemplateColumns={"45px 1fr"} p={2} height={"100px"} gap={2}>
        {review.productImg && <Flex ml="-30px">{review.productImg}</Flex>}

        <Stack fontSize={"xs"} spacing={0}>
          <Text fontWeight={"semibold"}>"{review.title}"</Text>
          <Text>{review.name}</Text>
        </Stack>
      </Grid>
    </Stack>
  );
}
