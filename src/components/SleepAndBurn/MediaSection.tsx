import { Box, Container, Grid, Stack, Text } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";

export function MediaSection() {
  return (
    <Stack p={4} pt={6} pb={10} backgroundColor={"brand.50"} spacing={6}>
      <Text mx="auto" textAlign={"center"} fontWeight={"semibold"} fontSize={"xs"}>
        BENEFITS OF OUR INGREDIENTS ARE RESEARCHED BY:
      </Text>

      <Grid
        gridTemplateColumns={[
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(5, 1fr)",
        ]}
        alignItems={"center"}
        opacity={1}
        maxW={"container.lg"}
        mx="auto"
        gap={0}
      >
        <StaticImage height={70} src="../../images/media1.png" alt="media logo" />

        <StaticImage height={70} src="../../images/media2.png" alt="media logo" />

        <StaticImage height={70} src="../../images/media3.png" alt="media logo" />

        <StaticImage height={70} src="../../images/media4.png" alt="media logo" />

        <StaticImage height={70} src="../../images/media5.png" alt="media logo" />
      </Grid>
    </Stack>
  );
}
