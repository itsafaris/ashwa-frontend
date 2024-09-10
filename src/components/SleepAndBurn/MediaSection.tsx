import { Box, Container, Stack, Text } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";

export function MediaSection() {
  return (
    <Box position={"relative"}>
      <Box
        position={"absolute"}
        zIndex={0}
        backgroundColor={"#38283f"}
        top={0}
        left={0}
        width={"100%"}
        height={"100%"}
      />

      <Container px={0} backgroundColor="white">
        <Stack
          p={4}
          pt={6}
          pb={10}
          borderRadius={"xl"}
          backgroundColor={"white"}
          boxShadow={"2xl"}
          spacing={6}
          mx={4}
          zIndex={1}
          position={"relative"}
        >
          <Text
            mx="auto"
            maxW={"200px"}
            textAlign={"center"}
            fontWeight={"semibold"}
            fontSize={"xs"}
            color="gray.500"
            textTransform={"uppercase"}
          >
            Benefits of Sleep & Burn ingredients covered in:
          </Text>

          <Stack opacity={0.8} spacing={6}>
            <StaticImage
              style={{ flexShrink: 0, margin: "auto" }}
              height={23}
              layout="fixed"
              src="../../images/media1.png"
              alt="media logo"
            />

            <Stack direction={"row"} alignItems={"center"} mx="auto" spacing={6}>
              <StaticImage
                style={{ flexShrink: 0 }}
                height={43}
                layout="fixed"
                src="../../images/media4.png"
                alt="media logo"
              />

              <StaticImage
                style={{ flexShrink: 0 }}
                height={38}
                layout="fixed"
                src="../../images/media3.png"
                alt="media logo"
              />
            </Stack>

            <StaticImage
              style={{ flexShrink: 0, margin: "auto" }}
              height={23}
              layout="fixed"
              src="../../images/media2.png"
              alt="media logo"
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
