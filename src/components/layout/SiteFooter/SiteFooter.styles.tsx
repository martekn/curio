import Link from "next/link";
import styled, { css } from "styled-components";

export const StyledFooter = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.tokens.footerBackgroundColor};
    color: ${theme.tokens.footerTextColor};
    padding: ${theme.tokens.siteFooterPadding};
    margin: ${theme.tokens.siteFooterMargin};
  `}
`;

export const StyledLayout = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.tokens.gridGap};
    align-items: center;
    justify-content: space-between;
    @media (min-width: ${theme.breakpoints.sm}) {
      flex-direction: row;
    }
  `}
`;

export const StyledList = styled.ul`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.tokens.gridGap};
  `}
`;

export const StyledLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.tokens.footerLinkColor};
    text-decoration: ${theme.tokens.footerLinkTextDecoration};

    &:hover {
      color: ${theme.tokens.footerLinkColorHover};
      text-decoration: ${theme.tokens.footerLinkTextDecorationHover};
    }
  `}
`;

export const StyledFootnote = styled.span`
  ${({ theme }) => css`
    color: ${theme.tokens.bodyTextColorSecondary};
    font-size: ${theme.typography.fontSize200};
  `}
`;
