import styled, { css } from "styled-components";
import { HeadingStyle } from "./types";

export const StyledHeading = styled.div<{ $headingStyle: HeadingStyle }>`
  ${({ theme, $headingStyle }) => css`
    font-family: ${theme.tokens.headingFontFamilyDefault};
    color: ${theme.tokens.headingColorDefault};
    font-weight: ${theme.tokens.headingFontWeightDefault};
    letter-spacing: ${theme.tokens.headingLetterSpacing};
    line-height: ${theme.tokens.headingLineHeight};
    text-transform: ${theme.tokens.headingTextTransform};

    ${$headingStyle === "HEADING_1_LG" &&
    css`
      font-family: ${theme.tokens.heading1LgFontFamily};
      font-size: ${theme.tokens.heading1LgFontSize};
      font-weight: ${theme.tokens.heading1LgFontWeight};
      color: ${theme.tokens.heading1LgColor};
    `}

    ${$headingStyle === "HEADING_1" &&
    css`
      font-family: ${theme.tokens.heading1FontFamily};
      font-size: ${theme.tokens.heading1FontSize};
      font-weight: ${theme.tokens.heading1FontWeight};
      color: ${theme.tokens.heading1Color};
    `}

    ${$headingStyle === "HEADING_2" &&
    css`
      font-family: ${theme.tokens.heading2FontFamily};
      font-size: ${theme.tokens.heading2FontSize};
      font-weight: ${theme.tokens.heading2FontWeight};
      color: ${theme.tokens.heading2Color};
    `}

    ${$headingStyle === "HEADING_3" &&
    css`
      font-family: ${theme.tokens.heading3FontFamily};
      font-size: ${theme.tokens.heading3FontSize};
      font-weight: ${theme.tokens.heading3FontWeight};
      color: ${theme.tokens.heading3Color};
    `}

    ${$headingStyle === "HEADING_4" &&
    css`
      font-family: ${theme.tokens.heading4FontFamily};
      font-size: ${theme.tokens.heading4FontSize};
      font-weight: ${theme.tokens.heading4FontWeight};
      color: ${theme.tokens.heading4Color};
    `}
  `}
`;
