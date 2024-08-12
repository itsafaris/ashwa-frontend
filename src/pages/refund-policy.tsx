import { Container, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import PolicyRenderer, { PolicyRendererData } from "../components/PolicyRenderer";
import { siteConfig } from "src/conf";

const data: PolicyRendererData = [
  {
    title: "",
    content: [
      {
        text: "At Calmr, we offer a 30-day return policy. You have 30 days from the date you receive your item to request a return.",
      },
      {
        text: "To be eligible for a return, your item must be in its original condition, unused, and unopened in its original packaging. A receipt or proof of purchase is also required.",
      },
    ],
  },
  {
    title: "How to Initiate a Return",
    content: [
      {
        text: `To start a return, please contact us at ${siteConfig.email}`,
      },
      {
        text: "If your return is approved, we will send you a return shipping label along with instructions on how and where to send your package. Items returned without first requesting a return will not be accepted.",
      },
      {
        text: `For any questions regarding returns, you can always reach us at ${siteConfig.email}`,
      },
    ],
  },
  {
    title: "Damages and Issues",
    content: [
      {
        text: "Please inspect your order upon reception and contact us immediately if your item is defective, damaged, or if you received the wrong item. We will evaluate the issue and make it right.",
      },
    ],
  },
  {
    title: "Exceptions / Non-Returnable Items",
    content: [
      {
        text: "Certain items are non-returnable, including perishable goods, custom products (such as special orders or personalized items), and personal care goods (such as beauty products). We also do not accept returns for hazardous materials, flammable liquids, or gases.",
      },
      {
        text: `If you have questions or concerns about a specific item, please contact us at ${siteConfig.email}`,
      },
      {
        text: "Unfortunately, we cannot accept returns on sale items or gift cards.",
      },
    ],
  },
  {
    title: "Exchanges",
    content: [
      {
        text: "The quickest way to ensure you receive the item you want is to return the item you have. Once the return is accepted, make a separate purchase for the new item.",
      },
    ],
  },
  {
    title: "European Union 14-Day Cooling Off Period",
    content: [
      {
        text: "If your order is being shipped to the European Union, you have the right to cancel or return your order within 14 days without any reason. The item must be in its original condition, unused, and unopened in its original packaging. A receipt or proof of purchase is also required.",
      },
    ],
  },
  {
    title: "Refunds",
    content: [
      {
        text: "We will notify you once we have received and inspected your return, and let you know if the refund was approved. If approved, the refund will be issued to your original payment method within 10 business days.",
      },
      {
        text: "Please note it may take some time for your bank or credit card company to process and post the refund.",
      },
      {
        text: `If more than 15 business days have passed since your return was approved and you have not received your refund, please contact us at ${siteConfig.email}`,
      },
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <Stack>
      <Header />
      <Container>
        <PolicyRenderer pageTitle="Refund Policy" data={data} />
        <Text>Last updated: July 17th, 2024</Text>
      </Container>
      <Footer />
    </Stack>
  );
}
