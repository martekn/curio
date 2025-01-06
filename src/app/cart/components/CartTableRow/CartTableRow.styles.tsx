import styled, { css } from "styled-components";

/**
 * A styled `tr` element representing a cart table row.
 *
 * This component adjusts its layout based on the viewport width, using a grid layout
 * for responsive alignment of columns.
 *
 * @example
 * ```jsx
 * <CartTableRow>
 *   <td>Product</td>
 *   <td>Quantity</td>
 *   <td>Price</td>
 *   <td>Total</td>
 * </CartTableRow>
 * ```
 */
export const CartTableRow = styled.tr`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-items: center;
    align-items: center;

    > td:last-of-type,
    > th:last-of-type {
      justify-self: end;
      text-align: end;
    }

    > td:first-of-type,
    > th:first-of-type {
      justify-self: start;
      text-align: start;
    }

    border-bottom: 1px solid ${theme.colors.light.neutral300};
    padding-block: ${theme.sizes.size4};

    > * {
      width: 100%;
    }

    @media (min-width: ${theme.breakpoints.md}) {
      grid-template-columns: 7fr 2fr 2fr 1fr;
    }
  `}
`;
