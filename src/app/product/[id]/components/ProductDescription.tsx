import { Heading } from "@/components/Heading";
import { getDiscount } from "@/utils/getDiscount";
import { Rating } from "./Rating";
import { Product, Product as TProduct } from "@/types";
import { addToCartAtom } from "@/atoms/cartAtom";
import { Button } from "@/components/Button";
import { useSetAtom } from "jotai";
import styled, { css } from "styled-components";
import mixins from "@/theme/abstracts/mixins";
import Link from "next/link";
import { VisuallyHidden } from "react-aria";
import { useCallback } from "react";

const DescriptionSection = styled.div`
  ${({ theme }) => css`
    margin-block: ${theme.sizes.size6};
    ${mixins.flow(theme.sizes.size3)}

    button {
      width: 100%;
    }
  `}
`;

const Price = styled.span`
  ${({ theme }) => css`
    line-height: 1;
    font-size: ${theme.typography.fontSize700};
    font-weight: ${theme.typography.fontWeightMedium};
  `}
`;

const Discount = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.light.primary400};
  `}
`;

const OldPrice = styled.s`
  ${({ theme }) => css`
    text-decoration: line-through;
    color: ${theme.colors.light.neutral400};
  `}
`;

const DiscountedPrice = styled(Price)`
  ${({ theme }) => css`
    color: ${theme.colors.light.primary400};
  `}
`;

const RatingContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.sizes.size2};
    position: relative;
    color: ${theme.colors.light.neutral400};
    font-size: ${theme.typography.fontSize200};

    > a::after {
      position: absolute;
      inset: 0;
      content: "";
      display: block;
    }
  `}
`;

const PriceContainer = styled(DescriptionSection)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.sizes.size3};
  `}
`;

const StyledLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.light.neutral400};
    font-size: ${theme.typography.fontSize200};

    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  `}
`;

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
const Pricing = ({ discountedPrice, price, discount }: PricingProps) => {
  if (discountedPrice === price) {
    return <Price>${price}</Price>;
  }

  return (
    <>
      <DiscountedPrice>${discountedPrice}</DiscountedPrice>
      <OldPrice>${price}</OldPrice>
      <Discount>({discount}%)</Discount>
    </>
  );
};

interface RatingLinkProps {
  rating: TProduct["rating"];
  targetId: string;
}

/**
 * Displays a link to the product's rating, allowing for smooth scrolling to the rating section.
 *
 * @param rating - The rating value of the product.
 * @param targetId - The ID of the target element for smooth scrolling.
 * @returns The JSX element representing the rating link.
 */
const RatingLink = ({ rating, targetId }: RatingLinkProps) => {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const target = document.getElementById(targetId);
      if (target) {
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition - 100; // Adjust this value to control how far it scrolls

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    },
    [targetId]
  );

  return (
    <StyledLink href={`#${targetId}`} onClick={handleClick}>
      <VisuallyHidden>Product rating: </VisuallyHidden>
      {rating}
    </StyledLink>
  );
};

/**
 * Displays the product description, including title, rating, pricing, description, and an "Add to cart" button.
 *
 * @param product - The product object containing all its details.
 * @returns The JSX element for the product description or `undefined` if no product is provided.
 */
export const ProductDescription = ({ product }: { product: TProduct | undefined }) => {
  const addToCart = useSetAtom(addToCartAtom);

  if (!product) {
    return;
  }

  const { title, rating, description, price, discountedPrice } = product;
  const discount = getDiscount(price, discountedPrice);

  return (
    <div>
      <DescriptionSection>
        <Heading headingLevel="h1" headingStyle="HEADING_1">
          {title}
        </Heading>
        <RatingContainer>
          <Rating rating={rating} aria-hidden="true" />
          {rating ? <RatingLink rating={rating} targetId="rating" /> : <span>No reviews yet</span>}
        </RatingContainer>
      </DescriptionSection>
      <PriceContainer>
        <Pricing discountedPrice={discountedPrice} price={price} discount={discount} />
      </PriceContainer>
      <DescriptionSection>
        <p>{description}</p>
      </DescriptionSection>
      <DescriptionSection>
        <Button variant="primary" onClick={() => addToCart(product)}>
          Add to cart
        </Button>
      </DescriptionSection>
    </div>
  );
};
