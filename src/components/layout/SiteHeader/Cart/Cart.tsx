import { quantityTotalAtom } from "@/atoms/cartAtom";
import { useAtomValue } from "jotai";
import { StyledLink, StyledIcon, StyledQuantity } from "./Cart.styles";

/**
 * A component that renders a cart icon with the total quantity of items in the cart.
 * The quantity is retrieved from a state atom and displayed next to the icon.
 *
 * @returns The rendered CartIcon component, which includes a cart icon and the total cart quantity.
 */
export const Cart = () => {
  const totalCartQuantity = useAtomValue(quantityTotalAtom);

  return (
    <StyledLink href="/cart">
      <StyledIcon />
      <StyledQuantity>{totalCartQuantity}</StyledQuantity>
    </StyledLink>
  );
};
