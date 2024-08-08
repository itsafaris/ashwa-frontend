import { Box, Heading, Text, Container, Stack, Grid } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";

export function ProductPreview() {
  return (
    <Container maxW={"container.lg"}>
      <Grid
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
            One product,
            <br /> endless benefits
          </Heading>

          <Text fontSize={"md"}>
            Reach your goals faster and feel your best with our organic aswhagandha based formula.
          </Text>
        </Stack>

        <Box gridArea={"image"} mx="auto" maxW={"500px"} display={["none", "block"]}>
          <StaticImage src="../../images/product-preview-desktop.jpg" alt="" />
        </Box>

        <Box gridArea={"image"} mx="auto" maxW={"500px"} display={["block", "none"]}>
          <StaticImage src="../../images/product-preview-mobile.jpg" alt="" />
        </Box>
      </Grid>
    </Container>
  );
}
