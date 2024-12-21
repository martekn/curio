import { css } from "styled-components";
import { fontSizes } from "../abstracts/typography";
import { breakpoints } from "../abstracts";

export const createFontSizeProperties = () => {
  const fontSizeProperties: string[] = [];
  for (const [breakpoint, sizesObject] of Object.entries(fontSizes)) {
    let properties = ``;

    for (const [sizeName, size] of Object.entries(sizesObject)) {
      properties += `--font-size-${sizeName}: ${size};`;
    }

    if (breakpoint !== "default") {
      const mediaQuery = `
        @media (min-width: ${breakpoints.md}) {
          ${properties}
        }
      `;

      fontSizeProperties.push(mediaQuery);
    } else {
      fontSizeProperties.push(properties);
    }
  }

  return fontSizeProperties.join("\n");
};

export const root = css`
  :root {
    ${createFontSizeProperties()}/* ... */
  }
`;
