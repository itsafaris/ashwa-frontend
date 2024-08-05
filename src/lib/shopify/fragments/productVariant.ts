export const productVariantFragment = `#graphql
  fragment productVariant on ProductVariant { 
    id
    title
    availableForSale
    selectedOptions {
      name
      value
    }
    compareAtPrice {
      amount
      currencyCode
    }
    price {
      amount
      currencyCode
    }
  }
`;
