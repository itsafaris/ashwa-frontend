import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  Container,
  GridItem,
  Stack,
  Grid,
} from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { FaCheck, FaTimes } from "react-icons/fa";
import { CTAButton } from "../components";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";

const comparisonData = [
  {
    your_product: "Drift off to sleep effortlessly",
    competitors: "Struggle to fall asleep",
  },
  {
    your_product: "Deep, blissful full night sleep",
    competitors: "Tossing and turning all night",
  },
  {
    your_product: "Control late-night cravings easily",
    competitors: "Tempted by late-night snacks",
  },
  {
    your_product: "Handles stress with ease",
    competitors: "Overwhelmed by daily stress",
  },
  {
    your_product: "Wake up feeling energized",
    competitors: "Zombie mode until noon",
  },
  {
    your_product: "Supercharged and thriving",
    competitors: "Running on empty",
  },
];

export function HowItWorksSection() {
  const ours = comparisonData.map((it) => it.your_product);
  const theirs = comparisonData.map((it) => it.competitors);

  return (
    <Box py={16} backgroundColor={"#f3eef2"}>
      <Container maxW={"container.lg"}>
        <Box display={["none", "none", "block"]} mb={14} maxW={"container.md"} mx="auto">
          <Header />
        </Box>

        <Grid gap={8} templateColumns={["1fr", "1fr", "repeat(3, 1fr)"]} alignItems={"center"}>
          <GridItem alignItems={"center"} mx="auto">
            <StaticImage
              src="../../images/how-it-works.jpg"
              alt="how it works"
              style={{ borderRadius: 16, maxWidth: "400px" }}
            />
          </GridItem>

          <GridItem display={["block", "block", "none"]} mb={10}>
            <Header />
          </GridItem>

          <GridItem>
            <Stack p={3} borderRadius={"lg"}>
              <Text color="black" fontWeight={"semibold"} fontSize={"lg"} px={3}>
                Life before you start using Calmr
              </Text>

              <Flex direction={"column"} gap={"1px"} bg="gray.300">
                {theirs.map((it, idx) => (
                  <Flex
                    key={it}
                    py={3}
                    px={3}
                    backgroundColor="primary.100"
                    alignItems={"center"}
                    gap={2}
                  >
                    <Icon as={FaTimes} color="red.400" />
                    <Text fontWeight={"semibold"} fontSize={"sm"}>
                      {it}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            </Stack>
          </GridItem>

          <GridItem>
            <Stack backgroundColor="secondary.200" p={3} borderRadius={"lg"}>
              <Text color="black" fontWeight={"semibold"} fontSize={"lg"} px={3}>
                Life after you start using Calmr
              </Text>

              <Flex direction={"column"} gap={"1px"} bg="secondary.300">
                {ours.map((it) => (
                  <Flex
                    key={it}
                    py={3}
                    px={3}
                    bg="secondary.200"
                    alignItems={"center"}
                    color="black"
                    gap={2}
                  >
                    <Icon as={FaCheck} color={"green"} />
                    <Text fontWeight={"semibold"} fontSize={"sm"}>
                      {it}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            </Stack>
          </GridItem>
        </Grid>

        <Stack mt={12}>
          <CTAButton />
        </Stack>
      </Container>
    </Box>
  );
}

function Header() {
  return (
    <Stack>
      <Heading mb={10} textAlign={"center"}>
        How it works
      </Heading>

      <Grid
        gridTemplateColumns={["1fr", "1fr auto 1fr auto 1fr"]}
        gap={[8, 3]}
        alignItems={"center"}
      >
        <Stack alignItems={"center"} spacing={2}>
          <StaticImage alt="" src="../../images/how-to-1.png" height={80} layout="fixed" />

          <Text
            fontWeight={"bold"}
            color="primary.800"
            textAlign={"center"}
            lineHeight={1.3}
            fontSize={"lg"}
          >
            Take 2 pills <br /> before bed
          </Text>
        </Stack>

        <Icon display={["none", "block"]} as={FaArrowRight} mx={"auto"} color="primary.800" />
        <Icon display={["block", "none"]} as={FaArrowDown} mx={"auto"} color="primary.800" />

        <Stack alignItems={"center"} spacing={2}>
          <StaticImage alt="" src="../../images/how-to-2.png" height={80} layout="fixed" />

          <Text
            fontWeight={"bold"}
            color="primary.800"
            textAlign={"center"}
            lineHeight={1.3}
            fontSize={"lg"}
          >
            Enjoy your <br /> deep night sleep
          </Text>
        </Stack>

        <Icon display={["none", "block"]} as={FaArrowRight} mx={"auto"} color="primary.800" />
        <Icon display={["block", "none"]} as={FaArrowDown} mx={"auto"} color="primary.800" />

        <Stack alignItems={"center"} spacing={2}>
          <StaticImage alt="" src="../../images/how-to-3.png" height={80} layout="fixed" />

          <Text
            fontWeight={"bold"}
            color="primary.800"
            textAlign={"center"}
            lineHeight={1.3}
            fontSize={"lg"}
          >
            Greet your morning
            <br /> weighting less
          </Text>
        </Stack>
      </Grid>
    </Stack>
  );
}
