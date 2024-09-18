import { Box, Grid, Icon, Stack, Text } from "@chakra-ui/react";
import { Selector, Slide } from "@lib/quiz-lib";
import { StaticImage } from "gatsby-plugin-image";
import { Card, Heading, NextButton, Subtitle, SummaryCard } from "./components";

export function TestimonialOneSlide() {
  return (
    <Slide id="user-testimonial" type="filler" containerProps={{ px: 3, py: 1 }}>
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

        <Stack>
          <Grid gridTemplateColumns={"1fr 1fr"} gap={2}>
            <Stack p={3} backgroundColor="#c38cc8" borderRadius={"lg"} alignItems={"center"}>
              <StaticImage
                alt="Take 2 capsules before bed"
                src="../../../images/how-to-new-1.png"
                width={200}
                style={{
                  width: 70,
                }}
              />

              <Text
                color="white"
                textTransform={"uppercase"}
                textAlign={"center"}
                fontSize={"xs"}
                fontWeight={"bold"}
              >
                Take 2 capsules before bed
              </Text>
            </Stack>

            <Stack p={3} backgroundColor="#99759d" borderRadius={"lg"} alignItems={"center"}>
              <StaticImage
                alt="Relax and enjoy steady weight loss"
                src="../../../images/how-to-new-2.png"
                width={200}
                style={{
                  width: 70,
                }}
              />

              <Text
                color="white"
                textTransform={"uppercase"}
                textAlign={"center"}
                fontSize={"xs"}
                fontWeight={"bold"}
              >
                Relax and enjoy steady weight loss
              </Text>
            </Stack>
          </Grid>
        </Stack>

        <Stack>
          <Selector mt={0} mb={0} />
        </Stack>

        <NextButton>Continue</NextButton>
      </Card>
    </Slide>
  );
}
