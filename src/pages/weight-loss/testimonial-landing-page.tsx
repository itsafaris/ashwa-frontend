import { Box, Button, Container, Flex, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { HeadFC, Link } from "gatsby";
import { SEO } from "@components/SEO";
import { createPageParams } from "./quiz";
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
          <Heading
            lineHeight={1.2}
            fontSize={"3xl"}
            textAlign={"center"}
            fontWeight={"bold"}
            color="primary.800"
          >
            Combat Stress and{" "}
            <Text as="span" textDecoration={"underline"}>
              Shed Pounds
            </Text>{" "}
            with Our All-in-One Solution
          </Heading>

          <Stack mt={3} mb={6} alignItems={"center"} spacing={4}>
            <Text
              textAlign={"center"}
              fontWeight={"semibold"}
              fontSize={"md"}
              maxW={"200px"}
              mb={3}
              color="primary.800"
            >
              Take a 1-min quiz to see if Calmr can help you!
            </Text>

            <CTA />
          </Stack>

          <Stack p={4} backgroundColor={"white"} boxShadow={"lg"}>
            <Stack pt={1} pb={2}>
              <Text fontWeight={"semibold"} fontSize={"xl"} color={"gray.900"} lineHeight={1.3}>
                Hey, I'm Jessica, and I've been using Calmr for 5 months!
              </Text>
              <Text fontSize={10} color="gray.600" mb={3}>
                17 July, 2024 | 1 MIN READ
              </Text>

              <Text fontSize={"sm"} color="gray.700">
                Stress was a big part of my life, and no matter what I did, my cortisol levels
                stayed high.
              </Text>
            </Stack>

            <StaticImage
              src="../../images/customer-before-after-1.jpg"
              alt="women using ashwagandha supplements"
            />

            <Stack spacing={4} pt={2} fontSize={"sm"} color="gray.700">
              <Text>
                I started using Calmr about five months ago, and slowly, my stress began to ease.
              </Text>

              <Text>
                More surprisingly,{" "}
                <Text
                  backgroundColor={"primary.200"}
                  as="span"
                  fontWeight={"bold"}
                  textDecor={"underline"}
                  color={"gray.900"}
                >
                  I've lost 29 pounds without any major diet changes
                </Text>{" "}
                and feel lighter, both physically and mentally. My stomach issues have also eased
                up, making daily activities more comfortable.
              </Text>

              <Text>
                Although I'm still on this journey, I'm curious to see what the final results will
                be.
              </Text>
            </Stack>

            <Stack spacing={10} mt={12}>
              <Text
                mx="auto"
                maxW={"200px"}
                textAlign={"center"}
                fontWeight={"bold"}
                fontSize={"sm"}
                color="gray.900"
              >
                Benefits of Calmr ingredients are covered in
              </Text>

              <Stack pb={4}>
                <Flex
                  wrap={"wrap"}
                  gap={[6, 10]}
                  justifyContent={"center"}
                  alignItems={"center"}
                  opacity={0.4}
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
          </Stack>

          <Stack mt={8} mb={8} alignItems={"center"} spacing={4}>
            <Heading
              lineHeight={1.3}
              fontSize={"2xl"}
              textAlign={"center"}
              fontWeight={"bold"}
              color="primary.800"
            >
              Take a 1-min quiz to see if <br /> Calmr can help you!
            </Heading>

            <CTA />
          </Stack>
        </Stack>
      </Container>

      <Footer />
    </Box>
  );
}

function CTA() {
  return (
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
  );
}
