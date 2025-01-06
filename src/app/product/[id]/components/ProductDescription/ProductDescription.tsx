import { Heading } from "@/components/common/Heading";
import { getDiscount } from "@/utils/getDiscount";
import { Rating } from "../Rating/Rating";
import { Product as TProduct } from "@/types";
import { AddToCartButton } from "../AddToCartButton/AddToCartButton";
import { LinkToRating } from "./ToRatingSectionLink";
import { ProductPrice } from "./ProductPrice";
import { StyledWrapper, StyledPriceWrapper, StyledRatingWrapper } from "./ProductDescription.styles";

/**
 * Displays the product description, including title, rating, pricing, description, and an "Add to cart" button.
 *
 * @param product - The product object containing all its details.
 * @returns The JSX element for the product description or `undefined` if no product is provided.
 */
export const ProductDescription = ({ product }: { product: TProduct | undefined }) => {
  if (!product) {
    return;
  }

  const { title, rating, description, price, discountedPrice } = product;
  const discount = getDiscount(price, discountedPrice);

  return (
    <div>
      <StyledWrapper>
        <Heading headingLevel="h1" headingStyle="HEADING_1">
          {title}
        </Heading>
        <StyledRatingWrapper>
          <Rating rating={rating} aria-hidden="true" />
          {rating ? <LinkToRating rating={rating} targetId="rating" /> : <span>No reviews yet</span>}
        </StyledRatingWrapper>
      </StyledWrapper>
      <StyledPriceWrapper>
        <ProductPrice discountedPrice={discountedPrice} price={price} discount={discount} />
      </StyledPriceWrapper>
      <StyledWrapper>
        <p>{description}</p>
      </StyledWrapper>
      <StyledWrapper>
        <AddToCartButton product={product} />
      </StyledWrapper>
    </div>
  );
};
