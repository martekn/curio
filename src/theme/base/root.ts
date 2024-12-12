import { css } from "styled-components";
import { fontSizes } from "../abstracts/typography";
import { mediaQuery } from "../utils/mediaQuery";

export const createFontSizeProperties = () => {
  const arr: string[] = [];
  for (const [breakpoint, sizesObject] of Object.entries(fontSizes)) {
    let thing = ``;

    for (const [sizeName, size] of Object.entries(sizesObject)) {
      thing += `--font-size-${sizeName}: ${size};`;
    }

    if (breakpoint !== "default") {
      const thing2 = mediaQuery("md", thing);

      arr.push(thing2);
    } else {
      arr.push(thing);
    }
  }

  return arr.join("\n");
};

export const root = css`
  :root {
    ${createFontSizeProperties()}/* ... */
  }
`;
