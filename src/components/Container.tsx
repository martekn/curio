import styled, { css } from "styled-components";

/**
 * A styled `div` element that serves as a container with dynamic width and automatic horizontal margins.
 * The width of the container is calculated based on the theme's `containerMinMarginInline` and `containerMaxWidth` values.
 * The container ensures that the content is centered and has responsive margins.
 *
 * The width of the container will always be:
 * - The full width of the screen minus twice the `containerMinMarginInline` if that is smaller than `containerMaxWidth`.
 * - Otherwise, it will be constrained by `containerMaxWidth`.
 *
 * @returns A styled `div` element representing a responsive container.
 */
export const Container = styled.div`
  ${({ theme }) => css`
    width: min(100% - ${theme.tokens.containerMinMarginInline} * 2, ${theme.tokens.containerMaxWidth});
    margin-inline: auto;
  `}
`;
