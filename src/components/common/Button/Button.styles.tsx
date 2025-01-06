import { css, styled } from "styled-components";
import { ButtonVariant } from "./types";

export const StyledButton = styled.button<{ $variant: ButtonVariant; $isLoading: boolean; $isSuccess: boolean }>`
  ${({ theme, $variant, $isLoading, $isSuccess }) => css`
    position: relative;
    text-align: center;
    font-family: ${theme.tokens.buttonFontFamily};
    font-size: ${theme.tokens.buttonFontSize};
    font-weight: ${theme.tokens.buttonFontWeight};
    text-transform: ${theme.tokens.buttonTextTransform};
    padding: ${theme.tokens.buttonPadding};
    border: ${theme.tokens.buttonBorder};
    border-radius: ${theme.tokens.buttonBorderRadius};
    transition: all ease-in-out 200ms;
    text-align: center;
    text-decoration: none;

    ${($isLoading || $isSuccess) &&
    css`
      > span {
        visibility: hidden;
      }
    `}

    ${$variant === "primary"
      ? css`
          color: ${theme.tokens.buttonPrimaryColor};
          background-color: ${theme.tokens.buttonPrimaryBackground};
          border-color: ${theme.tokens.buttonPrimaryBorderColor};

          &:hover,
          &:focus-visible {
            color: ${theme.tokens.buttonPrimaryColorHover};
            background-color: ${theme.tokens.buttonPrimaryBackgroundHover};
            border-color: ${theme.tokens.buttonPrimaryBorderColorHover};
          }
        `
      : css`
          color: ${theme.tokens.buttonSecondaryColor};
          background-color: ${theme.tokens.buttonSecondaryBackground};
          border-color: ${theme.tokens.buttonSecondaryBorderColor};

          &:hover,
          &:focus-visible {
            color: ${theme.tokens.buttonSecondaryColorHover};
            background-color: ${theme.tokens.buttonSecondaryBackgroundHover};
            border-color: ${theme.tokens.buttonSecondaryBorderColorHover};
          }
        `}
  `}
`;
export const IconWrapper = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
