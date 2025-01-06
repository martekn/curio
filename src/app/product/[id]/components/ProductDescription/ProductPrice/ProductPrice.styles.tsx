import styled, { css } from "styled-components";

export const StyledPrice = styled.span`
  ${({ theme }) => css`
    line-height: 1;
    font-size: ${theme.typography.fontSize700};
    font-weight: ${theme.typography.fontWeightMedium};
  `}
`;

export const StyledDiscount = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.light.primary400};
  `}
`;

export const StyledPriceOld = styled.s`
  ${({ theme }) => css`
    text-decoration: line-through;
    color: ${theme.colors.light.neutral400};
  `}
`;

export const StyledPriceDiscounted = styled(StyledPrice)`
  ${({ theme }) => css`
    color: ${theme.colors.light.primary400};
  `}
`;
