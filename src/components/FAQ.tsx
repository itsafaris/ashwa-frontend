import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { siteConfig } from "src/conf";

const data: Array<{ question: string; answer: string }> = [
  {
    question: "What is Calmr?",
    answer:
      "Calmr is a premium dietary supplement designed to enhance your nightly detox, improve sleep quality, and support weight management. Formulated with a blend of potent ingredients such as Ashwagandha, Melatonin, Magnesium, and a variety of herbal extracts, Calmr helps you achieve deeper, more restful sleep, manage stress, and wake up feeling refreshed and energized",
  },
  {
    question: "How should I take Calmr?",
    answer:
      "For best results, take 2 capsules of Calmr (as indicated on the packaging) approximately 30-60 minutes before bedtime. This allows the ingredients, such as Melatonin and Ashwagandha, to work effectively in preparing your body for a restful night's sleep",
  },
  {
    question: "What ingredients are in Calmr?",
    answer:
      " Calmr is crafted with a blend of high-quality ingredients designed to enhance sleep, manage stress, and support weight control. Key ingredients include Melatonin, which helps regulate your sleep cycle, and Ashwagandha Root, known for its stress-reducing properties. The supplement also contains Magnesium to support muscle relaxation, and a combination of White Kidney Bean and Green Coffee Bean Extracts to aid in weight management. Additionally, it features ingredients like L-Theanine and L-Tryptophan for promoting calmness, and Valerian Root and Passion Flower Extracts to further enhance sleep quality.",
  },
  {
    question: "Are there any side effects?",
    answer:
      "Calmr is formulated with natural ingredients and is generally well-tolerated by most individuals. However, as with any dietary supplement, there is a possibility of experiencing side effects. Some users may experience mild digestive discomfort, drowsiness, or headaches, particularly when first starting the supplement. Ingredients like Melatonin may cause daytime drowsiness if taken in excessive amounts. If you have any pre-existing medical conditions, are pregnant or nursing, or are taking any medications, it's important to consult with a healthcare professional before starting Calmr. Always follow the recommended dosage instructions to minimize the risk of side effects.",
  },
  {
    question: "Can I purchase Calmr without a subscription?",
    answer:
      "Yes, you can choose between a one-time purchase or a subscription plan. Our subscription option offers the convenience of regular deliveries, so you never have to worry about running out of your anxiety support.",
  },
  {
    question: "What are the pricing options for Calmr?",
    answer:
      "We offer three bundle options: 1 Bottle For a one-month supply, 3 Bottles For a three-month supply, 6 Bottles For a six-month supply.",
  },
  {
    question: "Where is Calmr manufactured?",
    answer:
      "Calmr is proudly manufactured in the USA at our facility located at 110 Innovation Blvd, Wilmington, DE 19805.",
  },
  {
    question: "How can I contact customer service?",
    answer: `For any questions or concerns, you can reach our customer service team via email at ${siteConfig.email}. We are here to assist you with anything you need.`,
  },
  {
    question: "How long does it take to feel the effects of Calmr?",
    answer:
      "The time it takes to notice the effects of Calmr can vary from person to person. Consistent use over a few weeks is generally recommended to fully experience the benefits.",
  },
  {
    question: "Is Calmr vegan and gluten-free?",
    answer:
      "Yes, Calmr is made with vegetable capsules and does not contain any gluten or animal-derived ingredients. We ensure our supplement is accessible to those with dietary restrictions.",
  },
];

export function FAQ() {
  return (
    <Stack>
      <Heading my={6} textAlign={"center"}>
        Your questions, answered
      </Heading>

      <Accordion allowMultiple>
        {data.map((it, idx) => {
          return (
            <AccordionItem key={idx} borderColor={"blackAlpha.300"}>
              <Text>
                <AccordionButton py={6}>
                  <Box as="span" flex="1" textAlign="left" fontSize={"lg"} fontWeight={"semibold"}>
                    {it.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Text>
              <AccordionPanel pb={4}>{it.answer}</AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Stack>
  );
}
