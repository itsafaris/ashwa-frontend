import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
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
      <Container>
        <Heading mb={4} mt={4} fontSize={"2xl"} textAlign={"center"}>
          Weight keeps coming back?
          <br />
          Find the reason why
        </Heading>

        <Box bg="yellow.200" p={2} borderRadius={32}>
          <StaticImage
            src="../../images/weight-loss-lp-2.png"
            alt="women using ashwagandha supplements"
            style={{
              borderRadius: 24,
            }}
          />

          <Stack spacing={2} my={4} alignItems={"center"}>
            <ListItem text={"Boost metabolism"} />
            <ListItem text={"Reduce stress"} />
            <ListItem text={"Eliminate sugar cravings"} />
            <ListItem text={"Improve digestion"} />
          </Stack>
        </Box>

        <Flex direction={"column"} gap={4} mt={4} mb={6}>
          <Text fontWeight={"semibold"} fontSize={"sm"} textAlign={"center"}>
            Take a 1-min quiz to find out
          </Text>
          <Flex gap={3} width={"100%"} px={4}>
            <Button
              borderRadius={"full"}
              as={Link}
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
      </Container>

      <Box px={4}>
        <Container
          maxWidth={"container.lg"}
          py={6}
          bg="white"
          borderRadius={"lg"}
          mb={8}
          mx="auto"
        >
          <Text
            textAlign={"center"}
            fontWeight={"semibold"}
            fontSize={"sm"}
            color="text.300"
          >
            Ashwagandha benefits are covered in:
          </Text>
          <Flex
            wrap={"wrap"}
            gap={[6, 12]}
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
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

function ListItem({
  text,
  ...rest
}: { text: string } & ComponentProps<typeof Flex>) {
  return (
    <Flex gap={2} alignItems={"center"} {...rest}>
      <Icon as={CheckIcon} color="green" />
      <Text fontSize={"sm"} fontWeight={"semibold"}>
        {text}
      </Text>
    </Flex>
  );
}
