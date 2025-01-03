import styled, { css } from "styled-components";
import Image from "next/image";
import { getDiscount } from "@/utils/getDiscount";
import mixins from "@/theme/abstracts/mixins";
import Link from "next/link";
import { Product } from "@/types";

const Container = styled.div`
  ${({ theme }) => css`
    box-shadow: ${theme.tokens.cardShadow};
    border-radius: ${theme.tokens.cardBorderRadius};
    background-color: ${theme.tokens.cardBackgroundDefault};
    color: ${theme.tokens.cardColorDefault};
    ${mixins.flow(theme.sizes.size4)}
    position: relative;
  `}
`;

const ImageContainer = styled.div`
  position: relative;
  &::before {
    float: left;
    padding-top: 66%;
    content: "";
  }

  &::after {
    display: block;
    content: "";
    clear: both;
  }
`;

const StyledImage = styled(Image)`
  ${({ theme }) => css`
    position: absolute;
    inset: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: ${theme.tokens.cardImageBorderRadius};
  `}
`;

const DescriptionContainer = styled.div`
  ${({ theme }) => css`
    ${mixins.flow(theme.tokens.cardFlowSpacing)}
    padding: ${theme.tokens.cardPadding};
  `}
`;

const PriceContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.sizes.size3};
    font-size: ${theme.tokens.cardFontSizeSmall};
  `}
`;

const Discount = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.typography.fontWeightMedium};
    background-color: ${theme.colors.light.primary400};
    color: ${theme.tokens.colorBackgroundDefault};
    padding: 0.05em 0.25em;
    border-radius: ${theme.tokens.cardImageBorderRadius};
  `}
`;

const OldPrice = styled.s`
  ${({ theme }) => css`
    font-size: ${theme.tokens.cardFontSizeExtraSmall};
  `}
`;
const Price = styled.span`
  ${({ theme }) => css`
    color: ${theme.tokens.bodyTextColor};
  `}
`;
const PriceSale = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.light.primary400};
    font-weight: ${theme.typography.fontWeightMedium};
  `}
`;

const Title = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.tokens.cardHeadingColorDefault};
    font-family: ${theme.tokens.cardHeadingFontFamily};
    font-size: ${theme.tokens.cardHeadingFontSize};
    text-decoration: underline transparent;
    text-underline-offset: 2px;
    transition: text-decoration 200ms ease-in-out;
    ${mixins.ellipseText()}
    &:hover {
      text-decoration-color: ${theme.tokens.cardHeadingColorDefault};
    }

    &::before {
      display: block;
      content: "";
      position: absolute;
      inset: 0;
      cursor: pointer;
    }
  `}
`;

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

  let pricing = <Price>${price}</Price>;

  if (isDiscount) {
    pricing = (
      <>
        <Discount>{getDiscount(Number(price), Number(discountedPrice))}%</Discount>
        <PriceSale>${discountedPrice}</PriceSale>
        <OldPrice>${price}</OldPrice>
      </>
    );
  }

  return (
    <Container>
      <ImageContainer>
        <StyledImage alt={image.url} src={image.url} width={400} height={200} />
      </ImageContainer>
      <DescriptionContainer>
        <Title href={`/product/${id}`}>{title}</Title>
        <PriceContainer>{pricing}</PriceContainer>
      </DescriptionContainer>
    </Container>
  );
};
