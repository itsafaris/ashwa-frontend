import { Stack, StackProps, Text, ButtonProps, TextProps } from "@chakra-ui/react";
import { NextButton as NextButtonRaw, QuizHeading } from "../components/ui";

export function Card(props: StackProps) {
  return (
    <Stack
      backgroundColor={"transparent"}
      px={3}
      py={4}
      borderRadius={"lg"}
      spacing={6}
      {...props}
    />
  );
}

export function Heading(props: TextProps) {
  return (
    <QuizHeading lineHeight={1.2} fontSize={"3xl"} fontWeight={"semibold"} mb={0} {...props} />
  );
}

export function Subtitle(props: TextProps) {
  return <Text mb={2} color={"blackAlpha.700"} {...props} />;
}

export function NextButton(props: ButtonProps) {
  return <NextButtonRaw mt={4} colorScheme="black" {...props} />;
}

export function SummaryCard(props: StackProps) {
  return (
    <Stack
      px={4}
      py={4}
      borderRadius={"lg"}
      width={"100%"}
      alignItems={"center"}
      justifyContent={"space-between"}
      spacing={1}
      boxShadow={"0px 0px 6px 0px #00000052"}
      backgroundColor={"white"}
      {...props}
    />
  );
}
