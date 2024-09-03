import { Flex, Heading, Text, Icon, Stack, Button, List, ListItem } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { Rating, Span } from "@components/components";
import { Link } from "gatsby";
import { ProductSelection } from "../ProductSelection";
import { useGlobalState } from "src/RootWrapper";

const TOTAL_NUMBER_OF_REVIEWS = 1247;

const usps = [
  {
    emoji: "🎁",
    text: "Lose weight",
  },
  {
    emoji: "🎁",
    text: "Control late-night cravings",
  },
  {
    emoji: "🎁",
    text: "Have deep full night sleep",
  },
  {
    emoji: "🎁",
    text: "Handle stress with ease",
  },
  {
    emoji: "🎁",
    text: "Wake up feeling energized",
  },
];

export function Content(props: { weightAvgMonthlyLoss: number; weightUnits: string }) {
  const { mainProductOneOffVariants } = useGlobalState();

  const bundle1 = mainProductOneOffVariants[0];
  const bundle2 = mainProductOneOffVariants[1];
  const bundle3 = mainProductOneOffVariants[2];

  return (
    <Stack
      spacing={0}
      gridArea="headline"
      alignItems={["center", "center", "start"]}
      flex={1}
      minWidth={300}
    >
      <Flex alignItems={"center"} gap={2}>
        <Text fontSize={"sm"}>4.7</Text>
        <Rating />
        <a href="#reviews">
          <Text fontSize={"sm"} decoration={"underline"}>
            {TOTAL_NUMBER_OF_REVIEWS} Reviews
          </Text>
        </a>
      </Flex>

      <Heading
        fontSize={["3xl", "4xl", "5xl"]}
        maxW={"container.sm"}
        textAlign={["center", "center", "left"]}
      >
        Lose an Average Of{" "}
        <Span color="pink.600" fontWeight={"bold"}>
          {Math.round(props.weightAvgMonthlyLoss * 3)}
          {props.weightUnits}
        </Span>{" "}
        In Only 90 Days*
      </Heading>

      <Text fontSize={"md"} textAlign={["center", "start"]}>
        Our <Span fontWeight={"bold"}> best-selling fat burn formula</Span> accelerates weight loss
        by synchronizing metabolism, improving sleep, and reducing stress for comprehensive,
        results-driven <Span fontWeight={"bold"}>weight management*</Span>
      </Text>

      <Text fontWeight={"bold"}>Take 2 pills a day to:</Text>

      <List>
        {usps.map((it, idx) => {
          return (
            <ListItem key={idx}>
              <Stack direction={"row"} alignItems={"center"}>
                <Text>{it.emoji}</Text>
                <Text>{it.text}</Text>
              </Stack>
            </ListItem>
          );
        })}
      </List>

      <Text fontWeight={"bold"}>Choose your bundle:</Text>

      {bundle1 && bundle2 && bundle3 && (
        <ProductSelection bundle1={bundle1} bundle2={bundle2} bundle3={bundle3} />
      )}

      <Stack width={["full", "unset"]} alignItems="center">
        <Link to="/sleep-and-burn/#product-selection">
          <Button
            size="lg"
            mx="auto"
            variant={"solid"}
            borderRadius={"full"}
            width={"100%"}
            py={7}
            px={10}
            colorScheme={"pink"}
            rightIcon={<Icon as={FaArrowRight} />}
          >
            Get Sleep & Burn
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
}
