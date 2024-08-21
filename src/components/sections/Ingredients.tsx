import { Box, Flex, Heading, Text, SimpleGrid, Container, Stack, Grid } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { Span } from "../components";

export function IngredientsSection() {
  const ingredients = [
    {
      name: "Ashwagandha",
      image: (
        <StaticImage
          alt="Ashwagandha"
          src="../../images/ingr-ashwa.jpg"
          layout="fixed"
          height={70}
        />
      ),
      mainValue: "🤺 Stress Warrior",
      description:
        "By lowering cortisol levels, Ashwagandha helps your body resist the physiological impacts of stress. It's not just about feeling relaxed - it's about empowering your body to thrive under pressure",
    },
    {
      name: "Green Coffee Bean Extract",
      mainValue: "🌟 Metabolism Motivator",
      description:
        "This extract is known for its weight loss properties, boosts metabolism and reduces the absorption of carbohydrates.",
      image: (
        <StaticImage
          alt="Green Coffee Bean Extract"
          src="../../images/ingr-green-bean.jpg"
          layout="fixed"
          height={70}
        />
      ),
    },
    {
      name: "Melatonin",
      mainValue: "🌙 Sleep Guardian",
      description:
        "Melatonin is a hormone that regulates the sleep-wake cycle and helps to promote restful sleep",
    },
    {
      name: "L-Carnitine Tartrate",
      mainValue: "🔥 Fat Fighter",
      description:
        "L-Carnitine plays a role in the metabolism of fat by transporting fatty acids into the mitochondria, where they can be used for energy, thus aiding in weight loss.",
    },
  ];

  return (
    <Container maxWidth={"container.lg"} my={16}>
      <Heading textAlign={"center"} my={10}>
        Meet The Fantastic{" "}
        <Span decoration={"underline"} color="primary.600">
          Formula
        </Span>
      </Heading>

      <Grid
        gridTemplateColumns={["auto", "auto", "40% 1fr"]}
        gridTemplateRows={["auto auto", "auto auto", "auto"]}
        alignItems={"center"}
        gap={6}
      >
        <Stack alignItems={"center"}>
          <StaticImage
            alt=""
            src="../../images/ingredients.jpg"
            objectFit="contain"
            style={{ maxWidth: "400px" }}
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
              bg="white"
              p={4}
              borderRadius={"lg"}
              boxShadow={"lg"}
              border="1px solid"
              borderColor={"bg.100"}
            >
              <Flex maxH={70} mb={5}>
                {fact.image}
              </Flex>

              <Text fontWeight={"semibold"} fontSize={"sm"}>
                {fact.mainValue}
              </Text>

              <Text fontSize={"2xl"} fontWeight={"bold"} fontFamily={"heading"} lineHeight={1.3}>
                {fact.name}
              </Text>

              <Box textAlign={"start"}>
                <Text mt={2} mb={2} fontWeight={"bold"} fontSize={"sm"} color={"primary.700"}>
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
