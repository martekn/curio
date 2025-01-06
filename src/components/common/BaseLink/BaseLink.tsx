import Link from "next/link";
import styled, { css } from "styled-components";

export const BaseLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.tokens.linkColor};
    text-decoration: ${theme.tokens.linkTextDecoration};

    &:hover,
    &:focus-visible {
      color: ${theme.tokens.linkColorHover};
      text-decoration: ${theme.tokens.linkTextDecorationHover};
    }
  `}
`;
