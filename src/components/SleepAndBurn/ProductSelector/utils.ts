import { Product, PurchaseType } from "src/products";

export function calcPrices(product: Product, purchaseType: PurchaseType) {
  let unitPrice = product.unitPrice;
  let unitPriceBefore = product.unitPriceBefore;

  if (
    purchaseType === "subscription" &&
    product.subscriptionPlan &&
    product.subscriptionPlan.priceAdjustmentAmountOff
  ) {
    const amountOff = product.subscriptionPlan.priceAdjustmentAmountOff.amount;
    unitPrice = product.unitPrice - amountOff;
    unitPriceBefore = product.unitPriceBefore - amountOff;
  }

  return {
    unitPrice,
    unitPriceBefore,
  };
}
