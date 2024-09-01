import { useState, ComponentProps } from "react";

import { Button } from "@chakra-ui/react";
import { CartLineInput } from "types/storefront.types.js";
import { client } from "@lib/shopify/client";
import { createCartMutation } from "@lib/shopify/mutations/cart";

interface BuyNowButtonPropsBase {
  lines: CartLineInput[];
}

export type BuyNowButtonProps = ComponentProps<typeof Button> & BuyNowButtonPropsBase;

export function BuyNowButton(props: BuyNowButtonProps): JSX.Element {
  const { lines, children, ...passthroughProps } = props;
  const [loading, setLoading] = useState<boolean>(false);

  const handleBuyNow = async () => {
    setLoading(true);
    const res = await client.request(createCartMutation, {
      variables: {
        lineItems: lines,
      },
    });

    if (res.errors) {
      console.error(res.errors);
    } else if (res.data?.cartCreate?.cart) {
      window.location.href = res.data.cartCreate.cart?.checkoutUrl;
    }

    setLoading(false);
  };

  return (
    <Button isLoading={loading} {...passthroughProps} onClick={handleBuyNow}>
      {children}
    </Button>
  );
}
