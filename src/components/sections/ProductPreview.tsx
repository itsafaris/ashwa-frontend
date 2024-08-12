import { Box, Heading, Text, Container, Stack, Grid } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { useReadableState } from "./summaryCtx";
import { Span } from "@components/components";

export function ProductPreview() {
  const state = useReadableState();

  return (
    <Container maxW={"container.lg"}>
      <Grid
        gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
        gridTemplateAreas={[
          '"image image" "text text"',
          '"image image" "text text"',
          '"text image"',
        ]}
        alignItems={"center"}
        gap={6}
        width={"full"}
        justifyContent={"space-between"}
        px={6}
        py={10}
      >
        <Stack gridArea={"text"}>
          <Heading fontSize={["3xl", "3xl", "4xl"]} maxW={"container.sm"}>
            Lose an average of{" "}
            <Span color="primary.600" fontWeight={"bold"} textDecoration={"underline"}>
              {Math.abs(state.weightDiff)}
              {state.weightSuffix}
            </Span>{" "}
            in only 90 days -
            <br /> while also sleeping better.
          </Heading>

          <Text fontSize={"md"} mt={4}>
            Our carefully crafted formula works in harmony with your body's natural rhythms. By
            improving your sleep quality and supporting your metabolism, it contributes to your
            weight management efforts.
          </Text>
        </Stack>

        <Box gridArea={"image"} mx="auto" display={["none", "block"]}>
          <StaticImage src="../../images/product-preview-desktop.jpg" alt="" width={460} />
        </Box>

        <Box gridArea={"image"} mx="auto" display={["block", "none"]}>
          <StaticImage src="../../images/product-preview-mobile.jpg" alt="" />
        </Box>
      </Grid>
    </Container>
  );
}
