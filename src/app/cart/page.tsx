"use client";
import {
  cartAtom,
  fetchCartItemsAtom,
  fetchCartErrorAtom,
  fetchCartLoadingAtom,
  totalDiscountedPriceAtom,
  totalPriceAtom,
} from "@/atoms/cartAtom";
import { Button } from "@/components/Button";
import { useAtom, useAtomValue } from "jotai";
import { useEffect } from "react";
import { CartItem } from "./components/CartItem";
import { Container } from "@/components/Container";
import styled, { css } from "styled-components";
import { CartTableRow } from "./components/CartTableRow";
import { Heading } from "@/components/Heading";
import mixins from "@/theme/abstracts/mixins";

const OldPrice = styled.s`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize200};
    color: ${theme.tokens.bodyTextColorSecondary};
  `}
`;

const CheckoutButton = styled(Button)`
  ${({ theme }) => css`
    justify-self: end;
    @media (max-width: ${theme.breakpoints.sm}) {
      width: 100%;
    }
  `}
`;

const Checkout = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.sizes.size4};
  `}
`;
const PriceContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-self: end;
    align-items: end;
    gap: ${theme.sizes.size4};
    text-align: end;
    font-size: ${theme.typography.fontSize500};
  `}
`;

const Price = styled.td`
  ${({ theme }) => css`
    line-height: 1.3;
    font-weight: ${theme.typography.fontWeightMedium};
  `}
`;

const Main = styled.main`
  ${({ theme }) => css`
    margin-top: ${theme.tokens.mainMarginTop};
    ${mixins.flow()}
  `}
`;

const Table = styled.table`
  ${({ theme }) => css`
    width: 100%;
    @media (min-width: ${theme.breakpoints.md}) {
    }
  `}
`;

const TableHeader = styled.th`
  ${({ theme }) => css`
    font-weight: ${theme.typography.fontWeightMedium};
    font-size: ${theme.typography.fontSize200};
  `}
`;

const HiddenMobileTableHeader = styled(TableHeader)`
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.md}) {
      display: none;
    }
  `}
`;

/**
 * Shopping Cart component.
 *
 * Displays the user's shopping cart, including product details, quantity, total price,
 * and a checkout button. Fetches the cart items on mount and handles loading and error states.
 */
const Cart = () => {
  const [cartItems] = useAtom(cartAtom);
  const [fetchCartLoading] = useAtom(fetchCartLoadingAtom);
  const totalDiscountedPrice = useAtomValue(totalDiscountedPriceAtom);
  const totalPrice = useAtomValue(totalPriceAtom);
  const [fetchCartError] = useAtom(fetchCartErrorAtom);
  const [, fetchCart] = useAtom(fetchCartItemsAtom);
  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  if (fetchCartLoading) {
    return <p>loading...</p>;
  }

  if (fetchCartError) {
    return <p>something went wrong</p>;
  }

  return (
    <Container>
      <Main>
        <Heading headingLevel="h1" headingStyle="HEADING_1">
          Shopping cart
        </Heading>
        <Table>
          <thead>
            <CartTableRow>
              <TableHeader>Products</TableHeader>
              <HiddenMobileTableHeader>Quantity</HiddenMobileTableHeader>
              <HiddenMobileTableHeader>Remove</HiddenMobileTableHeader>
              <TableHeader>Total</TableHeader>
            </CartTableRow>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <CartItem item={item} key={item.product.id} />
            ))}
          </tbody>
        </Table>
        <Checkout>
          <PriceContainer>
            <div>Total price:</div>
            <Price>
              {totalPrice !== totalDiscountedPrice && <OldPrice> {totalPrice}</OldPrice>}
              <div> {totalDiscountedPrice}</div>
            </Price>
          </PriceContainer>
          <CheckoutButton variant="primary" href="/checkout/success">
            Go to checkout
          </CheckoutButton>
        </Checkout>
      </Main>
    </Container>
  );
};
export default Cart;
