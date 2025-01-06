import styled, { css } from "styled-components";

export const StyledStarList = styled.ul`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.sizes.size2};
  `}
`;
