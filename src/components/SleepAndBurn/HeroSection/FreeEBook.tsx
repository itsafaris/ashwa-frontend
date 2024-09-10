import { Box, Stack, Text } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";

export function FreeEBook() {
  return (
    <Stack
      maxW={"350px"}
      mx="auto"
      mt={6}
      backgroundColor={"#FFD600"}
      py={1}
      px={4}
      borderRadius={"lg"}
      direction={"row"}
      alignItems={"center"}
      spacing={2}
    >
      <Box width={"90px"} height={"full"} position={"relative"}>
        <Stack
          width={"90px"}
          position={"absolute"}
          top={"50%"}
          transform={"translateY(-50%)"}
          zIndex={0}
        >
          <StaticImage
            alt=""
            src="../../../images/free-gift-label.png"
            width={55}
            style={{
              transform: "rotate(15deg)",
              marginLeft: "auto",
              position: "absolute",
              bottom: "-5px",
              left: "0px",
              zIndex: 1,
            }}
          />

          <Box ml="auto">
            <StaticImage alt="" src={"../../../images/free-gift-1-sm.png"} width={65} />
          </Box>
        </Stack>
      </Box>

      <Text fontSize={"sm"} fontWeight={"semibold"} color={"brand.900"} textAlign={"center"}>
        "7 Proven Secrets for Effective Weight Loss"
      </Text>
    </Stack>
  );
}
