import { Icon, Stack, Text } from "@chakra-ui/react";
import { Selector, Slide } from "@lib/quiz-lib";
import { StaticImage } from "gatsby-plugin-image";
import { Card, Heading, NextButton } from "./components";
import { Rating } from "@components/components";
import { FaCheckCircle } from "react-icons/fa";

export function TestimonialOneSlide() {
  return (
    <Slide id="user-testimonial" type="filler" containerProps={{ px: 3, py: 1, maxW: "600px" }}>
      <Card>
        <Heading>
          But don't just take our word for it. Hear what others are saying about Calmr:
        </Heading>

        <Stack borderRadius={"lg"} overflow={"hidden"}>
          <StaticImage
            alt="User testimonial"
            src="../../../images/user-testimonial-1.jpg"
            width={1000}
          />
        </Stack>

        <Rating rating={5} size="normal" />

        <Text>
          “Before Calmr, I just couldn’t get the weight off. I’d lose and regain the same weight
          over and over again, felt hungry and miserable all the time.
        </Text>

        <Text>
          Everything changed when I got Calmr. Over time I noticed a lot less cravings, could
          control my appetite better, and lost a total of 27 lbs. Honestly I don’t remember the last
          time I felt this great inside and out.
        </Text>

        <Text>
          If you’re stuck at a weight that doesn’t make you happy, you owe yourself to try Calmr.
          You won’t recognize yourself or your health.”
        </Text>

        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
          <Text fontWeight={"bold"} fontSize={"sm"}>
            Barbara T.
          </Text>

          <Stack direction={"row"} spacing={1} alignItems={"center"} color={"green.500"}>
            <Icon as={FaCheckCircle} />
            <Text fontWeight={"bold"} fontSize={"sm"}>
              Verified customer
            </Text>
          </Stack>
        </Stack>

        <Stack>
          <Selector mt={0} mb={0} />
        </Stack>

        <NextButton>Continue</NextButton>
      </Card>
    </Slide>
  );
}
