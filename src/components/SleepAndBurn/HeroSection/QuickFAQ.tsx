import {
  Text,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Icon,
  Box,
} from "@chakra-ui/react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Recommendation } from "@components/Recommendation";
import { MdOutlinePendingActions } from "react-icons/md";
import { StaticImage } from "gatsby-plugin-image";

export function QuickFAQ() {
  return (
    <Accordion defaultIndex={[1]} mt={6} allowMultiple width={"full"}>
      <AccordionItem borderColor={"gray.300"}>
        <AccordionButton py={4}>
          <Stack direction={"row"} spacing={2} alignItems={"center"} mr="auto">
            <Icon as={IoMdInformationCircleOutline} />
            <Text textAlign={"left"}>Product Information</Text>
          </Stack>

          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel pb={4}>
          <Stack spacing={6}>
            <Stack spacing={0}>
              <Text fontSize={"sm"} fontWeight={"bold"}>
                TAKE TWO A DAY
              </Text>
              <Text fontSize={"sm"}>
                As a dietary supplement take two (2) capsules before bedtime or as directed by your
                healthcare professional.
              </Text>
            </Stack>

            <Stack spacing={0}>
              <Text fontSize={"sm"} fontWeight={"bold"}>
                30 DAY SUPPLY
              </Text>
              <Text fontSize={"sm"}>
                A single bottle of Sleep & Burn contains 60 capsules, which is enough for a full
                month's supply.
              </Text>
            </Stack>

            <Stack spacing={0}>
              <Text fontSize={"sm"} fontWeight={"bold"} textTransform={"uppercase"}>
                Free of Top Allergens
              </Text>
              <Text fontSize={"sm"}>
                Sleep & Burn is free of the top 9 allergens, GMOs, gluten, sugar, and lactose.
              </Text>
            </Stack>

            <Box mx="auto">
              <StaticImage
                alt="Sleep & Burn Supplement facts"
                src=".././../../images/facts-label.jpg"
                width={400}
              />
            </Box>
          </Stack>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem borderColor={"gray.300"}>
        <AccordionButton py={4}>
          <Stack direction={"row"} spacing={2} alignItems={"center"} mr="auto">
            <Icon as={MdOutlinePendingActions} />
            <Text textAlign={"left"}>Recommended Use</Text>
          </Stack>

          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel pb={4}>
          <Box
            backgroundColor={"white"}
            border="2px solid"
            borderColor="brand.200"
            borderStyle={"dashed"}
          >
            <Recommendation />
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
