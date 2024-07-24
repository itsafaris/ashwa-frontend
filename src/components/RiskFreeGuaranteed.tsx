import { Flex, Image, Text } from "@chakra-ui/react";
import RiskFreeImg from "@images/risk_free.svg";
import React from "react";

export function RiskFreeGuaranteed() {
  return (
    <Flex
      flexDirection={"row"}
      alignItems={"center"}
      gap={3}
      mx="auto"
      px={3}
      py={2}
      borderRadius={8}
      border={"1px solid"}
      borderColor="whiteAlpha.400"
      width={"full"}
      justifyContent={"center"}
    >
      <Flex height={"80px"} width={"80px"} flexShrink={0}>
        <Image alt="Risk free guarantee" src={RiskFreeImg} />
      </Flex>

      <Flex flexDirection={"column"} alignItems={"flex-start"} maxWidth={300}>
        <Text
          fontSize={"xs"}
          color="green.400"
          fontWeight={"semibold"}
          lineHeight={"normal"}
        >
          TRY RISK FREE
        </Text>

        <Text color="bg.500" fontSize={"xs"}>
          Cancel anytime to not be charged the full program price. We're super
          confident you're going to love our product.
        </Text>
      </Flex>
    </Flex>
  );
}
