import { Box, Button, Container, Flex, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { HeadFC, Link } from "gatsby";
import { SEO } from "@components/SEO";
import { createPageParams } from "./quiz";
import { CheckIcon } from "@chakra-ui/icons";
import { ComponentProps } from "react";
import { FaArrowRight } from "react-icons/fa6";

export const Head: HeadFC = () => {
  return <SEO />;
};

export interface IWeightLossPageProps {}

export default function WeightLossPage(props: IWeightLossPageProps) {
  return (
    <Box bg="primary.100">
      <Header />

      <Container my={4} py={6}>
        <Stack spacing={4}>
          <Heading fontSize={"3xl"} textAlign={"center"} fontWeight={"semibold"}>
            Is the high cortisol level the main cause of your weight gain?
          </Heading>

          <Stack mt={4} mb={6}>
            <CTA />
          </Stack>

          <Stack bg="primary.300" p={4} borderRadius={20}>
            <Text
              fontStyle={"italic"}
              fontWeight={"bold"}
              fontSize={"xl"}
              textAlign={"center"}
              color={"gray.900"}
              pb={4}
              pt={2}
            >
              "Hey, I'm Olivia, and I've been using Calmr for 5 months!"
            </Text>

            <StaticImage
              src="../../images/customer-before-after-1.jpg"
              alt="women using ashwagandha supplements"
              style={{
                borderRadius: 10,
              }}
            />

            <Stack spacing={4} pt={3} fontSize={"md"} color="gray.900" fontStyle={"italic"}>
              <Text>
                Stress was a big part of my life, and no matter what I did, my cortisol levels
                stayed high. I started using Calmr about five months ago, and slowly, my stress
                began to ease.
              </Text>

              <Text>
                More surprisingly,{" "}
                <Text as="span" fontWeight={"bold"} textDecor={"underline"} color={"gray.900"}>
                  I've lost 22 pounds without any major diet changes
                </Text>{" "}
                and feel lighter, both physically and mentally. My stomach issues have also eased
                up, making daily activities more comfortable.
              </Text>

              <Text>
                Although I'm still on this journey, I'm curious to see what the final results will
                be.
              </Text>
            </Stack>
          </Stack>

          <Stack mt={4} mb={6}>
            <CTA text="Take a 1-min quiz to get our recommendations" />
          </Stack>

          <Stack spacing={3}>
            <Text
              mx="auto"
              maxW={"200px"}
              textAlign={"center"}
              fontWeight={"semibold"}
              fontSize={"sm"}
              color="gray.700"
            >
              Benefits of Calmr ingredients are covered in:
            </Text>

            <Stack mb={6} backgroundColor={"white"} p={7} borderRadius={"lg"}>
              <Flex wrap={"wrap"} gap={[6, 10]} justifyContent={"center"} alignItems={"center"}>
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

function CTA({ text = "Take a 1-min quiz to find out" }: { text?: string }) {
  return (
    <Stack alignItems={"center"} spacing={4}>
      <Text textAlign={"center"} fontWeight={"semibold"}>
        {text}
      </Text>

      <Flex gap={2} width={"100%"}>
        <Button
          borderRadius={"full"}
          as={Link}
          size={"lg"}
          py={7}
          flex={1}
          colorScheme="teal"
          to={`quiz?${createPageParams({
            resetState: true,
            gender: "male",
          }).toString()}`}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Text lineHeight={1}>Male</Text>
            <Icon as={FaArrowRight} />
          </Stack>
        </Button>

        <Button
          borderRadius={"full"}
          as={Link}
          flex={1}
          size={"lg"}
          py={7}
          colorScheme="pink"
          to={`quiz?${createPageParams({
            resetState: true,
            gender: "female",
          }).toString()}`}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Text lineHeight={1}>Female</Text>
            <Icon as={FaArrowRight} />
          </Stack>
        </Button>
      </Flex>
    </Stack>
  );
}
