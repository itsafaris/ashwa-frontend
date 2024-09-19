import { Box, Grid, Icon, Stack, Text } from "@chakra-ui/react";
import { Selector, Slide } from "@lib/quiz-lib";
import { Card, Heading, NextButton } from "./components";
import { FaCheckCircle } from "react-icons/fa";
import { Review, topReviews } from "@components/reviews";
import { MediaSection } from "../components/MediaSection";
import { navigate } from "gatsby";

export function TestimonialMoreSlide() {
  return (
    <Slide
      id="more-user-testimonial"
      type="filler"
      containerProps={{ px: 3, py: 1, maxW: "600px" }}
    >
      <Card>
        <Heading>
          But don't just take our word for it. Hear what others are saying about Calmr:
        </Heading>

        {topReviews.map((it, idx) => {
          return <ReviewItem key={idx} review={it} />;
        })}

        <MediaSection />

        <Stack>
          <Selector mt={0} mb={0} />
        </Stack>

        <NextButton
          onClick={() => {
            navigate("/quiz-1/offer");
          }}
        >
          Continue
        </NextButton>
      </Card>
    </Slide>
  );
}

function ReviewItem({ review }: { review: Review }) {
  return (
    <Grid gridTemplateColumns={"30% 1fr"} alignItems={"flex-start"} gap={4}>
      <Box>{review.img}</Box>

      <Stack spacing={3}>
        <Text>"{review.text}"</Text>

        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
          <Text fontWeight={"bold"} fontSize={"sm"}>
            {review.name}
          </Text>

          <Stack direction={"row"} spacing={1} alignItems={"center"} color={"green.500"}>
            <Icon as={FaCheckCircle} />
            <Text fontWeight={"bold"} fontSize={"sm"}>
              Verified
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  );
}
