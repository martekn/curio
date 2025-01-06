import styled, { css } from "styled-components";

export const StyledForm = styled.form`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.sizes.size7};
  `}
`;
