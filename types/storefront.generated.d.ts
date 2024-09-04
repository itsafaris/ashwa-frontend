/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import type * as StorefrontTypes from './storefront.types';

export type CartFragment = (
  Pick<StorefrontTypes.Cart, 'id' | 'checkoutUrl' | 'totalQuantity'>
  & { cost: { subtotalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalTaxAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>> }, lines: { edges: Array<{ node: (
        Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
        & { cost: { totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, merchandise: (
          Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
          & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
            Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
            & { options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                  Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                  & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, compareAtPrice?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, priceAfterDiscount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Metafield, 'id' | 'value'>> }
                ) }> }, sellingPlanGroups: { edges: Array<{ node: (
                  Pick<StorefrontTypes.SellingPlanGroup, 'name'>
                  & { sellingPlans: { edges: Array<{ node: (
                        Pick<StorefrontTypes.SellingPlan, 'id' | 'name' | 'description' | 'recurringDeliveries'>
                        & { options: Array<Pick<StorefrontTypes.SellingPlanOption, 'name' | 'value'>>, priceAdjustments: Array<{ adjustmentValue: { adjustmentAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> } }> }
                      ) }> } }
                ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> }, seo: Pick<StorefrontTypes.Seo, 'description' | 'title'> }
          ) }
        ) }
      ) | (
        Pick<StorefrontTypes.ComponentizableCartLine, 'id' | 'quantity'>
        & { cost: { totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, merchandise: (
          Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
          & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
            Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
            & { options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                  Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                  & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, compareAtPrice?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, priceAfterDiscount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Metafield, 'id' | 'value'>> }
                ) }> }, sellingPlanGroups: { edges: Array<{ node: (
                  Pick<StorefrontTypes.SellingPlanGroup, 'name'>
                  & { sellingPlans: { edges: Array<{ node: (
                        Pick<StorefrontTypes.SellingPlan, 'id' | 'name' | 'description' | 'recurringDeliveries'>
                        & { options: Array<Pick<StorefrontTypes.SellingPlanOption, 'name' | 'value'>>, priceAdjustments: Array<{ adjustmentValue: { adjustmentAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> } }> }
                      ) }> } }
                ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> }, seo: Pick<StorefrontTypes.Seo, 'description' | 'title'> }
          ) }
        ) }
      ) }> } }
);

export type ImageFragment = Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>;

export type ProductFragment = (
  Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
  & { options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
        Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
        & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, compareAtPrice?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, priceAfterDiscount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Metafield, 'id' | 'value'>> }
      ) }> }, sellingPlanGroups: { edges: Array<{ node: (
        Pick<StorefrontTypes.SellingPlanGroup, 'name'>
        & { sellingPlans: { edges: Array<{ node: (
              Pick<StorefrontTypes.SellingPlan, 'id' | 'name' | 'description' | 'recurringDeliveries'>
              & { options: Array<Pick<StorefrontTypes.SellingPlanOption, 'name' | 'value'>>, priceAdjustments: Array<{ adjustmentValue: { adjustmentAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> } }> }
            ) }> } }
      ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> }, seo: Pick<StorefrontTypes.Seo, 'description' | 'title'> }
);

export type ProductVariantFragment = (
  Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
  & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, compareAtPrice?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, priceAfterDiscount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Metafield, 'id' | 'value'>> }
);

export type SellingPlanFragment = (
  Pick<StorefrontTypes.SellingPlan, 'id' | 'name' | 'description' | 'recurringDeliveries'>
  & { options: Array<Pick<StorefrontTypes.SellingPlanOption, 'name' | 'value'>>, priceAdjustments: Array<{ adjustmentValue: { adjustmentAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> } }> }
);

export type SeoFragment = Pick<StorefrontTypes.Seo, 'description' | 'title'>;

export type AddToCartMutationVariables = StorefrontTypes.Exact<{
  cartId: StorefrontTypes.Scalars['ID']['input'];
  lines: Array<StorefrontTypes.CartLineInput> | StorefrontTypes.CartLineInput;
}>;


export type AddToCartMutation = { cartLinesAdd?: StorefrontTypes.Maybe<{ cart?: StorefrontTypes.Maybe<(
      Pick<StorefrontTypes.Cart, 'id' | 'checkoutUrl' | 'totalQuantity'>
      & { cost: { subtotalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalTaxAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>> }, lines: { edges: Array<{ node: (
            Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
            & { cost: { totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
              & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
                Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
                & { options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                      Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                      & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, compareAtPrice?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, priceAfterDiscount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Metafield, 'id' | 'value'>> }
                    ) }> }, sellingPlanGroups: { edges: Array<{ node: (
                      Pick<StorefrontTypes.SellingPlanGroup, 'name'>
                      & { sellingPlans: { edges: Array<{ node: (
                            Pick<StorefrontTypes.SellingPlan, 'id' | 'name' | 'description' | 'recurringDeliveries'>
                            & { options: Array<Pick<StorefrontTypes.SellingPlanOption, 'name' | 'value'>>, priceAdjustments: Array<{ adjustmentValue: { adjustmentAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> } }> }
                          ) }> } }
                    ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> }, seo: Pick<StorefrontTypes.Seo, 'description' | 'title'> }
              ) }
            ) }
          ) | (
            Pick<StorefrontTypes.ComponentizableCartLine, 'id' | 'quantity'>
            & { cost: { totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
              & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
                Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
                & { options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                      Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                      & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, compareAtPrice?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, priceAfterDiscount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Metafield, 'id' | 'value'>> }
                    ) }> }, sellingPlanGroups: { edges: Array<{ node: (
                      Pick<StorefrontTypes.SellingPlanGroup, 'name'>
                      & { sellingPlans: { edges: Array<{ node: (
                            Pick<StorefrontTypes.SellingPlan, 'id' | 'name' | 'description' | 'recurringDeliveries'>
                            & { options: Array<Pick<StorefrontTypes.SellingPlanOption, 'name' | 'value'>>, priceAdjustments: Array<{ adjustmentValue: { adjustmentAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> } }> }
                          ) }> } }
                    ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> }, seo: Pick<StorefrontTypes.Seo, 'description' | 'title'> }
              ) }
            ) }
          ) }> } }
    )> }> };

export type CreateCartMutationVariables = StorefrontTypes.Exact<{
  lineItems?: StorefrontTypes.InputMaybe<Array<StorefrontTypes.CartLineInput> | StorefrontTypes.CartLineInput>;
}>;


export type CreateCartMutation = { cartCreate?: StorefrontTypes.Maybe<{ cart?: StorefrontTypes.Maybe<(
      Pick<StorefrontTypes.Cart, 'id' | 'checkoutUrl' | 'totalQuantity'>
      & { cost: { subtotalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalTaxAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>> }, lines: { edges: Array<{ node: (
            Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
            & { cost: { totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
              & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
                Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
                & { options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                      Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                      & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, compareAtPrice?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, priceAfterDiscount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Metafield, 'id' | 'value'>> }
                    ) }> }, sellingPlanGroups: { edges: Array<{ node: (
                      Pick<StorefrontTypes.SellingPlanGroup, 'name'>
                      & { sellingPlans: { edges: Array<{ node: (
                            Pick<StorefrontTypes.SellingPlan, 'id' | 'name' | 'description' | 'recurringDeliveries'>
                            & { options: Array<Pick<StorefrontTypes.SellingPlanOption, 'name' | 'value'>>, priceAdjustments: Array<{ adjustmentValue: { adjustmentAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> } }> }
                          ) }> } }
                    ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> }, seo: Pick<StorefrontTypes.Seo, 'description' | 'title'> }
              ) }
            ) }
          ) | (
            Pick<StorefrontTypes.ComponentizableCartLine, 'id' | 'quantity'>
            & { cost: { totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
              & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
                Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
                & { options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                      Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                      & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, compareAtPrice?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, priceAfterDiscount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Metafield, 'id' | 'value'>> }
                    ) }> }, sellingPlanGroups: { edges: Array<{ node: (
                      Pick<StorefrontTypes.SellingPlanGroup, 'name'>
                      & { sellingPlans: { edges: Array<{ node: (
                            Pick<StorefrontTypes.SellingPlan, 'id' | 'name' | 'description' | 'recurringDeliveries'>
                            & { options: Array<Pick<StorefrontTypes.SellingPlanOption, 'name' | 'value'>>, priceAdjustments: Array<{ adjustmentValue: { adjustmentAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> } }> }
                          ) }> } }
                    ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> }, seo: Pick<StorefrontTypes.Seo, 'description' | 'title'> }
              ) }
            ) }
          ) }> } }
    )> }> };

export type EditCartItemsMutationVariables = StorefrontTypes.Exact<{
  cartId: StorefrontTypes.Scalars['ID']['input'];
  lines: Array<StorefrontTypes.CartLineUpdateInput> | StorefrontTypes.CartLineUpdateInput;
}>;


export type EditCartItemsMutation = { cartLinesUpdate?: StorefrontTypes.Maybe<{ cart?: StorefrontTypes.Maybe<(
      Pick<StorefrontTypes.Cart, 'id' | 'checkoutUrl' | 'totalQuantity'>
      & { cost: { subtotalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalTaxAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>> }, lines: { edges: Array<{ node: (
            Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
            & { cost: { totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
              & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
                Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
                & { options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                      Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                      & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, compareAtPrice?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, priceAfterDiscount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Metafield, 'id' | 'value'>> }
                    ) }> }, sellingPlanGroups: { edges: Array<{ node: (
                      Pick<StorefrontTypes.SellingPlanGroup, 'name'>
                      & { sellingPlans: { edges: Array<{ node: (
                            Pick<StorefrontTypes.SellingPlan, 'id' | 'name' | 'description' | 'recurringDeliveries'>
                            & { options: Array<Pick<StorefrontTypes.SellingPlanOption, 'name' | 'value'>>, priceAdjustments: Array<{ adjustmentValue: { adjustmentAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> } }> }
                          ) }> } }
                    ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> }, seo: Pick<StorefrontTypes.Seo, 'description' | 'title'> }
              ) }
            ) }
          ) | (
            Pick<StorefrontTypes.ComponentizableCartLine, 'id' | 'quantity'>
            & { cost: { totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
              & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
                Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
                & { options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                      Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                      & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, compareAtPrice?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, priceAfterDiscount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Metafield, 'id' | 'value'>> }
                    ) }> }, sellingPlanGroups: { edges: Array<{ node: (
                      Pick<StorefrontTypes.SellingPlanGroup, 'name'>
                      & { sellingPlans: { edges: Array<{ node: (
                            Pick<StorefrontTypes.SellingPlan, 'id' | 'name' | 'description' | 'recurringDeliveries'>
                            & { options: Array<Pick<StorefrontTypes.SellingPlanOption, 'name' | 'value'>>, priceAdjustments: Array<{ adjustmentValue: { adjustmentAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> } }> }
                          ) }> } }
                    ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> }, seo: Pick<StorefrontTypes.Seo, 'description' | 'title'> }
              ) }
            ) }
          ) }> } }
    )> }> };

export type RemoveFromCartMutationVariables = StorefrontTypes.Exact<{
  cartId: StorefrontTypes.Scalars['ID']['input'];
  lineIds: Array<StorefrontTypes.Scalars['ID']['input']> | StorefrontTypes.Scalars['ID']['input'];
}>;


export type RemoveFromCartMutation = { cartLinesRemove?: StorefrontTypes.Maybe<{ cart?: StorefrontTypes.Maybe<(
      Pick<StorefrontTypes.Cart, 'id' | 'checkoutUrl' | 'totalQuantity'>
      & { cost: { subtotalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalTaxAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>> }, lines: { edges: Array<{ node: (
            Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
            & { cost: { totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
              & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
                Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
                & { options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                      Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                      & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, compareAtPrice?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, priceAfterDiscount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Metafield, 'id' | 'value'>> }
                    ) }> }, sellingPlanGroups: { edges: Array<{ node: (
                      Pick<StorefrontTypes.SellingPlanGroup, 'name'>
                      & { sellingPlans: { edges: Array<{ node: (
                            Pick<StorefrontTypes.SellingPlan, 'id' | 'name' | 'description' | 'recurringDeliveries'>
                            & { options: Array<Pick<StorefrontTypes.SellingPlanOption, 'name' | 'value'>>, priceAdjustments: Array<{ adjustmentValue: { adjustmentAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> } }> }
                          ) }> } }
                    ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> }, seo: Pick<StorefrontTypes.Seo, 'description' | 'title'> }
              ) }
            ) }
          ) | (
            Pick<StorefrontTypes.ComponentizableCartLine, 'id' | 'quantity'>
            & { cost: { totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
              & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
                Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
                & { options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                      Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                      & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, compareAtPrice?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, priceAfterDiscount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Metafield, 'id' | 'value'>> }
                    ) }> }, sellingPlanGroups: { edges: Array<{ node: (
                      Pick<StorefrontTypes.SellingPlanGroup, 'name'>
                      & { sellingPlans: { edges: Array<{ node: (
                            Pick<StorefrontTypes.SellingPlan, 'id' | 'name' | 'description' | 'recurringDeliveries'>
                            & { options: Array<Pick<StorefrontTypes.SellingPlanOption, 'name' | 'value'>>, priceAdjustments: Array<{ adjustmentValue: { adjustmentAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> } }> }
                          ) }> } }
                    ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> }, seo: Pick<StorefrontTypes.Seo, 'description' | 'title'> }
              ) }
            ) }
          ) }> } }
    )> }> };

export type GetCartQueryVariables = StorefrontTypes.Exact<{
  cartId: StorefrontTypes.Scalars['ID']['input'];
}>;


export type GetCartQuery = { cart?: StorefrontTypes.Maybe<(
    Pick<StorefrontTypes.Cart, 'id' | 'checkoutUrl' | 'totalQuantity'>
    & { cost: { subtotalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalTaxAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>> }, lines: { edges: Array<{ node: (
          Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
          & { cost: { totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, merchandise: (
            Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
            & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
              Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
              & { options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                    Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                    & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, compareAtPrice?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, priceAfterDiscount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Metafield, 'id' | 'value'>> }
                  ) }> }, sellingPlanGroups: { edges: Array<{ node: (
                    Pick<StorefrontTypes.SellingPlanGroup, 'name'>
                    & { sellingPlans: { edges: Array<{ node: (
                          Pick<StorefrontTypes.SellingPlan, 'id' | 'name' | 'description' | 'recurringDeliveries'>
                          & { options: Array<Pick<StorefrontTypes.SellingPlanOption, 'name' | 'value'>>, priceAdjustments: Array<{ adjustmentValue: { adjustmentAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> } }> }
                        ) }> } }
                  ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> }, seo: Pick<StorefrontTypes.Seo, 'description' | 'title'> }
            ) }
          ) }
        ) | (
          Pick<StorefrontTypes.ComponentizableCartLine, 'id' | 'quantity'>
          & { cost: { totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, merchandise: (
            Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
            & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
              Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
              & { options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                    Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                    & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, compareAtPrice?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, priceAfterDiscount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Metafield, 'id' | 'value'>> }
                  ) }> }, sellingPlanGroups: { edges: Array<{ node: (
                    Pick<StorefrontTypes.SellingPlanGroup, 'name'>
                    & { sellingPlans: { edges: Array<{ node: (
                          Pick<StorefrontTypes.SellingPlan, 'id' | 'name' | 'description' | 'recurringDeliveries'>
                          & { options: Array<Pick<StorefrontTypes.SellingPlanOption, 'name' | 'value'>>, priceAdjustments: Array<{ adjustmentValue: { adjustmentAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> } }> }
                        ) }> } }
                  ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> }, seo: Pick<StorefrontTypes.Seo, 'description' | 'title'> }
            ) }
          ) }
        ) }> } }
  )> };

export type GetProductQueryVariables = StorefrontTypes.Exact<{
  handle: StorefrontTypes.Scalars['String']['input'];
}>;


export type GetProductQuery = { product?: StorefrontTypes.Maybe<(
    Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
    & { options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
          Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
          & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, compareAtPrice?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, priceAfterDiscount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Metafield, 'id' | 'value'>> }
        ) }> }, sellingPlanGroups: { edges: Array<{ node: (
          Pick<StorefrontTypes.SellingPlanGroup, 'name'>
          & { sellingPlans: { edges: Array<{ node: (
                Pick<StorefrontTypes.SellingPlan, 'id' | 'name' | 'description' | 'recurringDeliveries'>
                & { options: Array<Pick<StorefrontTypes.SellingPlanOption, 'name' | 'value'>>, priceAdjustments: Array<{ adjustmentValue: { adjustmentAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> } }> }
              ) }> } }
        ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> }, seo: Pick<StorefrontTypes.Seo, 'description' | 'title'> }
  )> };

export type GetProductsQueryVariables = StorefrontTypes.Exact<{
  sortKey?: StorefrontTypes.InputMaybe<StorefrontTypes.ProductSortKeys>;
  reverse?: StorefrontTypes.InputMaybe<StorefrontTypes.Scalars['Boolean']['input']>;
  query?: StorefrontTypes.InputMaybe<StorefrontTypes.Scalars['String']['input']>;
}>;


export type GetProductsQuery = { products: { edges: Array<{ node: (
        Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
        & { options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
              & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, compareAtPrice?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, priceAfterDiscount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Metafield, 'id' | 'value'>> }
            ) }> }, sellingPlanGroups: { edges: Array<{ node: (
              Pick<StorefrontTypes.SellingPlanGroup, 'name'>
              & { sellingPlans: { edges: Array<{ node: (
                    Pick<StorefrontTypes.SellingPlan, 'id' | 'name' | 'description' | 'recurringDeliveries'>
                    & { options: Array<Pick<StorefrontTypes.SellingPlanOption, 'name' | 'value'>>, priceAdjustments: Array<{ adjustmentValue: { adjustmentAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> } }> }
                  ) }> } }
            ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> }, seo: Pick<StorefrontTypes.Seo, 'description' | 'title'> }
      ) }> } };

export type GetShopPoliciesQueryVariables = StorefrontTypes.Exact<{ [key: string]: never; }>;


export type GetShopPoliciesQuery = { shop: { privacyPolicy?: StorefrontTypes.Maybe<Pick<StorefrontTypes.ShopPolicy, 'body'>> } };

export type GetTermsOfServiceQueryVariables = StorefrontTypes.Exact<{ [key: string]: never; }>;


export type GetTermsOfServiceQuery = { shop: { termsOfService?: StorefrontTypes.Maybe<Pick<StorefrontTypes.ShopPolicy, 'body'>> } };

export type GetRefundPolicyQueryVariables = StorefrontTypes.Exact<{ [key: string]: never; }>;


export type GetRefundPolicyQuery = { shop: { refundPolicy?: StorefrontTypes.Maybe<Pick<StorefrontTypes.ShopPolicy, 'body'>> } };

export type GetShippingPolicyQueryVariables = StorefrontTypes.Exact<{ [key: string]: never; }>;


export type GetShippingPolicyQuery = { shop: { shippingPolicy?: StorefrontTypes.Maybe<Pick<StorefrontTypes.ShopPolicy, 'body'>> } };

interface GeneratedQueryTypes {
  "#graphql\n  query getCart($cartId: ID!) {\n    cart(id: $cartId) {\n      ...cart\n    }\n  }\n  #graphql\n  fragment cart on Cart {\n    id\n    checkoutUrl\n    cost {\n      subtotalAmount {\n        amount\n        currencyCode\n      }\n      totalAmount {\n        amount\n        currencyCode\n      }\n      totalTaxAmount {\n        amount\n        currencyCode\n      }\n    }\n    lines(first: 100) {\n      edges {\n        node {\n          id\n          quantity\n          cost {\n            totalAmount {\n              amount\n              currencyCode\n            }\n          }\n          merchandise {\n            ... on ProductVariant {\n              id\n              title\n              selectedOptions {\n                name\n                value\n              }\n              product {\n                ...product\n              }\n            }\n          }\n        }\n      }\n    }\n    totalQuantity\n  }\n  #graphql\n  fragment product on Product {\n    id\n    handle\n    availableForSale\n    title\n    description\n    descriptionHtml\n    options {\n      id\n      name\n      values\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    variants(first: 250) {\n      edges {\n        node {\n          ...productVariant\n        }\n      }\n    }\n    sellingPlanGroups(first: 10) {\n      edges {\n        node {\n          name \n          sellingPlans(first: 10) {\n            edges {\n              node {\n                ...sellingPlan\n              }\n            }\n          }\n        }\n      }\n    }\n    featuredImage {\n      ...image\n    }\n    images(first: 20) {\n      edges {\n        node {\n          ...image\n        }\n      }\n    }\n    seo {\n      ...seo\n    }\n    tags\n    updatedAt\n  }\n  #graphql\n  fragment image on Image {\n    url\n    altText\n    width\n    height\n  }\n\n  #graphql\n  fragment seo on SEO {\n    description\n    title\n  }\n\n  #graphql\n  fragment productVariant on ProductVariant { \n    id\n    title\n    availableForSale\n    selectedOptions {\n      name\n      value\n    }\n    compareAtPrice {\n      amount\n      currencyCode\n    }\n    price {\n      amount\n      currencyCode\n    }\n    priceAfterDiscount: metafield(namespace:\"custom\", key:\"price_after_discount\") {\n      id\n      value\n    }\n  }\n\n  #graphql\n  fragment sellingPlan on SellingPlan { \n    id\n    name\n    description\n    options {\n      name\n      value\n    }\n    recurringDeliveries\n    priceAdjustments {\n      adjustmentValue {\n        ... on SellingPlanFixedAmountPriceAdjustment {\n          adjustmentAmount {\n            amount\n            currencyCode\n          }\n        }\n      }\n    }\n  }\n\n\n\n": {return: GetCartQuery, variables: GetCartQueryVariables},
  "#graphql\n  query getProduct($handle: String!) {\n    product(handle: $handle) {\n      ...product\n    }\n  }\n  #graphql\n  fragment product on Product {\n    id\n    handle\n    availableForSale\n    title\n    description\n    descriptionHtml\n    options {\n      id\n      name\n      values\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    variants(first: 250) {\n      edges {\n        node {\n          ...productVariant\n        }\n      }\n    }\n    sellingPlanGroups(first: 10) {\n      edges {\n        node {\n          name \n          sellingPlans(first: 10) {\n            edges {\n              node {\n                ...sellingPlan\n              }\n            }\n          }\n        }\n      }\n    }\n    featuredImage {\n      ...image\n    }\n    images(first: 20) {\n      edges {\n        node {\n          ...image\n        }\n      }\n    }\n    seo {\n      ...seo\n    }\n    tags\n    updatedAt\n  }\n  #graphql\n  fragment image on Image {\n    url\n    altText\n    width\n    height\n  }\n\n  #graphql\n  fragment seo on SEO {\n    description\n    title\n  }\n\n  #graphql\n  fragment productVariant on ProductVariant { \n    id\n    title\n    availableForSale\n    selectedOptions {\n      name\n      value\n    }\n    compareAtPrice {\n      amount\n      currencyCode\n    }\n    price {\n      amount\n      currencyCode\n    }\n    priceAfterDiscount: metafield(namespace:\"custom\", key:\"price_after_discount\") {\n      id\n      value\n    }\n  }\n\n  #graphql\n  fragment sellingPlan on SellingPlan { \n    id\n    name\n    description\n    options {\n      name\n      value\n    }\n    recurringDeliveries\n    priceAdjustments {\n      adjustmentValue {\n        ... on SellingPlanFixedAmountPriceAdjustment {\n          adjustmentAmount {\n            amount\n            currencyCode\n          }\n        }\n      }\n    }\n  }\n\n\n": {return: GetProductQuery, variables: GetProductQueryVariables},
  "#graphql\n  query getProducts($sortKey: ProductSortKeys, $reverse: Boolean, $query: String) {\n    products(sortKey: $sortKey, reverse: $reverse, query: $query, first: 100) {\n      edges {\n        node {\n          ...product\n        }\n      }\n    }\n  }\n  #graphql\n  fragment product on Product {\n    id\n    handle\n    availableForSale\n    title\n    description\n    descriptionHtml\n    options {\n      id\n      name\n      values\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    variants(first: 250) {\n      edges {\n        node {\n          ...productVariant\n        }\n      }\n    }\n    sellingPlanGroups(first: 10) {\n      edges {\n        node {\n          name \n          sellingPlans(first: 10) {\n            edges {\n              node {\n                ...sellingPlan\n              }\n            }\n          }\n        }\n      }\n    }\n    featuredImage {\n      ...image\n    }\n    images(first: 20) {\n      edges {\n        node {\n          ...image\n        }\n      }\n    }\n    seo {\n      ...seo\n    }\n    tags\n    updatedAt\n  }\n  #graphql\n  fragment image on Image {\n    url\n    altText\n    width\n    height\n  }\n\n  #graphql\n  fragment seo on SEO {\n    description\n    title\n  }\n\n  #graphql\n  fragment productVariant on ProductVariant { \n    id\n    title\n    availableForSale\n    selectedOptions {\n      name\n      value\n    }\n    compareAtPrice {\n      amount\n      currencyCode\n    }\n    price {\n      amount\n      currencyCode\n    }\n    priceAfterDiscount: metafield(namespace:\"custom\", key:\"price_after_discount\") {\n      id\n      value\n    }\n  }\n\n  #graphql\n  fragment sellingPlan on SellingPlan { \n    id\n    name\n    description\n    options {\n      name\n      value\n    }\n    recurringDeliveries\n    priceAdjustments {\n      adjustmentValue {\n        ... on SellingPlanFixedAmountPriceAdjustment {\n          adjustmentAmount {\n            amount\n            currencyCode\n          }\n        }\n      }\n    }\n  }\n\n\n": {return: GetProductsQuery, variables: GetProductsQueryVariables},
  "#graphql\n  query getShopPolicies {\n    shop {\n      privacyPolicy {\n        body\n      }\n    }\n  }\n": {return: GetShopPoliciesQuery, variables: GetShopPoliciesQueryVariables},
  "#graphql\n  query getTermsOfService {\n    shop {\n      termsOfService {\n        body\n      }\n    }\n  }\n": {return: GetTermsOfServiceQuery, variables: GetTermsOfServiceQueryVariables},
  "#graphql\n  query getRefundPolicy {\n    shop {\n      refundPolicy {\n        body\n      }\n    }\n  }\n": {return: GetRefundPolicyQuery, variables: GetRefundPolicyQueryVariables},
  "#graphql\n  query getShippingPolicy {\n    shop {\n      shippingPolicy {\n        body\n      }\n    }\n  }\n": {return: GetShippingPolicyQuery, variables: GetShippingPolicyQueryVariables},
}

interface GeneratedMutationTypes {
  "#graphql\n  mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {\n    cartLinesAdd(cartId: $cartId, lines: $lines) {\n      cart {\n        ...cart\n      }\n    }\n  }\n  #graphql\n  fragment cart on Cart {\n    id\n    checkoutUrl\n    cost {\n      subtotalAmount {\n        amount\n        currencyCode\n      }\n      totalAmount {\n        amount\n        currencyCode\n      }\n      totalTaxAmount {\n        amount\n        currencyCode\n      }\n    }\n    lines(first: 100) {\n      edges {\n        node {\n          id\n          quantity\n          cost {\n            totalAmount {\n              amount\n              currencyCode\n            }\n          }\n          merchandise {\n            ... on ProductVariant {\n              id\n              title\n              selectedOptions {\n                name\n                value\n              }\n              product {\n                ...product\n              }\n            }\n          }\n        }\n      }\n    }\n    totalQuantity\n  }\n  #graphql\n  fragment product on Product {\n    id\n    handle\n    availableForSale\n    title\n    description\n    descriptionHtml\n    options {\n      id\n      name\n      values\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    variants(first: 250) {\n      edges {\n        node {\n          ...productVariant\n        }\n      }\n    }\n    sellingPlanGroups(first: 10) {\n      edges {\n        node {\n          name \n          sellingPlans(first: 10) {\n            edges {\n              node {\n                ...sellingPlan\n              }\n            }\n          }\n        }\n      }\n    }\n    featuredImage {\n      ...image\n    }\n    images(first: 20) {\n      edges {\n        node {\n          ...image\n        }\n      }\n    }\n    seo {\n      ...seo\n    }\n    tags\n    updatedAt\n  }\n  #graphql\n  fragment image on Image {\n    url\n    altText\n    width\n    height\n  }\n\n  #graphql\n  fragment seo on SEO {\n    description\n    title\n  }\n\n  #graphql\n  fragment productVariant on ProductVariant { \n    id\n    title\n    availableForSale\n    selectedOptions {\n      name\n      value\n    }\n    compareAtPrice {\n      amount\n      currencyCode\n    }\n    price {\n      amount\n      currencyCode\n    }\n    priceAfterDiscount: metafield(namespace:\"custom\", key:\"price_after_discount\") {\n      id\n      value\n    }\n  }\n\n  #graphql\n  fragment sellingPlan on SellingPlan { \n    id\n    name\n    description\n    options {\n      name\n      value\n    }\n    recurringDeliveries\n    priceAdjustments {\n      adjustmentValue {\n        ... on SellingPlanFixedAmountPriceAdjustment {\n          adjustmentAmount {\n            amount\n            currencyCode\n          }\n        }\n      }\n    }\n  }\n\n\n\n": {return: AddToCartMutation, variables: AddToCartMutationVariables},
  "#graphql\n  mutation createCart($lineItems: [CartLineInput!]) {\n    cartCreate(input: { lines: $lineItems }) {\n      cart {\n        ...cart\n      }\n    }\n  }\n  #graphql\n  fragment cart on Cart {\n    id\n    checkoutUrl\n    cost {\n      subtotalAmount {\n        amount\n        currencyCode\n      }\n      totalAmount {\n        amount\n        currencyCode\n      }\n      totalTaxAmount {\n        amount\n        currencyCode\n      }\n    }\n    lines(first: 100) {\n      edges {\n        node {\n          id\n          quantity\n          cost {\n            totalAmount {\n              amount\n              currencyCode\n            }\n          }\n          merchandise {\n            ... on ProductVariant {\n              id\n              title\n              selectedOptions {\n                name\n                value\n              }\n              product {\n                ...product\n              }\n            }\n          }\n        }\n      }\n    }\n    totalQuantity\n  }\n  #graphql\n  fragment product on Product {\n    id\n    handle\n    availableForSale\n    title\n    description\n    descriptionHtml\n    options {\n      id\n      name\n      values\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    variants(first: 250) {\n      edges {\n        node {\n          ...productVariant\n        }\n      }\n    }\n    sellingPlanGroups(first: 10) {\n      edges {\n        node {\n          name \n          sellingPlans(first: 10) {\n            edges {\n              node {\n                ...sellingPlan\n              }\n            }\n          }\n        }\n      }\n    }\n    featuredImage {\n      ...image\n    }\n    images(first: 20) {\n      edges {\n        node {\n          ...image\n        }\n      }\n    }\n    seo {\n      ...seo\n    }\n    tags\n    updatedAt\n  }\n  #graphql\n  fragment image on Image {\n    url\n    altText\n    width\n    height\n  }\n\n  #graphql\n  fragment seo on SEO {\n    description\n    title\n  }\n\n  #graphql\n  fragment productVariant on ProductVariant { \n    id\n    title\n    availableForSale\n    selectedOptions {\n      name\n      value\n    }\n    compareAtPrice {\n      amount\n      currencyCode\n    }\n    price {\n      amount\n      currencyCode\n    }\n    priceAfterDiscount: metafield(namespace:\"custom\", key:\"price_after_discount\") {\n      id\n      value\n    }\n  }\n\n  #graphql\n  fragment sellingPlan on SellingPlan { \n    id\n    name\n    description\n    options {\n      name\n      value\n    }\n    recurringDeliveries\n    priceAdjustments {\n      adjustmentValue {\n        ... on SellingPlanFixedAmountPriceAdjustment {\n          adjustmentAmount {\n            amount\n            currencyCode\n          }\n        }\n      }\n    }\n  }\n\n\n\n": {return: CreateCartMutation, variables: CreateCartMutationVariables},
  "#graphql\n  mutation editCartItems($cartId: ID!, $lines: [CartLineUpdateInput!]!) {\n    cartLinesUpdate(cartId: $cartId, lines: $lines) {\n      cart {\n        ...cart\n      }\n    }\n  }\n  #graphql\n  fragment cart on Cart {\n    id\n    checkoutUrl\n    cost {\n      subtotalAmount {\n        amount\n        currencyCode\n      }\n      totalAmount {\n        amount\n        currencyCode\n      }\n      totalTaxAmount {\n        amount\n        currencyCode\n      }\n    }\n    lines(first: 100) {\n      edges {\n        node {\n          id\n          quantity\n          cost {\n            totalAmount {\n              amount\n              currencyCode\n            }\n          }\n          merchandise {\n            ... on ProductVariant {\n              id\n              title\n              selectedOptions {\n                name\n                value\n              }\n              product {\n                ...product\n              }\n            }\n          }\n        }\n      }\n    }\n    totalQuantity\n  }\n  #graphql\n  fragment product on Product {\n    id\n    handle\n    availableForSale\n    title\n    description\n    descriptionHtml\n    options {\n      id\n      name\n      values\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    variants(first: 250) {\n      edges {\n        node {\n          ...productVariant\n        }\n      }\n    }\n    sellingPlanGroups(first: 10) {\n      edges {\n        node {\n          name \n          sellingPlans(first: 10) {\n            edges {\n              node {\n                ...sellingPlan\n              }\n            }\n          }\n        }\n      }\n    }\n    featuredImage {\n      ...image\n    }\n    images(first: 20) {\n      edges {\n        node {\n          ...image\n        }\n      }\n    }\n    seo {\n      ...seo\n    }\n    tags\n    updatedAt\n  }\n  #graphql\n  fragment image on Image {\n    url\n    altText\n    width\n    height\n  }\n\n  #graphql\n  fragment seo on SEO {\n    description\n    title\n  }\n\n  #graphql\n  fragment productVariant on ProductVariant { \n    id\n    title\n    availableForSale\n    selectedOptions {\n      name\n      value\n    }\n    compareAtPrice {\n      amount\n      currencyCode\n    }\n    price {\n      amount\n      currencyCode\n    }\n    priceAfterDiscount: metafield(namespace:\"custom\", key:\"price_after_discount\") {\n      id\n      value\n    }\n  }\n\n  #graphql\n  fragment sellingPlan on SellingPlan { \n    id\n    name\n    description\n    options {\n      name\n      value\n    }\n    recurringDeliveries\n    priceAdjustments {\n      adjustmentValue {\n        ... on SellingPlanFixedAmountPriceAdjustment {\n          adjustmentAmount {\n            amount\n            currencyCode\n          }\n        }\n      }\n    }\n  }\n\n\n\n": {return: EditCartItemsMutation, variables: EditCartItemsMutationVariables},
  "#graphql\n  mutation removeFromCart($cartId: ID!, $lineIds: [ID!]!) {\n    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {\n      cart {\n        ...cart\n      }\n    }\n  }\n  #graphql\n  fragment cart on Cart {\n    id\n    checkoutUrl\n    cost {\n      subtotalAmount {\n        amount\n        currencyCode\n      }\n      totalAmount {\n        amount\n        currencyCode\n      }\n      totalTaxAmount {\n        amount\n        currencyCode\n      }\n    }\n    lines(first: 100) {\n      edges {\n        node {\n          id\n          quantity\n          cost {\n            totalAmount {\n              amount\n              currencyCode\n            }\n          }\n          merchandise {\n            ... on ProductVariant {\n              id\n              title\n              selectedOptions {\n                name\n                value\n              }\n              product {\n                ...product\n              }\n            }\n          }\n        }\n      }\n    }\n    totalQuantity\n  }\n  #graphql\n  fragment product on Product {\n    id\n    handle\n    availableForSale\n    title\n    description\n    descriptionHtml\n    options {\n      id\n      name\n      values\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    variants(first: 250) {\n      edges {\n        node {\n          ...productVariant\n        }\n      }\n    }\n    sellingPlanGroups(first: 10) {\n      edges {\n        node {\n          name \n          sellingPlans(first: 10) {\n            edges {\n              node {\n                ...sellingPlan\n              }\n            }\n          }\n        }\n      }\n    }\n    featuredImage {\n      ...image\n    }\n    images(first: 20) {\n      edges {\n        node {\n          ...image\n        }\n      }\n    }\n    seo {\n      ...seo\n    }\n    tags\n    updatedAt\n  }\n  #graphql\n  fragment image on Image {\n    url\n    altText\n    width\n    height\n  }\n\n  #graphql\n  fragment seo on SEO {\n    description\n    title\n  }\n\n  #graphql\n  fragment productVariant on ProductVariant { \n    id\n    title\n    availableForSale\n    selectedOptions {\n      name\n      value\n    }\n    compareAtPrice {\n      amount\n      currencyCode\n    }\n    price {\n      amount\n      currencyCode\n    }\n    priceAfterDiscount: metafield(namespace:\"custom\", key:\"price_after_discount\") {\n      id\n      value\n    }\n  }\n\n  #graphql\n  fragment sellingPlan on SellingPlan { \n    id\n    name\n    description\n    options {\n      name\n      value\n    }\n    recurringDeliveries\n    priceAdjustments {\n      adjustmentValue {\n        ... on SellingPlanFixedAmountPriceAdjustment {\n          adjustmentAmount {\n            amount\n            currencyCode\n          }\n        }\n      }\n    }\n  }\n\n\n\n": {return: RemoveFromCartMutation, variables: RemoveFromCartMutationVariables},
}
declare module '@shopify/storefront-api-client' {
  type InputMaybe<T> = StorefrontTypes.InputMaybe<T>;
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}
