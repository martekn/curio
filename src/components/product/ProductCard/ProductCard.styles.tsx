import styled, { css } from "styled-components";
import Image from "next/image";
import mixins from "@/theme/abstracts/mixins";
import Link from "next/link";

export const StyledCardWrapper = styled.div`
  ${({ theme }) => css`
    box-shadow: ${theme.tokens.cardShadow};
    border-radius: ${theme.tokens.cardBorderRadius};
    background-color: ${theme.tokens.cardBackgroundDefault};
    color: ${theme.tokens.cardColorDefault};
    ${mixins.flow(theme.sizes.size4)}
    position: relative;
  `}
`;

export const StyledImageWrapper = styled.div`
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

export const StyledImage = styled(Image)`
  ${({ theme }) => css`
    position: absolute;
    inset: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: ${theme.tokens.cardImageBorderRadius};
  `}
`;

export const StyledBodyWrapper = styled.div`
  ${({ theme }) => css`
    ${mixins.flow(theme.tokens.cardFlowSpacing)}
    padding: ${theme.tokens.cardPadding};
  `}
`;

export const StyledPriceWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.sizes.size3};
    font-size: ${theme.tokens.cardFontSizeSmall};
  `}
`;

export const StyledDiscount = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.typography.fontWeightMedium};
    background-color: ${theme.colors.light.primary400};
    color: ${theme.tokens.colorBackgroundDefault};
    padding: 0.05em 0.25em;
    border-radius: ${theme.tokens.cardImageBorderRadius};
  `}
`;

export const StyledOldPrice = styled.s`
  ${({ theme }) => css`
    font-size: ${theme.tokens.cardFontSizeExtraSmall};
  `}
`;
export const StyledPrice = styled.span`
  ${({ theme }) => css`
    color: ${theme.tokens.bodyTextColor};
  `}
`;
export const StyledPriceSale = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.light.primary400};
    font-weight: ${theme.typography.fontWeightMedium};
  `}
`;

export const StyledTitleLink = styled(Link)`
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
