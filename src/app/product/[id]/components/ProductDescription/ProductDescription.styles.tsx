import styled, { css } from "styled-components";
import mixins from "@/theme/abstracts/mixins";

export const StyledWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.sizes.size6};
    ${mixins.flow(theme.sizes.size3)}

    button {
      width: 100%;
    }
  `}
`;

export const StyledRatingWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.sizes.size2};
    position: relative;
    color: ${theme.colors.light.neutral400};
    font-size: ${theme.typography.fontSize200};

    > a::after {
      position: absolute;
      inset: 0;
      content: "";
      display: block;
    }
  `}
`;

export const StyledPriceWrapper = styled(StyledWrapper)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.sizes.size3};
  `}
`;
