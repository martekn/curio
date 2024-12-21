import { css, styled } from "styled-components";

/**
 * Base styles for all buttons.
 * Defines common typography, padding, border, and transition styles based on theme tokens.
 *
 * @example
 * const Button = styled(buttonBaseStyles)`
 *   color: #fff;
 *   background-color: #007bff;
 * `;
 */
const buttonBaseStyles = styled.button`
  ${({ theme }) => css`
    display: block;
    font-family: ${theme.tokens.buttonFontFamily};
    font-size: ${theme.tokens.buttonFontSize};
    font-weight: ${theme.tokens.buttonFontWeight};
    text-transform: ${theme.tokens.buttonTextTransform};
    padding: ${theme.tokens.buttonPadding};
    border: ${theme.tokens.buttonBorder};
    border-radius: ${theme.tokens.buttonBorderRadius};
    transition: all ease-in-out 200ms;
  `}
`;

/**
 * A styled button component with primary styles.
 * Applies primary colors for text, background, and border based on theme tokens.
 */
export const PrimaryButton = styled(buttonBaseStyles)`
  ${({ theme }) => css`
    color: ${theme.tokens.buttonPrimaryColor};
    background-color: ${theme.tokens.buttonPrimaryBackground};
    border-color: ${theme.tokens.buttonPrimaryBorderColor};

    &:hover,
    &:focus-visible {
      color: ${theme.tokens.buttonPrimaryColorHover};
      background-color: ${theme.tokens.buttonPrimaryBackgroundHover};
      border-color: ${theme.tokens.buttonPrimaryBorderColorHover};
    }
  `}
`;

/**
 * A styled button component with secondary styles.
 * Applies secondary colors for text, background, and border based on theme tokens.
 */
export const SecondaryButton = styled(buttonBaseStyles)`
  ${({ theme }) => css`
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
`;
