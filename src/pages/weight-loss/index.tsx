import { Box, Button, Container, Flex, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { HeadFC, Link } from "gatsby";
import { SEO } from "@components/SEO";
import { createPageParams } from "./quiz";
import { CheckIcon } from "@chakra-ui/icons";
import { ComponentProps } from "react";

export const Head: HeadFC = () => {
  return <SEO />;
};

export interface IWeightLossPageProps {}

export default function WeightLossPage(props: IWeightLossPageProps) {
  return (
    <Box bg="shade.50">
      <Header />

      <Container my={4}>
        <Stack spacing={4}>
          <Heading fontSize={"3xl"} textAlign={"center"} fontWeight={"semibold"}>
            Weight Keeps Coming Back?
          </Heading>

          <Box bg="yellow.200" p={2} borderRadius={32}>
            <StaticImage
              src="../../images/landing-hero-img.jpg"
              alt="women using ashwagandha supplements"
              style={{
                borderRadius: 24,
              }}
            />
          </Box>

          <Stack alignItems={"center"}>
            <Text fontWeight={"semibold"}>Take a 1-min quiz to find the reason why</Text>
          </Stack>

          <Flex direction={"column"} gap={4}>
            <Flex gap={3} width={"100%"} px={4}>
              <Button
                borderRadius={"full"}
                as={Link}
                size={"lg"}
                flex={1}
                colorScheme="teal"
                to={`quiz?${createPageParams({
                  resetState: true,
                  gender: "male",
                }).toString()}`}
              >
                Male
              </Button>

              <Button
                borderRadius={"full"}
                as={Link}
                flex={1}
                size={"lg"}
                colorScheme="primary"
                to={`quiz?${createPageParams({
                  resetState: true,
                  gender: "female",
                }).toString()}`}
              >
                Female
              </Button>
            </Flex>
          </Flex>

          <Stack spacing={2} alignItems={"center"} my={6}>
            <ListItem text={"Find the reason of your weight troubles"} />
            <ListItem text={"Reduce stress and lose weight"} />
            <ListItem text={"Eliminate sugar cravings"} />
            <ListItem text={"Improve digestion"} />
          </Stack>

          <Stack mb={6} backgroundColor={"white"} p={7} borderRadius={"lg"}>
            <Text textAlign={"center"} fontWeight={"semibold"} fontSize={"sm"} color="gray.700">
              Benefits of our ingredients are covered in:
            </Text>

            <Flex
              wrap={"wrap"}
              gap={[6, 10]}
              justifyContent={"center"}
              alignItems={"center"}
              mt={4}
            >
              <StaticImage
                style={{ flexShrink: 0 }}
                height={28}
                src="../../images/media1.png"
                alt="media logo"
              />

              <StaticImage
                style={{ flexShrink: 0 }}
                height={28}
                src="../../images/media2.png"
                alt="media logo"
              />

              <StaticImage
                style={{ flexShrink: 0 }}
                height={46}
                src="../../images/media3.png"
                alt="media logo"
              />

              <StaticImage
                style={{ flexShrink: 0 }}
                height={52}
                src="../../images/media4.png"
                alt="media logo"
              />
            </Flex>
          </Stack>
        </Stack>
      </Container>

      <Footer />
    </Box>
  );
}

function ListItem({ text, ...rest }: { text: string } & ComponentProps<typeof Flex>) {
  return (
    <Flex gap={2} alignItems={"center"} {...rest}>
      <Icon as={CheckIcon} color="green" />
      <Text fontSize={"sm"} fontWeight={"semibold"}>
        {text}
      </Text>
    </Flex>
  );
}
