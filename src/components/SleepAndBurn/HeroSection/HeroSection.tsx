import { Box, Container, Grid, Stack } from "@chakra-ui/react";
import { Gallery } from "./Gallery";
import { Content } from "./Content";
import { FreeEBook } from "./FreeEBook";

export const HeroSection = (props: { weightAvgMonthlyLoss: number; weightUnits: string }) => {
  return (
    <Box bg="brand.50">
      <Container maxW={["container.sm", null, "container.xl"]}>
        <Grid
          pt={[2, 4]}
          pb={4}
          gridTemplateColumns={["1fr", "1fr", "repeat(2, 1fr)"]}
          gridTemplateAreas={[
            `
            "gallery"
            "content"
            `,
            `
            "gallery"
            "content"
            `,
            `
              "gallery content"
            `,
          ]}
          gap={8}
          width={"full"}
          justifyContent={"space-between"}
        >
          <Stack spacing={0}>
            <Gallery />

            <FreeEBook />
          </Stack>

          <Content
            weightAvgMonthlyLoss={props.weightAvgMonthlyLoss}
            weightUnits={props.weightUnits}
          />
        </Grid>
      </Container>
    </Box>
  );
};
