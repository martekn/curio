import Link from "next/link";
import { css, styled } from "styled-components";

type ButtonVariant = "primary" | "secondary";

const StyledButton = styled.button<{ $variant: ButtonVariant }>`
  ${({ theme, $variant }) => css`
    display: inline-block;
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

interface Props {
  variant: ButtonVariant;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

/**
 * A button component that can be rendered as a link or a regular button based on the provided props.
 *
 * This component conditionally renders as an anchor (`<Link>`) if the `href` prop is provided, otherwise,
 * it renders a standard `<button>` element. It also accepts a `variant` prop to style the button in different ways
 * and the `onClick` prop to handle button click events.
 *
 * @param variant - The variant to apply different button styles (e.g., primary, secondary).
 * @param children - The content (text or elements) to display inside the button.
 * @param href - The URL to navigate to if the button is rendered as a link.
 * @param onClick - The function to execute when the button is clicked.
 *
 * @returns A styled button component, either a `<button>` or a `<Link>` based on the presence of `href`.
 */
export const Button = ({ variant, children, href, onClick, ...props }: Props) => {
  if (href) {
    return (
      <StyledButton as={Link} href={href} $variant={variant} {...props}>
        {children}
      </StyledButton>
    );
  }

  return (
    <StyledButton onClick={onClick} $variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};
