import Image from "next/image";
import { Plus, Minus, X } from "react-feather";
import { decreaseProductQuantityAtom, increaseProductQuantityAtom, removeFromCartAtom } from "@/atoms/cartAtom";
import { useSetAtom } from "jotai";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { breakpoints } from "@/theme/abstracts";
import { CartItem as TCartItem } from "@/types";
import { VisuallyHidden } from "react-aria";
import { CartTableRow } from "../CartTableRow";
import {
  StyledCartItemButton,
  StyledPriceOld,
  StyledCartItemProduct,
  StyledProductActionContainer,
  StyledProductImage,
  StyledProductTitle,
  StyledQuantityWrapperDesktop,
  StyledQuantityWrapperMobile,
  StyledRemoveButtonWrapperDesktop,
  StyledRemoveButtonWrapperMobile,
  StyledTotalPriceWrapper,
} from "./CartItem.styles";

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
      <StyledCartItemProduct $isMobile={isMobile}>
        <StyledProductImage href={`/product/${id}`}>
          <VisuallyHidden>Visit product</VisuallyHidden>
          <Image src={image.url} alt={image.alt} width={300} height={300} />
        </StyledProductImage>
        <StyledProductTitle href={`/product/${id}`}>{title}</StyledProductTitle>
        {/* Mobile only */}
        {isMobile && (
          <StyledProductActionContainer>
            <StyledQuantityWrapperMobile>
              <StyledCartItemButton onClick={() => decreaseQuantity(item.product.id)}>
                <Minus aria-hidden="true" />
                <VisuallyHidden>Decrease quantity</VisuallyHidden>
              </StyledCartItemButton>
              <span>{quantity}</span>
              <StyledCartItemButton onClick={() => increaseQuantity(item.product.id)}>
                <Plus aria-hidden="true" />
                <VisuallyHidden>Increase quantity</VisuallyHidden>
              </StyledCartItemButton>
            </StyledQuantityWrapperMobile>
            <StyledRemoveButtonWrapperMobile>
              <StyledCartItemButton onClick={() => remove(item.product.id)}>
                <X aria-hidden="true" />
                <VisuallyHidden>Remove product</VisuallyHidden>
              </StyledCartItemButton>
            </StyledRemoveButtonWrapperMobile>
          </StyledProductActionContainer>
        )}
        {/* Mobile only end */}
      </StyledCartItemProduct>
      {/* Desktop only */}
      {!isMobile && (
        <>
          <StyledQuantityWrapperDesktop>
            <StyledCartItemButton onClick={() => decreaseQuantity(item.product.id)}>
              <Minus aria-hidden="true" />
              <VisuallyHidden>Decrease quantity</VisuallyHidden>
            </StyledCartItemButton>
            <span>{quantity}</span>
            <StyledCartItemButton onClick={() => increaseQuantity(item.product.id)}>
              <Plus aria-hidden="true" />
              <VisuallyHidden>Increase quantity</VisuallyHidden>
            </StyledCartItemButton>
          </StyledQuantityWrapperDesktop>
          <StyledRemoveButtonWrapperDesktop>
            <StyledCartItemButton onClick={() => remove(item.product.id)}>
              <X aria-hidden="true" />
              <VisuallyHidden>Remove product</VisuallyHidden>
            </StyledCartItemButton>
          </StyledRemoveButtonWrapperDesktop>
        </>
      )}
      {/* Desktop only end */}
      <StyledTotalPriceWrapper>
        {discountedPrice !== price && <StyledPriceOld>${(price * quantity).toFixed(2)}</StyledPriceOld>}
        <div>${(discountedPrice * quantity).toFixed(2)}</div>
      </StyledTotalPriceWrapper>
    </CartTableRow>
  );
};
