import styled, { css } from "styled-components";

export const StyledProductsList = styled.ul`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.sizes.size5};

    @media (min-width: ${theme.breakpoints.xs}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: ${theme.breakpoints.md}) {
      gap: ${theme.sizes.size7};
    }
    @media (min-width: ${theme.breakpoints.lg}) {
      grid-template-columns: repeat(4, 1fr);
    }
  `}
`;
