import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { HeadFC, Link } from "gatsby";
import { SEO } from "@components/SEO";
import { createPageParams } from "./quiz";

export const Head: HeadFC = () => {
  return <SEO />;
};

export interface IWeightLossPageProps {}

export default function WeightLossPage(props: IWeightLossPageProps) {
  return (
    <Box>
      <Header />
      <Container>
        <Heading mb={8} mt={4}>
          I tried this secret ingredient was key to loosing weight that NOBODY
          talks about
        </Heading>
        <StaticImage
          src="../../images/weight-loss-lp-main.jpeg"
          alt="women using ashwagandha supplements"
        />

        <Flex direction={"column"} gap={4} my={10}>
          <Text textAlign={"center"}>
            Take a 1-min quiz to find out if this can work for you
          </Text>
          <Flex gap={3} width={"100%"}>
            <Button
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
              as={Link}
              flex={1}
              colorScheme="pink"
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
      <Footer />
    </Box>
  );
}
