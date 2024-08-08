import { Box, Flex, Heading, Text, SimpleGrid, Container, Stack, Grid } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { Span } from "@components/components";

export function IngredientsSection() {
  const ingredients = [
    {
      name: "Ashwagandha",
      image: (
        <StaticImage
          alt="ashwagandha root"
          src="../../images/ashwa1.jpeg"
          height={400}
          objectFit="contain"
        />
      ),
      mainValue: "🤺 Stress Warrior",
      description:
        "By lowering cortisol levels, Ashwagandha helps your body resist the physiological impacts of stress. It's not just about feeling relaxed - it's about empowering your body to thrive under pressure",
    },
    {
      name: "Rhodiola",
      mainValue: "🔋 Energy Amplifier",
      description:
        "Combats both mental and physical fatigue, helping you tap into reserves of energy you didn't know you had",
      image: (
        <StaticImage
          alt="Rhodiola rosea"
          src="../../images/rhodiola-rosea.jpg"
          height={400}
          objectFit="contain"
        />
      ),
    },
    {
      name: "Bacopa",
      mainValue: "🧠 Memory Maestro",
      description:
        "An herb that supports cognitive function, memory, and focus. It works synergistically with ashwagandha to enhance mental clarity",
      image: (
        <StaticImage
          alt="Bacopa monnieri"
          src="../../images/bacopa.jpg"
          height={400}
          objectFit="contain"
        />
      ),
    },
  ];

  return (
    <Container maxWidth={"container.lg"} my={16}>
      <Heading textAlign={"center"} my={10}>
        Meet The Fantastic <Span decoration={"underline"}>Formula</Span>
      </Heading>
      <Text textAlign={"center"} my={4} maxWidth={"xl"} mx="auto">
        This powerful trio of adaptogenic herbs works synergistically to create a comprehensive
        approach to{" "}
        <Span fontWeight={"bold"} decoration={"underline"}>
          stress management
        </Span>
        ,{" "}
        <Span fontWeight={"bold"} decoration={"underline"}>
          cognitive enhancement
        </Span>
        , and{" "}
        <Span fontWeight={"bold"} decoration={"underline"}>
          overall well-being
        </Span>
        , providing a natural solution to the demands of modern life.
      </Text>

      <Grid
        gridTemplateColumns={["auto", "auto", "40% 1fr"]}
        gridTemplateRows={["auto auto", "auto auto", "auto"]}
        alignItems={"center"}
        gap={6}
      >
        <Stack>
          <StaticImage
            alt="ashwagandha root"
            src="../../images/ingredients.jpg"
            objectFit="contain"
          />
        </Stack>

        <SimpleGrid
          columns={[1, 1, 2]}
          gap={3}
          alignItems={"stretch"}
          justifyContent={"center"}
          justifyItems={"stretch"}
        >
          {ingredients.map((fact, idx) => (
            <Flex
              key={idx}
              direction={"column"}
              alignItems={"center"}
              bg="white"
              p={4}
              borderRadius={"lg"}
              boxShadow={"lg"}
            >
              <Text fontWeight={"semibold"} fontSize={"sm"}>
                {fact.mainValue}
              </Text>
              <Text fontSize={"2xl"} fontWeight={"bold"} fontFamily={"heading"}>
                {fact.name}
              </Text>

              <Flex maxH={70}>{fact.image}</Flex>

              <Box textAlign={"start"}>
                <Text mt={2} mb={2} fontWeight={"bold"} fontSize={"sm"}>
                  How does it work?
                </Text>
                <Text fontSize={"sm"}>{fact.description}</Text>
              </Box>
            </Flex>
          ))}
        </SimpleGrid>
      </Grid>
    </Container>
  );
}
