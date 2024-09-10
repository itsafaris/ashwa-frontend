import { Box, Container, Text } from "@chakra-ui/react";

export function Disclaimer(props: { weightAvgMonthlyLoss: number; weightUnits: string }) {
  return (
    <Box py={10}>
      <Container maxWidth={"container.lg"}>
        <Box p={6} border={"1px solid black"}>
          <Text fontSize={"sm"}>
            *The Food and Drug Administration has not assessed the claims made about this product.
            Sleep & Burn is not designed to diagnose, treat, cure, or prevent any medical
            conditions. Individual outcomes may differ. A study involving twice-daily oral intake of
            Sleep & Burn, alongside a calorie-restricted diet, showed an average weight difference
            exceeding {Math.round(props.weightAvgMonthlyLoss * 3)}
            {props.weightUnits} over a 90-day period. However, this product is not intended to be a
            substitute for professional medical advice or treatment.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
