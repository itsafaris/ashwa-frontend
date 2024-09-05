import imageFragment from "./image";
import { productVariantFragment } from "./productVariant";
import { sellingPlanFragment } from "./sellingPlan";
import seoFragment from "./seo";

const productFragment = `#graphql
  fragment product on Product {
    id
    handle
    availableForSale
    title
    description
    descriptionHtml
    options {
      id
      name
      values
    }
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 250) {
      edges {
        node {
          ...productVariant
        }
      }
    }
    sellingPlanGroups(first: 10) {
      edges {
        node {
          name 
          sellingPlans(first: 10) {
            edges {
              node {
                ...sellingPlan
              }
            }
          }
        }
      }
    }
    featuredImage {
      ...image
    }
    images(first: 20) {
      edges {
        node {
          ...image
        }
      }
    }
    seo {
      ...seo
    }
    tags
    updatedAt
  }
  ${imageFragment}
  ${seoFragment}
  ${productVariantFragment}
  ${sellingPlanFragment}
`;

export default productFragment;
