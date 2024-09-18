import { Box, Icon, Stack, Text } from "@chakra-ui/react";
import { Selector, Slide } from "@lib/quiz-lib";
import { StaticImage } from "gatsby-plugin-image";
import { Card, Heading, NextButton, Subtitle, SummaryCard } from "./components";
import { ImCheckmark } from "react-icons/im";

export function HowItWorksSlide() {
  return (
    <Slide id="how-it-works" type="filler" containerProps={{ px: 3, py: 1 }}>
      <Card>
        <Heading>Wondering how quickly you can notice a difference?</Heading>

        <Subtitle>
          By incorporating Calmr into your routine you're setting the stage for a healthier life and
          a more successful weight loss outcome.
        </Subtitle>

        <Stack backgroundColor="#6d4171" borderRadius={"lg"} overflow={"hidden"}>
          <StaticImage
            alt="Supplement facts label"
            src="../../../images/supplement-facts-label.jpg"
            width={1000}
          />
        </Stack>

        <Stack spacing={3}>
          <ListItem text="Facilitates weight loss and curbs nocturnal appetite, promoting a balanced approach to nutrition and body composition" />
          <ListItem text="Enhances sleep quality and duration, allowing for restorative rest and improved overall nocturnal experiences" />
          <ListItem text="Boosts stress resilience and emotional equilibrium, enabling more effective management of daily pressures and challenges" />
          <ListItem text="Contains specific ingredients, not generic blends, each precisely tackling specific symptoms" />
          <ListItem text="Uses delayed-release capsule to ensure all ingredients pass through the digestive tract intact" />
        </Stack>

        <Stack>
          <Selector mt={0} mb={0} />
        </Stack>

        <NextButton>Continue</NextButton>
      </Card>
    </Slide>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <Stack
      borderRadius={"md"}
      px={3}
      py={3}
      backgroundColor={"#ead7ec"}
      direction={"row"}
      alignItems={"center"}
      spacing={3}
    >
      <Icon as={ImCheckmark} color={"#7e5b80"} />

      <Text fontSize={"sm"} fontWeight={"semibold"} color={"#482d49"}>
        {text}
      </Text>
    </Stack>
  );
}
