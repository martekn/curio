import { breakpoints } from "../abstracts/breakpoints";

type TMediaFeature = "min-width" | "max-width";

/**
 * Sets the style within the media query defined
 * within styled components
 * @param breakpoint - You can find the breakpoints object in theme/abstracts/breakpoints.ts
 * @param style - The style you want inside the media query
 * @param [mediaFeature] - min-width or max-width
 * @returns
 */
export const mediaQuery = (
  breakpoint: keyof typeof breakpoints,
  style: string,
  mediaFeature: TMediaFeature = "min-width"
) => {
  return `@media (${mediaFeature}: ${breakpoints[breakpoint]}) { ${style} }`;
};
