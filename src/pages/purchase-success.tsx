import { Box, Container, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { Span } from "@components/components";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { PageProps } from "gatsby";
import * as React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { siteConfig } from "src/conf";
import { getProduct } from "src/products";

export interface IPurchaseSuccessPageProps extends PageProps {}

export function getPageUrl(stripeID: string) {
  return `${siteConfig.websiteHostname}/purchase-success?productID=${stripeID}`;
}

const formatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function PurchaseSuccessPage(props: IPurchaseSuccessPageProps) {
  const productID = new URLSearchParams(props.location.search).get("productID");
  const product = productID ? getProduct(productID) : null;

  return (
    <Box>
      <Header />
      {product ? (
        <Container py={10}>
          <Heading mb={4}>Thank you for your purchase</Heading>
          <Text>Your items will be shipped soon</Text>
          <Box py={10} width={"200px"}>
            {product.image}
          </Box>
          <Box
            border="1px solid"
            borderColor={"gray.400"}
            borderRadius={"md"}
            p={3}
          >
            <Text>Order #12345678</Text>
            <Flex gap={1} alignItems={"center"}>
              <Icon as={FaRegCheckCircle} color="green.500" />
              <Text fontWeight={"semibold"} fontSize={"lg"}>
                Your order is confirmed!
              </Text>
            </Flex>
            <Text>
              We've accepted your order and we're getting it ready. Expected
              delivery date is{" "}
              <Span fontWeight={"semibold"}>
                {formatter.format(getFutureDate(2))}
              </Span>
            </Text>
          </Box>
        </Container>
      ) : (
        <Text>no product found</Text>
      )}
      <Footer />
    </Box>
  );
}

function getFutureDate(daysToAdd: number) {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + daysToAdd);
  return currentDate;
}
