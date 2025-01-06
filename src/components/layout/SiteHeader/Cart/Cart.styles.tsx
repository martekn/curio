import Link from "next/link";
import { ShoppingCart } from "react-feather";
import styled, { css } from "styled-components";

export const StyledLink = styled(Link)`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.light.neutral900};
    padding: 0.25em 0.5em 0.25em 0;
    border-radius: ${theme.tokens.borderRadius};

    &:hover ${StyledQuantity} {
      background-color: ${theme.colors.light.primary300};
    }

    > * {
      pointer-events: none;
    }
  `}
`;

export const StyledIcon = styled(ShoppingCart)`
  ${({ theme }) => css`
    height: ${theme.sizes.size7};
    width: ${theme.sizes.size7};
  `}
`;

export const StyledQuantity = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.1em;
    min-height: 1.22em;
    min-width: 1.22em;
    line-height: 0;
    display: grid;
    place-items: center;
    font-weight: ${theme.typography.fontWeightBold};
    font-size: 0.85rem;

    border-radius: ${theme.tokens.borderRadius};
    background-color: ${theme.colors.light.primary400};
    color: ${theme.colors.light.neutral100};
    transition: background-color ease-in-out 200ms;
  `}
`;
