import { Box, Grid, Icon, Stack, Text } from "@chakra-ui/react";
import { Selector, Slide } from "@lib/quiz-lib";
import { StaticImage } from "gatsby-plugin-image";
import { Card, Heading, NextButton, Subtitle, SummaryCard } from "./components";

export function HowItWorksSlide() {
  return (
    <Slide id="how-it-works" type="filler" containerProps={{ px: 3, py: 1, maxW: "600px" }}>
      <Card>
        <Heading>Wondering how quickly you can notice a difference?</Heading>

        <Subtitle>
          Our carefully curated, science-backed formula starts working from day one, helping you to
          rebalance your cortisol and reach optimal weight.
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
            title="Relaxation Begins to Set"
            number={1}
            text="The blend of calming herbs start to take effect. You start feeling a sense of relaxation as your body prepares for sleep."
          />
          <StepItem
            title="Sleep Quality Improves"
            number={2}
            text="Melatonin and other sleep-supporting ingredients help you fall asleep faster and stay asleep longer. This leads to more restful and restorative sleep throughout the night."
          />
          <StepItem
            title="Nighttime Metabolism Gets Support"
            number={3}
            text="While you sleep, Calmr supports your metabolic processes. This aids in the body's natural fat-burning processes during rest."
          />
          <StepItem
            title="Morning Brings Renewed Energy"
            showStick={false}
            number={4}
            text="After a night of quality sleep, you feel more refreshed and energized. This renewed energy supports better food choices and increased motivation for physical activity during the day."
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

        <Text pb={8} pt={2}>
          {text}
        </Text>
      </Stack>
    </Stack>
  );
}
