import { Container, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import PolicyRenderer, { PolicyRendererData } from "../components/PolicyRenderer";
import { siteConfig } from "src/conf";

const data: PolicyRendererData = [
  {
    title: "Interpretation and Definitions",
    content: [
      {
        text: "The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.",
      },
    ],
  },
  {
    title: "Definitions",
    content: [
      {
        text: "For the purposes of this Disclaimer:",
        list: [
          {
            text: '"Company" (referred to as either "the Company", "We", "Us" or "Our" in this Disclaimer) refers to Calmr, located at 110 Innovation Blvd, Wilmington, DE 19805, USA.',
          },
          {
            text: '"Goods" refers to the items offered for sale on the Service.',
          },
          {
            text: '"Orders" means a request by You to purchase Goods from Us.',
          },
          {
            text: '"Service" refers to the Website.',
          },
          {
            text: '"Website" refers to Calmr website, accessible from www.trycalmr.com.',
          },
          {
            text: '"You" means the individual accessing the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.',
          },
        ],
      },
    ],
  },
  {
    title: "Domestic Shipping Policy",
    content: [
      {
        text: "Thank you for visiting and shopping at Calmr. The following terms and conditions constitute our Shipping Policy.",
      },
    ],
  },
  {
    title: "Shipment processing times",
    content: [
      {
        text: "All Orders are processed within 2-3 business days. Orders are not shipped or delivered on weekends or holidays.",
      },
      {
        text: "If We are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery. If there will be a significant delay in shipment of Your Order, We will contact You via email or telephone.",
      },
    ],
  },
  {
    title: "Shipping rates & delivery estimates",
    content: [
      {
        text: "Shipping charges for Your Orders will be calculated and displayed at checkout.",
      },
      {
        text: "Shipping method: Standard",
      },
      {
        text: "Shipment cost: Free",
      },
      {
        text: "Estimated delivery time: 5-7 business days",
      },
      {
        text: "Delivery delays can occasionally occur.",
      },
    ],
  },
  {
    title: "Shipment confirmation & Order tracking",
    content: [
      {
        text: "You will receive a Shipment Confirmation over Whatsapp/SMS/E-mail once Your Order has shipped containing your tracking number(s). The tracking number will be active within 24 hours.",
      },
    ],
  },
  {
    title: "Customs, Duties and Taxes",
    content: [
      {
        text: "Calmr is not responsible for any customs and taxes applied to Your Order. All fees imposed during or after shipping are the responsibility of the customer (tariffs, taxes).",
      },
    ],
  },
  {
    title: "Damages",
    content: [
      {
        text: "Calmr is not liable for any products damaged or lost during shipping. If You received Your Order damaged, please contact us for resolution.",
      },
      {
        text: "Please save all packaging materials and damaged goods in case you need to return products.",
      },
    ],
  },
  {
    title: "Contact Us",
    content: [
      {
        text: `If you have any questions about this Shipping Policy, You can contact us by sending an email: ${siteConfig.email}`,
      },
    ],
  },
];

export default function ShippingPolicyPage() {
  return (
    <Stack>
      <Header />
      <Container>
        <PolicyRenderer pageTitle="Shipping Policy" data={data} />
        <Text>Last updated: July 17th, 2024</Text>
      </Container>
      <Footer />
    </Stack>
  );
}
