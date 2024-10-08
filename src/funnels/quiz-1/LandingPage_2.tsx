import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  StackProps,
  Text,
} from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { Footer } from "@components/Footer";

import { Link } from "gatsby";
import { createPageParams } from "./QuizPage";
import { FaArrowRight } from "react-icons/fa6";
import { Logo } from "@components/logo";
import { FaCheck } from "react-icons/fa";
import { IoMdFemale } from "react-icons/io";
import { IoMdMale } from "react-icons/io";
import { MediaSection } from "./components/MediaSection";

const outcomes = ["Lose weight", "Boost metabolism", "Reduce stress", "Improve sleep quality"];

export function LandingPage_2() {
  return (
    <Box>
      <Box backgroundColor="#38283f" position={"relative"}>
        <Stack
          position={"absolute"}
          zIndex={1}
          backgroundColor={"#00000025"}
          top={0}
          left={0}
          width={"100%"}
          height={"100%"}
          justifyContent={"space-between"}
        >
          <Box height={"50%"} width={"100%"} bgGradient={"linear(to-b, #000000bf, transparent)"} />
          <Box height={"50%"} width={"100%"} bgGradient={"linear(to-b, transparent, #38283f)"} />
        </Stack>

        <Container px={0} maxW={["unset"]}>
          <Box px={4} pt={6} pb={8} position={"relative"}>
            <StaticImage
              alt=""
              src="../../images/lp-hero-image-lg.jpg"
              style={{ position: "absolute", top: 0, left: 0, height: "100%", width: "100%" }}
              width={1000}
            />

            <Stack zIndex={1} position={"relative"} width={"100%"} height={"100%"} spacing={0}>
              <Logo height={"50px"} fill="white" />

              <Stack mx="auto">
                <Heading
                  lineHeight={1.2}
                  fontSize={["3xl", "4xl", "5xl"]}
                  textAlign={"center"}
                  fontWeight={"bold"}
                  color="white"
                  mt={10}
                >
                  Trouble Losing Weight?
                  <br />
                  Find The Reason Why
                </Heading>

                <Stack mt={14} alignItems={"left"} spacing={1}>
                  {outcomes.map((it, idx) => {
                    return (
                      <Stack
                        key={idx}
                        direction={"row"}
                        alignItems={"center"}
                        gap={3}
                        backgroundColor={"#212121c7"}
                        mr="auto"
                        px={2}
                        py={1}
                        color={"white"}
                        fontWeight={"semibold"}
                        fontSize={["md", "lg"]}
                        borderRadius={"5px"}
                      >
                        <Icon as={FaCheck} color={"green.300"} />
                        <Text>{it}</Text>
                      </Stack>
                    );
                  })}
                </Stack>
              </Stack>

              <Text
                mt={14}
                textAlign={"center"}
                fontWeight={"bold"}
                fontSize={"xl"}
                color="white"
                fontFamily={"serif"}
              >
                Select your gender
              </Text>

              <CTA mt={3} />
            </Stack>
          </Box>
        </Container>
      </Box>

      <Box position={"relative"}>
        <Box
          position={"absolute"}
          zIndex={0}
          backgroundColor={"#38283f"}
          top={0}
          left={0}
          width={"100%"}
          height={"50%"}
        />

        <Container px={0} backgroundColor="white">
          <Stack
            p={4}
            pt={6}
            pb={10}
            borderRadius={"xl"}
            backgroundColor={"white"}
            boxShadow={"2xl"}
            spacing={6}
            mx={4}
            zIndex={1}
            position={"relative"}
          >
            <MediaSection />
          </Stack>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

function CTA(props: StackProps) {
  return (
    <Stack maxW={"container.sm"} mx="auto" {...props}>
      <Flex gap={2} width={"100%"}>
        <Button
          borderRadius={"full"}
          as={Link}
          size={"lg"}
          py={7}
          flex={1}
          color={"white"}
          backgroundColor={"#20BF8E"}
          _hover={{
            backgroundColor: "#168f6a",
          }}
          _focus={{
            backgroundColor: "#20BF8E",
          }}
          to={`quiz?${createPageParams({
            resetState: true,
            gender: "male",
          }).toString()}`}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Icon as={IoMdMale} />
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
          to={`quiz?${createPageParams({
            resetState: true,
            gender: "female",
          }).toString()}`}
          color={"white"}
          backgroundColor={"#C88AB8"}
          _hover={{
            backgroundColor: "#a16a93",
          }}
          _focus={{
            backgroundColor: "#C88AB8",
          }}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Icon as={IoMdFemale} />
            <Text lineHeight={1}>Female</Text>
            <Icon as={FaArrowRight} />
          </Stack>
        </Button>
      </Flex>

      <Stack spacing={0}>
        <Stack spacing={0} direction={"row"} alignItems={"center"} justifyContent={"space-around"}>
          <Box
            width={0}
            height={0}
            borderLeft={"10px solid transparent"}
            borderRight={"10px solid transparent"}
            borderBottom={"10px solid #b44e9a"}
          />
          <Box
            width={0}
            height={0}
            borderLeft={"10px solid transparent"}
            borderRight={"10px solid transparent"}
            borderBottom={"10px solid #b44e9a"}
          />
        </Stack>

        <Stack py={2} px={2} backgroundColor={"#b44e9a"} borderRadius={"5px"}>
          <Text color="white" textAlign={"center"} fontWeight={"semibold"} fontSize={"sm"}>
            <Text fontWeight={"black"} as="span">
              FALL SALE
            </Text>{" "}
            Save up to{" "}
            <Text fontWeight={"black"} as="span">
              50%
            </Text>
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
}
