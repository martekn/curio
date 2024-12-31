import { css } from "styled-components";

/**
 * A mixin that applies consistent vertical spacing between direct children of a container.
 *
 * @param [flowSpace="1rem"] - The spacing to apply between elements. Defaults to "1rem".
 * @returns A string of CSS styles.
 */
const flow = (flowSpace = "1rem") => css`
  > *:where(:not(:first-child)) {
    margin-top: ${flowSpace};
  }
`;

/**
 * A mixin for truncating text with an ellipsis for single-line content.
 *
 * @returns A string of CSS styles.
 */
const ellipseText = () => css`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

/**
 * A mixin that creates a responsive container with dynamic width and automatic horizontal margins.
 *
 * The container width is calculated based on the theme's `containerMinMarginInline` and
 * `containerMaxWidth` values to ensure the content is centered with responsive margins.
 *
 * The container width is:
 * - The full width of the screen minus twice the `containerMinMarginInline`, if less than `containerMaxWidth`.
 * - Otherwise, constrained by `containerMaxWidth`.
 *
 * @returns A string of CSS styles.
 */
const container = () => css`
  ${({ theme }) => css`
    width: min(100% - ${theme.tokens.containerMinMarginInline} * 2, ${theme.tokens.containerMaxWidth});
    margin-inline: auto;
  `}
`;

interface SectionBleedProps {
  position?: "full" | "top" | "bottom";
  paddingTop?: string;
  paddingBottom?: string;
  sectionPadding: string;
}

/**
 * A mixin for creating sections that visually "bleed" outside their container.
 * It adjusts margins and height based on the specified `position`.
 *
 * @param props - The properties to configure the section bleed behavior.
 * @param props.sectionPadding - The padding used to calculate the bleed area.
 * @param [props.position="full"] - Determines how the section bleeds outside its container.
 * @param [props.paddingTop="0px"] - Top padding of the section.
 * @param [props.paddingBottom="0px"] - Bottom padding of the section.
 * @returns A string of CSS styles.
 */
const sectionBleed = ({
  sectionPadding,
  position = "full",
  paddingTop = "0px",
  paddingBottom = "0px",
}: SectionBleedProps) => {
  const imgStyles = css`
    img {
      height: 100%;
      object-fit: cover;
    }
  `;
  switch (position) {
    case "top":
      return css`
        ${imgStyles}

        margin-top: calc(${sectionPadding} * -1);
      `;
    case "bottom":
      return css`
        ${imgStyles}

        margin-bottom: calc(${sectionPadding} * -1);
      `;

    default:
      return css`
        ${imgStyles}
        height: calc((100% + ${sectionPadding} * 2) - ${paddingTop} - ${paddingBottom});

        margin-bottom: calc(${sectionPadding} * -1);
        margin-top: calc(${sectionPadding} * -1);
        transform: translateY(calc((${paddingTop} * 0.5) + (${paddingBottom} * -0.5)));
      `;
  }
};
const mixins = { flow, ellipseText, container, sectionBleed };

export default mixins;
