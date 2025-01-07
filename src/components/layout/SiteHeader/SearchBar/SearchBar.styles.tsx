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
    /* padding: ${theme.tokens.formInputPadding}; */
    border-radius: ${theme.tokens.formInputBorderRadius};

    &:focus-within {
      outline: ${theme.tokens.formInputOutlineFocus};
      border: ${theme.tokens.formInputBorderFocus};
    }
  `}
`;

export const StyledInput = styled.input`
  ${({ theme }) => css`
    width: 100%;
    border: none;
    padding: ${theme.tokens.formInputPadding};
    background-color: transparent;

    &:focus {
      outline: none;
    }
  `}
`;

export const StyledButton = styled.button`
  ${({ theme }) => css`
    background-color: transparent;
    padding: ${theme.tokens.formInputPadding};
    border: 1px solid transparent;
    border-radius: 0 ${theme.tokens.borderRadius} ${theme.tokens.borderRadius} 0;
    transition: background-color ease-in-out 200ms;

    &:hover {
      background-color: ${theme.colors.light.neutral200};
    }

    > * {
      width: 1.25rem;
      height: 1.25rem;
    }
  `}
`;

export const StyledForm = styled.form`
  position: relative;
`;
