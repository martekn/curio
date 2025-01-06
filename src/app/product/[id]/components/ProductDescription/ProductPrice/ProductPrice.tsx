import { Product } from "@/types";
import { StyledDiscount, StyledPriceDiscounted, StyledPriceOld, StyledPrice } from "./ProductPrice.styles";

interface PricingProps {
  discountedPrice: Product["discountedPrice"];
  price: Product["price"];
  discount: number;
}

/**
 * Displays the pricing details, including discounted and original prices if applicable.
 *
 * @param discountedPrice - The discounted price of the product.
 * @param price - The original price of the product.
 * @param discount - The discount percentage.
 * @returns The JSX element displaying pricing information.
 */
export const ProductPrice = ({ discountedPrice, price, discount }: PricingProps) => {
  if (discountedPrice === price) {
    return <StyledPrice>${price}</StyledPrice>;
  }

  return (
    <>
      <StyledPriceDiscounted>${discountedPrice}</StyledPriceDiscounted>
      <StyledPriceOld>${price}</StyledPriceOld>
      <StyledDiscount>({discount}%)</StyledDiscount>
    </>
  );
};
