import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr auto;
    width: 100%;
    color: ${theme.tokens.formInputColor};
    font-family: ${theme.tokens.formInputFontFamily};
    font-weight: ${theme.tokens.formInputFontWeight};
    font-size: ${theme.tokens.formInputFontSize};
    background-color: ${theme.tokens.formInputBackgroundColor};
    border: ${theme.tokens.formInputBorderDefault};
    border-color: ${theme.colors.light.neutral300};
    padding: ${theme.tokens.formInputPadding};
    border-radius: ${theme.tokens.formInputBorderRadius};

    &:focus-within {
      outline: ${theme.tokens.formInputOutlineFocus};
      border: ${theme.tokens.formInputBorderFocus};
    }
  `}
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const StyledButton = styled.button`
  background-color: transparent;
  > * {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const StyledForm = styled.form`
  position: relative;
`;
