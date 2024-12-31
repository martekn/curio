import styled, { css } from "styled-components";
import { Star } from "react-feather";

type StarVariant = "empty" | "filled";

const Icon = styled(Star)<{ $variant: StarVariant }>`
  ${({ theme, $variant }) => css`
    stroke-width: 0.1rem;
    height: 1rem;
    width: 1rem;
    ${$variant === "empty"
      ? css`
          fill: none;
          stroke: ${theme.colors.light.neutral400};
        `
      : css`
          fill: ${theme.colors.light.neutral900};
          stroke: ${theme.colors.light.neutral900};
        `}
  `}
`;

/**
 * A component that renders a styled star icon to represent a rating.
 *
 * The star icon uses different styles based on the `variant` prop, which determines whether the star is "empty" or "filled."
 * The styles are applied using `styled-components` with theme-based colors.
 *
 * @component
 * @param variant - Determines the appearance of the star icon.
 *   - `"empty"`: The star icon has no fill and a neutral stroke color.
 *   - `"filled"`: The star icon is filled with a dark neutral color.
 * @returns A styled `Star` icon representing a rating state.
 */
export const RatingIcon = ({ variant }: { variant: StarVariant }) => {
  return <Icon $variant={variant} />;
};
