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
      px={3}
      borderRadius={"lg"}
      direction={"row"}
      alignItems={"center"}
      spacing={2}
    >
      <Box width={"90px"} height={"full"} position={"relative"} flexShrink={0}>
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

      <Text fontSize={"xs"} fontWeight={"semibold"} color={"brand.900"} textAlign={"center"}>
        <Text as="span" fontWeight={"bold"}>
          + Order by {getTodayUSAFormat()} to claim:
        </Text>{" "}
        "7 Proven Secrets for Effective Weight Loss"
      </Text>
    </Stack>
  );
}

function getTodayUSAFormat(): string {
  const today = new Date();

  // Get month (0-11)
  const month = today.getMonth();

  // Get day of the month (1-31)
  const day = today.getDate();

  // Array of short month names
  const shortMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Format the result: MMM DD
  return `${shortMonths[month]} ${day.toString().padStart(2, "0")}`;
}
