"use client";
import {
  cartAtom,
  fetchCartItemsAtom,
  fetchCartErrorAtom,
  fetchCartLoadingAtom,
  totalDiscountedPriceAtom,
  totalPriceAtom,
  clearCartAtom,
} from "@/atoms/cartAtom";
import { Button } from "@/components/Button";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { CartItem } from "./components/CartItem";
import { Container } from "@/components/Container";
import styled, { css } from "styled-components";
import { CartTableRow } from "./components/CartTableRow";
import { Heading } from "@/components/Heading";
import mixins from "@/theme/abstracts/mixins";
import { Message } from "@/components/Message";
import Spinner from "@/components/Spinner";
import { useRouter } from "next/navigation";

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

const Price = styled.div`
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

const SpinnerContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  padding-block: 2rem;
`;

/**
 * A container component for the shopping cart page, wrapping the main content area.
 *
 * @param [children] - The child elements to render inside the container, typically cart items or related components.
 *
 * @returns A styled container for the shopping cart page, including the main heading and children.
 */
const CartContainer = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Container>
      <Main>
        <Heading headingLevel="h1" headingStyle="HEADING_1">
          Shopping cart
        </Heading>

        {children}
      </Main>
    </Container>
  );
};

/**
 * A table component to display cart items, with columns for products, quantity, removal, and total.
 *
 * @param [children] - The child elements to render inside the table body, typically `CartItem` components.
 *
 * @returns A styled table for the cart, including headers and children (cart item rows).
 */
const CartTable = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Table>
      <thead>
        <CartTableRow>
          <TableHeader>Products</TableHeader>
          <HiddenMobileTableHeader>Quantity</HiddenMobileTableHeader>
          <HiddenMobileTableHeader>Remove</HiddenMobileTableHeader>
          <TableHeader>Total</TableHeader>
        </CartTableRow>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  );
};

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
  const [cartLoading, setCartLoading] = useState(false);
  const checkout = useSetAtom(clearCartAtom);
  const router = useRouter();

  const handleCheckout = async () => {
    setCartLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 250));
    checkout();
    setCartLoading(false);
    router.push("/checkout/success");
  };

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);
  if (cartItems.length > 0 && !fetchCartLoading && !fetchCartError) {
    return (
      <CartContainer>
        <CartTable>
          {cartItems.map((item) => (
            <CartItem item={item} key={item.product.id} />
          ))}
        </CartTable>
        <Checkout>
          <PriceContainer>
            <div>Total price:</div>
            <Price>
              {totalPrice !== totalDiscountedPrice && <OldPrice> {totalPrice}</OldPrice>}
              <div> {totalDiscountedPrice}</div>
            </Price>
          </PriceContainer>
          <CheckoutButton variant="primary" onClick={handleCheckout} isLoading={cartLoading}>
            Go to checkout
          </CheckoutButton>
        </Checkout>
      </CartContainer>
    );
  }

  if (fetchCartError) {
    return (
      <CartContainer>
        <CartTable />
        <Message type="error" title="Unable to Load Your Cart">
          We&apos;re sorry, but we couldn&apos;t retrieve your cart items at the moment. Please check your internet
          connection and try again. If the issue persists, please contact our support team for assistance.
        </Message>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <CartTable />
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    </CartContainer>
  );
};
export default Cart;
