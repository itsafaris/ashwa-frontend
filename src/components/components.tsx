import { Text } from "@chakra-ui/react";
import React, { ComponentProps } from "react";

export function Span(props: ComponentProps<typeof Text>) {
  return <Text as="span" {...props}></Text>;
}
