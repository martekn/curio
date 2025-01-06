import mixins from "@/theme/abstracts/mixins";
import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  ${({ theme }) => css`
    ${mixins.flow(theme.tokens.formGroupSpacing)}
  `}
`;

export const StyledInput = styled.input`
  ${({ theme }) => css`
    width: 100%;
    color: ${theme.tokens.formInputColor};
    font-family: ${theme.tokens.formInputFontFamily};
    font-weight: ${theme.tokens.formInputFontWeight};
    font-size: ${theme.tokens.formInputFontSize};
    background-color: ${theme.tokens.formInputBackgroundColor};
    border: ${theme.tokens.formInputBorderDefault};
    padding: ${theme.tokens.formInputPadding};
    border-radius: ${theme.tokens.formInputBorderRadius};

    &:focus-visible {
      outline: ${theme.tokens.formInputOutlineFocus};
      border: ${theme.tokens.formInputBorderFocus};
    }

    &:disabled {
      color: ${theme.tokens.formInputColorDisabled};
      background-color: ${theme.tokens.formInputBackgroundColorDisabled};
      border: ${theme.tokens.formInputBorderDisabled};
    }
  `}
`;

export const StyledTextarea = styled(StyledInput)`
  ${({ theme }) => css`
    min-height: ${theme.tokens.formTextareaMinHeight};
    resize: ${theme.tokens.formTextareaResize};
  `}
`;

export const StyledLabel = styled.label`
  ${({ theme }) => css`
    color: ${theme.tokens.formLabelColor};
    font-family: ${theme.tokens.formLabelFontFamily};
    font-weight: ${theme.tokens.formLabelFontWeight};
    font-size: ${theme.tokens.formLabelFontSize};
  `}
`;

export const StyledErrorMessage = styled.p`
  ${({ theme }) => css`
    margin-top: calc(${theme.tokens.formGroupSpacing} / 2);
    color: ${theme.tokens.formErrorColor};
    font-family: ${theme.tokens.formErrorFontFamily};
    font-weight: ${theme.tokens.formErrorFontWeight};
    font-size: ${theme.tokens.formErrorFontSize};
  `}
`;
