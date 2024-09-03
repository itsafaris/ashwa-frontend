import { Box, Container, Grid } from "@chakra-ui/react";
import { ImageSlider } from "./ImageSlider";
import { Content } from "./Content";

export const HeroSection = (props: { weightAvgMonthlyLoss: number; weightUnits: string }) => {
  return (
    <Box bg="white">
      <Container maxW={["container.sm", null, "container.xl"]}>
        <Grid
          pt={[2, 4]}
          pb={4}
          gridTemplateColumns={["auto", "auto", "1fr 1fr"]}
          gridTemplateAreas={['"headline" "image"', '"headline" "image"', '"image headline"']}
          gap={8}
          width={"full"}
          justifyContent={"space-between"}
        >
          <ImageSlider />

          <Content
            weightAvgMonthlyLoss={props.weightAvgMonthlyLoss}
            weightUnits={props.weightUnits}
          />
        </Grid>
      </Container>
    </Box>
  );
};
