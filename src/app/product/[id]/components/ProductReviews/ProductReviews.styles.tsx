import styled, { css } from "styled-components";

export const StyledSubtitle = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.sizes.size4};
    align-items: center;
  `}
`;

export const StyledSmallText = styled.span`
  ${({ theme }) =>
    css`
      color: ${theme.colors.light.neutral400};
      font-size: ${theme.typography.fontSize300};
    `}
`;

export const StyledRatingWrapper = styled.div`
  ${({ theme }) => css`
    margin-block: ${theme.sizes.size4} ${theme.sizes.size8};
  `}
`;
export const StyledRating = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.sizes.size1};
    align-items: center;
    font-size: ${theme.typography.fontSize700};
    font-weight: ${theme.typography.fontWeightMedium};
  `}
`;

export const StyledReviewList = styled.ul`
  ${({ theme }) => css`
    > li {
      border-bottom: 1px solid ${theme.colors.light.primary100};
      border-bottom: 1px solid ${theme.colors.light.neutral300};
      padding-block: ${theme.sizes.size8};

      &:first-of-type {
        border-top: 1px solid ${theme.colors.light.primary100};
        border-top: 1px solid ${theme.colors.light.neutral300};
      }
    }
  `}
`;
