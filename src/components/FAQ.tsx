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

const data: Array<{ question: string; answer: string }> = [
  {
    question: "What is Calmr?",
    answer:
      "Calmr is a dietary supplement designed specifically to help reduce anxiety in women aged 25-50. Our formula combines key vitamins, minerals, and natural ingredients to promote a sense of calm and well-being.",
  },
  {
    question: "How should I take Calmr?",
    answer:
      "For best results, take two veggie capsules daily with water. Each bottle contains 30 servings, enough for one month.",
  },
  {
    question: "What ingredients are in Calmr?",
    answer:
      "Calmr contains a blend of vitamins (B1, B2, B3, B5, B6, and Biotin), minerals (Calcium, Magnesium, Zinc, Potassium), and a proprietary blend of natural extracts like Rhodiola Extract, Lutein, Ashwagandha, Chamomile, Lemon Balm, Skullcap, and more. Refer to our Supplement Facts label for a complete list of ingredients and their concentrations.",
  },
  {
    question: "Are there any side effects?",
    answer:
      "Calmr is formulated with natural ingredients and is generally safe for most women. However, if you are pregnant, nursing, taking medication, or have a medical condition, we recommend consulting with a healthcare professional before starting any new supplement.",
  },
  {
    question: "Can I purchase Calmr without a subscription?",
    answer:
      "Yes, you can choose between a one-time purchase or a subscription plan. Our subscription option offers the convenience of regular deliveries, so you never have to worry about running out of your anxiety support.",
  },
  {
    question: "What are the pricing options for Calmr?",
    answer:
      "We offer three bundle options:\n- 1 Bottle: For a one-month supply\n- 3 Bottles: For a three-month supply\n- 6 Bottles: For a six-month supply\nPlease visit our website www.trycalmr.com for detailed pricing and savings information.",
  },
  {
    question: "Where is Calmr manufactured?",
    answer:
      "Calmr is proudly manufactured in the USA at our facility located at 110 Innovation Blvd, Wilmington, DE 19805.",
  },
  {
    question: "How can I contact customer service?",
    answer:
      "For any questions or concerns, you can reach our customer service team via email at info@calmr.com. We are here to assist you with anything you need.",
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
            <AccordionItem key={idx}>
              <Text>
                <AccordionButton py={6}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize={"lg"}
                    fontWeight={"semibold"}
                  >
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
