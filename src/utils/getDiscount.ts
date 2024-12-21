/**
 * Calculates the discount percentage based on the original price and the discounted price.
 *
 * @param price - The original price of the product.
 * @param discountedPrice - The discounted price of the product.
 * @returns The discount percentage, rounded to the nearest whole number.
 */
export const getDiscount = (price: number, discountedPrice: number) => {
  const discount = Math.round((1 - discountedPrice / price) * 100);

  return discount;
};
