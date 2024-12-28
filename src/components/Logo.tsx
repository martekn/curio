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

export const Logo = ({ size = "lg" }: { size: "sm" | "lg" }) => {
  if (size === "sm") {
    return <Logo_sm href="/">Curio</Logo_sm>;
  }
  return <Logo_lg href="/">Curio</Logo_lg>;
};
