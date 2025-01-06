import Link from "next/link";
import { Spinner } from "../../status/Spinner";
import { Check } from "react-feather";
import { ButtonVariant } from "./types";
import { IconWrapper, StyledButton } from "./Button.styles";

interface Props {
  variant: ButtonVariant;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  isLoading?: boolean;
  isSuccess?: boolean;
  type?: "button" | "submit" | "reset";
}

/**
 * A button component that can be rendered as a link or a regular button based on the provided props.
 *
 * This component conditionally renders as an anchor (`<Link>`) if the `href` prop is provided, otherwise,
 * it renders a standard `<button>` element. It also accepts a `variant` prop to style the button in different ways
 * and the `onClick` prop to handle button click events.
 *
 * When `isLoading` is `true`, the button shows a spinner, disables user interactions,
 * and hides the button content visually while keeping it accessible for screen readers.
 *
 * @param variant - The variant to apply different button styles (e.g., primary, secondary).
 * @param children - The content (text or elements) to display inside the button.
 * @param href - The URL to navigate to if the button is rendered as a link.
 * @param onClick - The function to execute when the button is clicked.
 * @param [isLoading=false] - If `true`, displays a loading spinner
 * @param [isSuccess=false] - If `true`, displays a checkmark
 *
 * @returns A styled button component, either a `<button>` or a `<Link>` based on the presence of `href`.
 */
export const Button = ({ variant, children, href, onClick, isLoading = false, isSuccess = false, ...props }: Props) => {
  if (href) {
    return (
      <StyledButton as={Link} href={href} $variant={variant} $isLoading={isLoading} $isSuccess={isSuccess} {...props}>
        {isLoading && (
          <IconWrapper>
            <Spinner size="1rem" />
          </IconWrapper>
        )}

        {isSuccess && (
          <IconWrapper>
            <Check />
          </IconWrapper>
        )}

        <span>{children}</span>
      </StyledButton>
    );
  }

  return (
    <StyledButton
      onClick={onClick}
      $variant={variant}
      $isLoading={isLoading}
      disabled={isLoading || isSuccess}
      $isSuccess={isSuccess}
      {...props}
    >
      {isLoading && (
        <IconWrapper>
          <Spinner size="1rem" />
        </IconWrapper>
      )}

      {isSuccess && (
        <IconWrapper>
          <Check />
        </IconWrapper>
      )}

      <span>{children}</span>
    </StyledButton>
  );
};
