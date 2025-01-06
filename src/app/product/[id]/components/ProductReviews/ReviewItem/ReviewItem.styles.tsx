import styled, { css } from "styled-components";
import mixins from "@/theme/abstracts/mixins";

export const StyledWrapper = styled.div`
  ${({ theme }) => css`
    ${mixins.flow(theme.sizes.size3)}
  `}
`;

export const StyledReviewHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.tokens.gridGap};
  `}
`;
