import {
  Container,
  Stack,
  StackProps,
  TextProps,
  Text as TextRaw,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { siteConfig } from "src/conf";

const data: PolicyRendererData = [
  {
    title: "Our Purpose",
    content: [
      {
        text: "At Calmr, our goal is to empower women to take charge of their well-being. We aim to offer high-quality supplements that help women achieve a state of calm and balance in their lives.",
      },
    ],
  },
  {
    title: "Our Principles",
    content: [
      {
        text: "Our work at Calmr is guided by our steadfast commitment to empathy, quality, community, and innovation. These principles are central to our mission as we assist you in your journey towards enhanced self-care and well-being.",
      },
    ],
  },
  {
    title: "Get In Touch",
    content: [
      {
        text: `If you have any questions, feel free to contact us at ${siteConfig.email}`,
      },
      {
        text: "For more information about our products and services, visit our website at www.trycalmr.com.",
      },
    ],
  },
];

export default function AboutUsPage() {
  return (
    <Stack>
      <Header />
      <Container maxW={"container.lg"}>
        <PolicyRenderer pageTitle="About us" data={data} />
      </Container>
      <Footer />
    </Stack>
  );
}

type PolicyRendererData = Array<{
  title: string;
  content: Array<{
    text: string;
    list?: Array<{ text: string }>;
  }>;
}>;

function Headline(props: TextProps) {
  return <TextRaw textAlign={"left"} fontSize={"3xl"} fontWeight={"bold"} {...props} />;
}

function TitleXL(props: TextProps) {
  return <TextRaw textAlign={"left"} fontSize={"xl"} fontWeight={"bold"} {...props} />;
}

function Section(props: StackProps) {
  return <Stack spacing={3} {...props} />;
}

function Text(props: TextProps) {
  return <TextRaw {...props} />;
}

function PolicyRenderer({ pageTitle, data }: { pageTitle: string; data: PolicyRendererData }) {
  return (
    <Stack spacing={8} my={10}>
      <Headline>{pageTitle}</Headline>

      {data.map((section, idx) => {
        return (
          <Section key={idx}>
            <TitleXL>{section.title}</TitleXL>

            {section.content.map((it, idx) => {
              return (
                <>
                  <Text key={idx}>{it.text}</Text>
                  {it.list && (
                    <UnorderedList>
                      {it.list.map((listItem, idx) => {
                        return (
                          <ListItem key={idx}>
                            <Text>{listItem.text}</Text>
                          </ListItem>
                        );
                      })}
                    </UnorderedList>
                  )}
                </>
              );
            })}
          </Section>
        );
      })}
    </Stack>
  );
}
