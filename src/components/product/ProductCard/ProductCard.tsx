import { getDiscount } from "@/utils/getDiscount";
import { Product } from "@/types";
import {
  StyledCardWrapper,
  StyledBodyWrapper,
  StyledDiscount,
  StyledImageWrapper,
  StyledOldPrice,
  StyledPrice,
  StyledPriceWrapper,
  StyledPriceSale,
  StyledImage,
  StyledTitleLink,
} from "./ProductCard.styles";

/**
 * A component that displays the details of a product, including its title, image, price, and discounted price (if applicable).
 * If a discount is applied, it shows the discount percentage, sale price, and the original price.
 *
 * @param props - The component props.
 * @param props.product - The product object that contains the product details.
 * @returns A rendered `ProductCard` displaying the product's information.
 *
 * @example
 * <ProductCard product={product} />
 */
export const ProductCard = ({ product }: { product: Product }) => {
  const { title, image, price, discountedPrice, id } = product;

  const isDiscount = Number(price) !== Number(discountedPrice);

  let pricing = <StyledPrice>${price}</StyledPrice>;

  if (isDiscount) {
    pricing = (
      <>
        <StyledDiscount>{getDiscount(Number(price), Number(discountedPrice))}%</StyledDiscount>
        <StyledPriceSale>${discountedPrice}</StyledPriceSale>
        <StyledOldPrice>${price}</StyledOldPrice>
      </>
    );
  }

  return (
    <StyledCardWrapper>
      <StyledImageWrapper>
        <StyledImage alt={image.url} src={image.url} width={400} height={200} />
      </StyledImageWrapper>
      <StyledBodyWrapper>
        <StyledTitleLink href={`/product/${id}`}>{title}</StyledTitleLink>
        <StyledPriceWrapper>{pricing}</StyledPriceWrapper>
      </StyledBodyWrapper>
    </StyledCardWrapper>
  );
};
