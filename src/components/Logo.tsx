import styled, { css } from "styled-components";
import Link from "next/link";

const Logo_base = styled(Link)`
  ${({ theme }) => css`
    text-decoration: none;
    font-family: ${theme.tokens.logoFontFamily};
    font-weight: ${theme.tokens.logoFontWeight};
    color: ${theme.tokens.logoColor};
  `}
`;
const Logo_sm = styled(Logo_base)`
  ${({ theme }) => css`
    font-size: ${theme.tokens.logoSmFontSize};
  `}
`;
const Logo_lg = styled(Logo_base)`
  ${({ theme }) => css`
    font-size: ${theme.tokens.logoLgFontSize};
  `}
`;

interface Props {
  size: "sm" | "lg";
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
  if (size === "sm") {
    return (
      <Logo_sm href="/" onClick={onClick}>
        Curio
      </Logo_sm>
    );
  }
  return (
    <Logo_lg href="/" onClick={onClick}>
      Curio
    </Logo_lg>
  );
};
