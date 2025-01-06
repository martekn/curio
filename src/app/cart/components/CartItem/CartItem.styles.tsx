import styled, { css } from "styled-components";
import Link from "next/link";
import mixins from "@/theme/abstracts/mixins";

/**
 * Styled component for the product container.
 * Dynamically adjusts layout based on the `$isMobile` prop.
 *
 * @property $isMobile - Indicates if the layout should be optimized for mobile devices.
 */
export const StyledCartItemProduct = styled.td<{ $isMobile: boolean }>`
  ${({ theme, $isMobile }) => css`
    display: grid;
    gap: ${theme.sizes.size4};

    grid-template-areas:
      "title "
      "actions";

    @media (max-width: ${theme.breakpoints.xs}) {
      > ${StyledProductImage} {
        display: none;
      }
    }

    @media (min-width: ${theme.breakpoints.xs}) {
      grid-template-columns: 1fr 3fr;
      gap: ${theme.sizes.size4};

      grid-template-areas:
        "image title"
        "image actions";
    }

    ${
      !$isMobile &&
      css`
      @media (min-width: ${theme.breakpoints.md}) {
        grid-template-areas:
        "image title"
        "image title";
        align-items: center;
    `
    }

    }
  `}
`;

export const StyledProductImage = styled(Link)`
  ${({ theme }) => css`
    grid-area: image;
    position: relative;
    width: 100%;
    padding-top: 100%;
    overflow: hidden;

    img {
      border-radius: ${theme.tokens.borderRadius};
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      inset: 0;
    }
  `}
`;

export const StyledProductTitle = styled(Link)`
  ${({ theme }) => css`
    grid-area: title;
    color: ${theme.tokens.bodyTextColor};
    text-decoration: none;
    font-weight: ${theme.typography.fontWeightMedium};

    &:hover {
      text-decoration: underline;
    }
  `}
`;

export const StyledProductActionContainer = styled.div`
  ${({ theme }) => css`
    grid-area: actions;
    display: flex;
    gap: ${theme.tokens.gridGap};
    align-self: end;
  `}
`;

const StyledQuantityWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    gap: ${theme.sizes.size4};
    line-height: 1;
    font-weight: ${theme.typography.fontWeightMedium};
  `}
`;

export const StyledQuantityWrapperMobile = styled(StyledQuantityWrapper)`
  grid-area: quantity;
`;

export const StyledQuantityWrapperDesktop = styled(StyledQuantityWrapper).attrs({ as: "td" })`
  justify-content: center;
`;

export const StyledCartItemButton = styled.button`
  ${({ theme }) => css`
    background-color: transparent;
    padding: 0.5em;
    color: ${theme.colors.light.neutral400};

    &:hover {
      color: ${theme.colors.light.neutral900};
    }

    > * {
      height: 1rem;
      width: 1rem;
    }
  `}
`;

const StyledRemoveButtonWrapper = styled.div`
  ${({ theme }) => css`
    > * {
      background-color: ${theme.colors.light.primary100};
      border-radius: ${theme.tokens.borderRadius};
    }
  `}
`;

export const StyledRemoveButtonWrapperMobile = styled(StyledRemoveButtonWrapper)`
  grid-area: remove;
`;

export const StyledRemoveButtonWrapperDesktop = styled(StyledRemoveButtonWrapper).attrs({ as: "td" })`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTotalPriceWrapper = styled.td`
  ${({ theme }) => css`
    ${mixins.flow(theme.sizes.size2)}
    font-weight: ${theme.typography.fontWeightMedium};
  `}
`;

export const StyledPriceOld = styled.s`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize200};
    color: ${theme.tokens.bodyTextColorSecondary};
  `}
`;
