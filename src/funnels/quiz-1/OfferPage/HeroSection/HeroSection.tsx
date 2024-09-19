import { Box, Container } from "@chakra-ui/react";
import { Content } from "./Content";

export const HeroSection = (props: { weightAvgMonthlyLoss: number; weightUnits: string }) => {
  return (
    <Box pt={20} bg="brand.50">
      <Container maxW={["container.sm", "container.md", "container.lg"]}>
        <Content
          weightAvgMonthlyLoss={props.weightAvgMonthlyLoss}
          weightUnits={props.weightUnits}
        />
      </Container>
    </Box>
  );
};
