import { LiaShippingFastSolid } from "react-icons/lia";
import { IoBookOutline } from "react-icons/io5";

import { Box, Text, Icon, Container, Stack } from "@chakra-ui/react";

export const SpecialOfferBanner = () => (
  <Box backgroundColor={"primary.100"} pt={4}>
    <Container maxW={"container.lg"} color="white">
      <Stack bgGradient="linear(to-r, pink.300, pink.500)" px={4} py={3}>
        <Stack
          maxW={"container.sm"}
          width={"full"}
          mx="auto"
          direction={"row"}
          alignItems={"center"}
        >
          <Stack lineHeight={1}>
            <Text textTransform={"uppercase"} fontWeight={"bold"} fontSize={"lg"}>
              Summer sale
            </Text>

            <Stack spacing={1}>
              <Stack direction={"row"} alignItems={"center"}>
                <Icon as={LiaShippingFastSolid} />
                <Text textTransform={"uppercase"} fontWeight={"semibold"} fontSize={"xs"}>
                  Get free shipping
                </Text>
              </Stack>

              <Stack direction={"row"} alignItems={"center"}>
                <Icon as={IoBookOutline} />
                <Text textTransform={"uppercase"} fontWeight={"semibold"} fontSize={"xs"}>
                  + Effective Weight Loss Guide
                </Text>
              </Stack>
            </Stack>
          </Stack>

          <Stack lineHeight={1} spacing={1} alignItems={"center"} ml="auto">
            <Text textTransform={"uppercase"} fontWeight={"bold"} fontSize={"sm"}>
              Save up to
            </Text>

            <Text textTransform={"uppercase"} fontWeight={"bold"} fontSize={"4xl"}>
              50%
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  </Box>
);
