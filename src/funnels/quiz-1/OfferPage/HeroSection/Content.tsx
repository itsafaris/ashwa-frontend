import { Flex, Heading, Text, Stack, Container } from "@chakra-ui/react";
import { Rating, Span } from "@components/components";
import { ProductSelector } from "../ProductSelector";
import { useGlobalState } from "src/RootWrapper";
import { Shipping } from "@components/Shipping";
import { QuickFAQ } from "./QuickFAQ";
import { UserRating } from "../UserRating";

const usps = [
  {
    emoji: "🔥",
    text: "Lose weight",
  },
  {
    emoji: "🍕",
    text: "Control late-night cravings",
  },
  {
    emoji: "😴",
    text: "Have deep full night sleep",
  },
  {
    emoji: "🧘‍♀️",
    text: "Handle stress with ease",
  },
  {
    emoji: "🌞",
    text: "Wake up feeling energized",
  },
];

export function Content(props: { weightAvgMonthlyLoss: number; weightUnits: string }) {
  const { mainProductOneOffVariants, freeGiftProduct } = useGlobalState();

  return (
    <Stack spacing={0} gridArea="content" alignItems={"center"} flex={1}>
      <UserRating />

      <Heading mt={2} mb={6} fontSize={["4xl", "5xl"]} maxW={"container.sm"} textAlign={["center"]}>
        Lose an Average Of{" "}
        <Span color="pink.600" fontWeight={"bold"}>
          {Math.round(props.weightAvgMonthlyLoss * 3)}
          {props.weightUnits}
        </Span>{" "}
        In Only 90 Days*
      </Heading>

      {mainProductOneOffVariants.length > 0 && (
        <ProductSelector
          products={mainProductOneOffVariants.map((it) => {
            if (it.id === "bundle-3") {
              return {
                ...it,
                hasFreeShipping: true,
                hasFreeGift: true,
                badge: { title: "Most Popular", showDiscount: true },
                giftProduct: freeGiftProduct,
              };
            } else if (it.id === "bundle-6") {
              return {
                ...it,
                hasFreeShipping: true,
                hasFreeGift: true,
                badge: { title: "Best Value", showDiscount: true },
                giftProduct: freeGiftProduct,
              };
            } else {
              return it;
            }
          })}
        />
      )}

      <Container mx="auto" maxW="container.md">
        <Shipping mt={6} />

        <QuickFAQ />
      </Container>
    </Stack>
  );
}
