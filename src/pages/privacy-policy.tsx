import { Container, Flex, Stack, Heading, Spinner } from "@chakra-ui/react";
import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import { client } from "@lib/shopify/client";
import { getPrivacyPolicy } from "@lib/shopify/queries/shop";

export default function PrivacyPolicyPage() {
  const [htmlString, setHTMLString] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    async function getPolicy() {
      setLoading(true);

      const res = await client.request(getPrivacyPolicy);

      if (res.errors) {
        console.error(res.errors);
      } else if (res.data?.shop?.privacyPolicy) {
        setHTMLString(res.data.shop.privacyPolicy.body);
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
          <Heading>Privacy Policy</Heading>

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
