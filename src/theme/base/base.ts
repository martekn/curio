import { css } from "styled-components";
import { tokens } from "../abstracts";

export const base = css`
  body {
    font-family: ${tokens.bodyFontFamily};
    font-weight: ${tokens.bodyFontWeight};
    font-size: ${tokens.bodyFontSize};
    line-height: ${tokens.bodyLineHeight};
    color: ${tokens.bodyTextColor};
    background-color: ${tokens.bodyBackgroundColor};
    min-height: 100vh;
    height: 100%;
  }

  a {
    color: ${tokens.linkColor};
    text-decoration: ${tokens.linkTextDecoration};

    :is(:hover, :focus-visible) {
      color: ${tokens.linkColorHover};
      text-decoration: ${tokens.linkTextDecorationHover};
    }
  }
`;
