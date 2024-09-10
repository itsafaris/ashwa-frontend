import { Box, Flex, Heading, Text, Icon, Container, GridItem, Stack, Grid } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { FaCheck, FaTimes } from "react-icons/fa";

const comparisonData = [
  {
    your_product: "More nutrients per serving",
    competitors: "Fewer nutrients per serving",
  },
  {
    your_product: "±90% absorption efficiency",
    competitors: "7%-12% absorption efficiency",
  },
  {
    your_product: "With ingredients that enhance benefits",
    competitors: "Only a few ingredients",
  },
  {
    your_product: "No side effects",
    competitors: "Side effects like jitteriness and potential heart health risks",
  },
  {
    your_product: "Great short-term and long-term results",
    competitors: "Unsustainable long-term results",
  },
];

export function ComparisonSection() {
  const ours = comparisonData.map((it) => it.your_product);
  const theirs = comparisonData.map((it) => it.competitors);

  return (
    <Box bg="white" pt={16} pb={10}>
      <Container maxW={"container.lg"}>
        <Grid gap={6} templateColumns={["1fr", "1fr", "1fr 2fr"]} alignItems={"center"}>
          <Stack height={"full"} alignItems={"center"} mx="auto">
            <Heading textAlign={["center", "center", "left"]} mb={4}>
              Most Supplements Waste Your Money.
            </Heading>

            <Text mb={8} textAlign={["center", "center", "left"]}>
              Experience the difference with our best selling formula that outperforms the
              competition, delivering real results you can feel and trust, both now and in the long
              run.
            </Text>
          </Stack>

          <Grid templateColumns={["1fr", "1fr 1fr", "1fr 1fr"]} alignItems={"center"}>
            <Stack height={"full"} backgroundColor="green.100" p={3} position={"relative"}>
              <Box position={"absolute"} right={"5%"} top={0} transform={"translateY(-50%)"}>
                <StaticImage
                  src="../../images/product-6.png"
                  alt="Sleep & Burn 6 bottle bundle"
                  style={{ borderRadius: 16 }}
                  width={80}
                />
              </Box>

              <Text color="black" fontWeight={"bold"} fontSize={"xl"} px={3} pt={5}>
                Sleep & Burn
              </Text>

              <Flex direction={"column"} gap={"1px"}>
                {ours.map((it) => (
                  <Flex key={it} py={2} px={3} alignItems={"center"} color="black" gap={2}>
                    <Icon as={FaCheck} color={"green"} boxSize={4} />
                    <Text fontSize={"md"}>{it}</Text>
                  </Flex>
                ))}
              </Flex>
            </Stack>

            <Stack height={"full"} backgroundColor="red.100" p={3}>
              <Text color="black" fontSize={"xl"} px={3} pt={5}>
                Other Supplements
              </Text>

              <Flex direction={"column"} gap={"1px"}>
                {theirs.map((it, idx) => (
                  <Flex key={idx} py={2} px={3} alignItems={"center"} gap={2}>
                    <Icon as={FaTimes} color="red.400" boxSize={6} />
                    <Text fontSize={"md"}>{it}</Text>
                  </Flex>
                ))}
              </Flex>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
