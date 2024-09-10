import { Stack, Text, Icon, Grid, Button, Badge } from "@chakra-ui/react";

import { PurchaseType } from "src/products";
import { FaRegCircle } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";

export function PurchaseTypeSelector({
  purchaseType,
  onChange,
}: {
  purchaseType: PurchaseType;
  onChange: (type: PurchaseType) => void;
}) {
  return (
    <Grid gridTemplateColumns={["1fr", "1fr 1fr"]} gap={1} mx="auto" maxW={"400px"} width={"100%"}>
      <Button
        size="md"
        variant={purchaseType === "one-off" ? "solid" : "outline"}
        onClick={() => onChange("one-off")}
        px={1}
        borderRadius={"full"}
        border="2px solid"
        borderColor={"brand.50"}
        color={purchaseType === "one-off" ? "black" : "yellow.700"}
        boxShadow={purchaseType === "one-off" ? "0 0 0 2px #febf03" : "0 0 0 1px #febf03"}
        backgroundColor={purchaseType === "one-off" ? "#febf03" : "transparent"}
        _active={{
          backgroundColor: purchaseType === "one-off" ? "#febf03" : "transparent",
        }}
        _hover={{
          backgroundColor: purchaseType === "one-off" ? "#febf03" : "transparent",
        }}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <Icon as={purchaseType === "one-off" ? FaRegCheckCircle : FaRegCircle} />
          <Text textTransform={"uppercase"} fontSize={"xs"} fontWeight={"bold"}>
            One-time purchase
          </Text>
        </Stack>
      </Button>

      <Button
        size="md"
        variant={purchaseType === "subscription" ? "solid" : "outline"}
        colorScheme={"yellow"}
        onClick={() => onChange("subscription")}
        px={1}
        borderRadius={"full"}
        border="2px solid"
        borderColor={"brand.50"}
        color={purchaseType === "subscription" ? "black" : "yellow.700"}
        boxShadow={purchaseType === "subscription" ? "0 0 0 2px #febf03" : "0 0 0 1px #febf03"}
        backgroundColor={purchaseType === "subscription" ? "#febf03" : "transparent"}
        _active={{
          backgroundColor: purchaseType === "subscription" ? "#febf03" : "transparent",
        }}
        _hover={{
          backgroundColor: purchaseType === "subscription" ? "#febf03" : "transparent",
        }}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <Icon as={purchaseType === "subscription" ? FaRegCheckCircle : FaRegCircle} />

          <Text textTransform={"uppercase"} fontSize={"xs"} fontWeight={"bold"}>
            Subscribe
          </Text>

          <Text
            backgroundColor={"orange.400"}
            color={"black"}
            px={1}
            py={1}
            borderRadius={"sm"}
            fontWeight={"bold"}
            fontSize={"xs"}
          >
            SALE %
          </Text>
        </Stack>
      </Button>
    </Grid>
  );
}
