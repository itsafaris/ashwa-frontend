import { Box, Grid, Icon, Stack, Text } from "@chakra-ui/react";
import { Selector, Slide } from "@lib/quiz-lib";
import { StaticImage } from "gatsby-plugin-image";
import { Card, Heading, NextButton, Subtitle, SummaryCard } from "./components";

export function HowItWorksSlide() {
  return (
    <Slide id="how-it-works" type="filler" containerProps={{ px: 3, py: 1 }}>
      <Card>
        <Heading>Wondering how quickly you can notice a difference?</Heading>

        <Subtitle>
          By incorporating Calmr into your routine you're setting the stage for a healthier life and
          a more successful weight loss outcome.
        </Subtitle>

        <Stack>
          <Stack backgroundColor="#6d4171" borderRadius={"lg"} overflow={"hidden"}>
            <StaticImage
              alt="Supplement facts label"
              src="../../../images/supplement-facts-label.jpg"
              width={1000}
            />
          </Stack>

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

        <Stack spacing={0}>
          <StepItem
            title=""
            number={1}
            text="Facilitates weight loss and curbs nocturnal appetite, promoting a balanced approach to nutrition and body composition"
          />
          <StepItem
            title=""
            number={2}
            text="Enhances sleep quality and duration, allowing for restorative rest and improved overall nocturnal experiences"
          />
          <StepItem
            title=""
            number={3}
            text="Boosts stress resilience and emotional equilibrium, enabling more effective management of daily pressures and challenges"
          />
          <StepItem
            title=""
            showStick={false}
            number={4}
            text="Uses delayed-release capsule to ensure all ingredients pass through the digestive tract intact"
          />
        </Stack>

        <StaticImage
          alt=""
          src="../../../images/free-from-label.jpg"
          width={600}
          style={{ maxWidth: "70%", marginLeft: "auto", marginRight: "auto" }}
        />

        <Stack>
          <Selector mt={0} mb={0} />
        </Stack>

        <NextButton>Continue</NextButton>
      </Card>
    </Slide>
  );
}

function StepItem({
  title,
  text,
  number,
  showStick = true,
}: {
  title: string;
  text: string;
  number: number;
  showStick?: boolean;
}) {
  return (
    <Stack direction={"row"} alignItems={"center"} spacing={3}>
      <Stack spacing={0} height={"100%"} alignItems={"center"}>
        <Box
          width={"15px"}
          height={"15px"}
          borderRadius={"full"}
          backgroundColor={"white"}
          border="2px solid"
          borderColor={"brand.700"}
          flexShrink={0}
        />
        {showStick && <Box height={"100%"} width={"2px"} backgroundColor={"brand.700"} />}
      </Stack>

      <Stack spacing={0} mt={-1}>
        <Text fontWeight={"bold"} color={"brand.700"}>
          {number} - {title}
        </Text>

        <Text pb={4} pt={2}>
          {text}
        </Text>
      </Stack>
    </Stack>
  );
}
