import { StyledLogoLink } from "./Logo.styles";
import { LogoSize } from "./types";

interface Props {
  size: LogoSize;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

/**
 * Renders a logo in either small or large size with an optional click handler.
 *
 * @param [size="lg"] - The size of the logo. Use "sm" for small or "lg" for large (default).
 * @param [onClick] - A callback function triggered when the logo is clicked. Receives a React mouse event as its argument.
 * @returns  The rendered Logo component.
 */
export const Logo = ({ size = "lg", onClick }: Props) => {
  return (
    <StyledLogoLink href="/" onClick={onClick} $variant={size}>
      Curio
    </StyledLogoLink>
  );
};
