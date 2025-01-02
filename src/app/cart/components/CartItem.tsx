import Image from "next/image";
import { CartTableRow } from "./CartTableRow";
import { Plus, Minus, X } from "react-feather";
import styled, { css } from "styled-components";
import { decreaseProductQuantityAtom, increaseProductQuantityAtom, removeFromCartAtom } from "@/atoms/cartAtom";
import Link from "next/link";
import { useSetAtom } from "jotai";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { breakpoints } from "@/theme/abstracts";
import { CartItem as TCartItem } from "@/types";
import mixins from "@/theme/abstracts/mixins";
import { VisuallyHidden } from "react-aria";

/**
 * Styled component for the product container.
 * Dynamically adjusts layout based on the `$isMobile` prop.
 *
 * @property $isMobile - Indicates if the layout should be optimized for mobile devices.
 */
const Product = styled.td<{ $isMobile: boolean }>`
  ${({ theme, $isMobile }) => css`
    display: grid;
    gap: ${theme.sizes.size4};

    grid-template-areas:
      "title "
      "actions";

    @media (max-width: ${theme.breakpoints.xs}) {
      > ${ProductImage} {
        display: none;
      }
    }

    @media (min-width: ${theme.breakpoints.xs}) {
      grid-template-columns: 1fr 3fr;
      gap: ${theme.sizes.size4};

      grid-template-areas:
        "image title"
        "image actions";
    }

    ${
      !$isMobile &&
      css`
      @media (min-width: ${theme.breakpoints.md}) {
        grid-template-areas:
        "image title"
        "image title";
        align-items: center;
    `
    }

    }
  `}
`;

const ProductImage = styled(Link)`
  ${({ theme }) => css`
    grid-area: image;
    position: relative;
    width: 100%;
    padding-top: 100%;
    overflow: hidden;

    img {
      border-radius: ${theme.tokens.borderRadius};
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      inset: 0;
    }
  `}
`;

const ProductTitle = styled(Link)`
  ${({ theme }) => css`
    grid-area: title;
    color: ${theme.tokens.bodyTextColor};
    text-decoration: none;
    font-weight: ${theme.typography.fontWeightMedium};

    &:hover {
      text-decoration: underline;
    }
  `}
`;

const ProductActionContainer = styled.div`
  ${({ theme }) => css`
    grid-area: actions;
    display: flex;
    gap: ${theme.tokens.gridGap};
    align-self: end;
  `}
`;

const Quantity = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    gap: ${theme.sizes.size4};
    line-height: 1;
    font-weight: ${theme.typography.fontWeightMedium};
  `}
`;

const QuantityMobile = styled(Quantity)`
  grid-area: quantity;
`;

const QuantityDesktop = styled(Quantity).attrs({ as: "td" })`
  justify-content: center;
`;

const CartItemAction = styled.button`
  ${({ theme }) => css`
    background-color: transparent;
    padding: 0.5em;
    color: ${theme.colors.light.neutral400};

    &:hover {
      color: ${theme.colors.light.neutral900};
    }

    > * {
      height: 1rem;
      width: 1rem;
    }
  `}
`;

const Remove = styled.div`
  ${({ theme }) => css`
    > * {
      background-color: ${theme.colors.light.primary100};
      border-radius: ${theme.tokens.borderRadius};
    }
  `}
`;

const RemoveMobile = styled(Remove)`
  grid-area: remove;
`;

const RemoveDesktop = styled(Remove).attrs({ as: "td" })`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Total = styled.td`
  ${({ theme }) => css`
    ${mixins.flow(theme.sizes.size2)}
    font-weight: ${theme.typography.fontWeightMedium};
  `}
`;

const OldPrice = styled.s`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize200};
    color: ${theme.tokens.bodyTextColorSecondary};
  `}
`;

/**
 * Renders a single cart item row with responsive layout.
 *
 * @param item - The cart item data.
 * @returns The rendered cart item component.
 */
export const CartItem = ({ item }: { item: TCartItem }) => {
  const {
    quantity,
    product: { image, title, id, discountedPrice, price },
  } = item;

  const increaseQuantity = useSetAtom(increaseProductQuantityAtom);
  const decreaseQuantity = useSetAtom(decreaseProductQuantityAtom);
  const remove = useSetAtom(removeFromCartAtom);

  const isMobile = useMediaQuery(`(max-width: ${breakpoints.md})`);

  return (
    <CartTableRow>
      <Product $isMobile={isMobile}>
        <ProductImage href={`/product/${id}`}>
          <VisuallyHidden>Visit product</VisuallyHidden>
          <Image src={image.url} alt={image.alt} width={300} height={300} />
        </ProductImage>
        <ProductTitle href={`/product/${id}`}>{title}</ProductTitle>
        {/* Mobile only */}
        {isMobile && (
          <ProductActionContainer>
            <QuantityMobile>
              <CartItemAction onClick={() => decreaseQuantity(item.product.id)}>
                <Minus aria-hidden="true" />
                <VisuallyHidden>Decrease quantity</VisuallyHidden>
              </CartItemAction>
              <span>{quantity}</span>
              <CartItemAction onClick={() => increaseQuantity(item.product.id)}>
                <Plus aria-hidden="true" />
                <VisuallyHidden>Increase quantity</VisuallyHidden>
              </CartItemAction>
            </QuantityMobile>
            <RemoveMobile onClick={() => remove(item.product.id)}>
              <CartItemAction>
                <X aria-hidden="true" />
                <VisuallyHidden>Remove product</VisuallyHidden>
              </CartItemAction>
            </RemoveMobile>
          </ProductActionContainer>
        )}
        {/* Mobile only end */}
      </Product>
      {/* Desktop only */}
      {!isMobile && (
        <>
          <QuantityDesktop>
            <CartItemAction onClick={() => decreaseQuantity(item.product.id)}>
              <Minus aria-hidden="true" />
              <VisuallyHidden>Decrease quantity</VisuallyHidden>
            </CartItemAction>
            <span>{quantity}</span>
            <CartItemAction onClick={() => increaseQuantity(item.product.id)}>
              <Plus aria-hidden="true" />
              <VisuallyHidden>Increase quantity</VisuallyHidden>
            </CartItemAction>
          </QuantityDesktop>
          <RemoveDesktop onClick={() => remove(item.product.id)}>
            <CartItemAction>
              <X aria-hidden="true" />
              <VisuallyHidden>Remove product</VisuallyHidden>
            </CartItemAction>
          </RemoveDesktop>
        </>
      )}
      {/* Desktop only end */}
      <Total>
        {discountedPrice !== price && <OldPrice>${(price * quantity).toFixed(2)}</OldPrice>}
        <div>${(discountedPrice * quantity).toFixed(2)}</div>
      </Total>
    </CartTableRow>
  );
};
