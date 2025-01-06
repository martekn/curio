import styled, { css } from "styled-components";
import Link from "next/link";
import { LogoSize } from "./types";

export const StyledLogoLink = styled(Link)<{ $variant: LogoSize }>`
  ${({ theme, $variant }) => css`
    text-decoration: none;
    font-family: ${theme.tokens.logoFontFamily};
    font-weight: ${theme.tokens.logoFontWeight};
    color: ${theme.tokens.logoColor};
    font-size: ${$variant === "sm" ? theme.tokens.logoSmFontSize : theme.tokens.logoLgFontSize};
  `}
`;
