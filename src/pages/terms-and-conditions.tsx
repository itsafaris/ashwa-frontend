import { Container, Flex, Heading, Spinner, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { siteConfig } from "src/conf";

import { client } from "@lib/shopify/client";
import { getTermsOfService } from "@lib/shopify/queries/shop";

export default function TermsAndConditionsPage() {
  const [htmlString, setHTMLString] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    async function getPolicy() {
      setLoading(true);

      const res = await client.request(getTermsOfService);

      if (res.errors) {
        console.error(res.errors);
      } else if (res.data?.shop?.termsOfService) {
        setHTMLString(res.data.shop.termsOfService.body);
      }

      setLoading(false);
    }

    getPolicy();
  }, []);

  return (
    <Stack>
      <Header />
      <Container maxW={"container.lg"}>
        <Stack spacing={8} my={10}>
          <Heading>Terms and Conditions</Heading>

          {loading && <Spinner mx="auto" mt={16} />}
          {htmlString && (
            <Flex
              flexDirection={"column"}
              gap={6}
              dangerouslySetInnerHTML={{ __html: htmlString }}
            />
          )}
        </Stack>
      </Container>
      <Footer />
    </Stack>
  );
}
