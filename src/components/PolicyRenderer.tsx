import {
  Stack,
  StackProps,
  TextProps,
  Text as TextRaw,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React from "react";

export type PolicyRendererData = Array<{
  title: string;
  content: Array<{
    text: string;
    list?: Array<{ text: string }>;
  }>;
}>;

function Headline(props: TextProps) {
  return (
    <TextRaw
      textAlign={"left"}
      fontSize={"3xl"}
      fontWeight={"bold"}
      {...props}
    />
  );
}

function TitleXL(props: TextProps) {
  return (
    <TextRaw
      textAlign={"left"}
      fontSize={"xl"}
      fontWeight={"bold"}
      {...props}
    />
  );
}

function Section(props: StackProps) {
  return <Stack spacing={3} {...props} />;
}

function Text(props: TextProps) {
  return <TextRaw {...props} />;
}

export default function PolicyRenderer({
  pageTitle,
  data,
}: {
  pageTitle: string;
  data: PolicyRendererData;
}) {
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
