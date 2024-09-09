export const sellingPlanFragment = `#graphql
  fragment sellingPlan on SellingPlan { 
    id
    name
    description
    options {
      name
      value
    }
    recurringDeliveries
    priceAdjustments {
      adjustmentValue {
        ... on SellingPlanFixedAmountPriceAdjustment {
          adjustmentAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }
`;
