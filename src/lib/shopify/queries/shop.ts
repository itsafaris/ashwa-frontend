export const getPrivacyPolicy = `#graphql
  query getShopPolicies {
    shop {
      privacyPolicy {
        body
      }
    }
  }
`;

export const getTermsOfService = `#graphql
  query getTermsOfService {
    shop {
      termsOfService {
        body
      }
    }
  }
`;

export const getRefundPolicy = `#graphql
  query getRefundPolicy {
    shop {
      refundPolicy {
        body
      }
    }
  }
`;

export const getShippingPolicy = `#graphql
  query getShippingPolicy {
    shop {
      shippingPolicy {
        body
      }
    }
  }
`;
