import { Heading, Stack, Grid } from "@chakra-ui/react";

import { StaticImage } from "gatsby-plugin-image";

export function CustomerOutcomes() {
  return (
    <Stack
      backgroundColor="white"
      borderRadius={"lg"}
      width={"100%"}
      alignItems={"center"}
      justifyContent={"space-between"}
      spacing={1}
      p={6}
      border="1px solid"
      borderColor={"bg.100"}
    >
      <Grid
        gridTemplateColumns={["1fr", "1fr 1fr"]}
        gridTemplateRows={["auto auto", "1fr"]}
        gap={2}
        alignItems={"center"}
      >
        <Stack py={3} px={[3, 3, 10]}>
          <Stack alignItems={["center", "start"]} mb={3}>
            <StaticImage alt="" src="../../images/woman-photo-1.jpg" width={170} />
          </Stack>

          <Heading textAlign={["center", "left"]} fontSize={"2xl"}>
            92% of our customers report significant results in their first month of use
          </Heading>
        </Stack>

        <Stack py={3} px={[3, 3, 10]}>
          <StaticImage alt="" src="../../images/summary-outcome-graph.jpg" />
        </Stack>
      </Grid>
    </Stack>
  );
}
