import styled, { css } from "styled-components";
import { ListBoxItem, Text } from "react-aria-components";

export const StyledWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-top: ${theme.sizes.size2};
    border: 1px solid ${theme.colors.light.neutral300};
    z-index: 100;
    position: absolute;
    border-radius: ${theme.tokens.borderRadius};
    background-color: ${theme.tokens.colorBackgroundDefault};
  `}
`;

export const StyledHeading = styled.h2`
  ${({ theme }) => css`
    padding: ${theme.sizes.size3} ${theme.sizes.size7};
    font-size: ${theme.typography.fontSize200};
    font-weight: ${theme.typography.fontWeightMedium};
    color: ${theme.colors.light.neutral400};
  `}
`;

export const StyledListBoxItem = styled(ListBoxItem)`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    gap: ${theme.sizes.size4};
    z-index: 2;
    padding: ${theme.sizes.size3} ${theme.sizes.size7};
    text-decoration: none;
  `}
`;

export const StyledAllListBoxItem = styled(StyledListBoxItem)`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize200};
    font-weight: ${theme.typography.fontWeightMedium};
    color: ${theme.tokens.bodyTextColor};
    gap: ${theme.sizes.size2};
    &:hover {
      text-decoration: underline;
    }
  `}
`;

export const StyledProductImage = styled.img`
  ${({ theme }) => css`
    border-radius: ${theme.tokens.borderRadius};
    pointer-events: none;
    height: 3rem;
    width: 3rem;
    object-fit: cover;
  `}
`;

export const StyledProductTitle = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.tokens.colorTextDefault};
    font-family: ${theme.tokens.colorTextDefault};
    font-size: ${theme.tokens.bodyFontSize};
    text-decoration: underline transparent;
    text-underline-offset: 2px;
    transition: text-decoration 200ms ease-in-out;

    &:hover {
      text-decoration-color: ${theme.tokens.colorTextDefault};
    }

    &::before {
      transition: background-color 200ms ease-in-out;
      display: block;
      content: "";
      position: absolute;
      inset: 0;
      cursor: pointer;
      z-index: -1;
    }

    &:hover::before {
      background-color: ${theme.colors.light.primary100};
    }
  `}
`;
