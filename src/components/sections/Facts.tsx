import { Box, Flex, Heading, Text, SimpleGrid, Container } from "@chakra-ui/react";
import { Span } from "@components/components";
import { StaticImage } from "gatsby-plugin-image";

export function FactsFromCustomersSection() {
  const facts = [
    {
      number: "92%",
      fact: "Feel more balanced and less stressed within just 3 weeks of daily use",
    },
    {
      number: "37 min",
      fact: "Less time to fall asleep",
    },
    {
      number: "30%",
      fact: "Drop in cortisol levels lead to a natual weight loss",
    },
  ];
  return (
    <Box py={16} bg="#d8d1c3">
      <Container maxWidth={"container.lg"}>
        <Heading textAlign={"center"}>
          Here's what we know - <br />
          <Span textDecoration={"underline"}>for a fact</Span>
        </Heading>
        <Text textAlign={"center"} my={4}>
          Based on our <Span textDecoration={"underline"}>customer survey study</Span> , who've used
          our product for more than 3 weeks
        </Text>

        <StaticImage src="../../images/facts-image.jpg" alt="" width={400} />

        <SimpleGrid
          columns={[1, 1, 3]}
          alignItems={"start"}
          justifyContent={"center"}
          justifyItems={"center"}
        >
          {facts.map((fact, idx) => (
            <Flex key={idx} direction={"column"} alignItems={"center"} maxW={"260px"}>
              <Text fontSize={"6xl"} fontWeight={"bold"} fontFamily={"heading"}>
                {fact.number}
              </Text>
              <Text textAlign={"center"} fontSize={"sm"} fontWeight={"semibold"}>
                {fact.fact}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
