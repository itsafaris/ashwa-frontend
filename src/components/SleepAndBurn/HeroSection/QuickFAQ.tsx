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
            <Text>Details</Text>
          </Stack>

          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel pb={4}>
          <Stack alignItems={"center"} spacing={6}>
            <Text fontSize={"sm"}>
              SUGGESTED USE: As a dietary supplement take two (2) capsules before bedtime or as
              directed by your healthcare professional.
            </Text>

            <StaticImage
              alt="Sleep & Burn Supplement facts"
              src=".././../../images/facts-label.jpg"
              width={400}
            />
          </Stack>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem borderColor={"gray.300"}>
        <AccordionButton py={4}>
          <Stack direction={"row"} spacing={2} alignItems={"center"} mr="auto">
            <Icon as={MdOutlinePendingActions} />
            <Text>Recommendation</Text>
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
