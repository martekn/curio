import mixins from "@/theme/abstracts/mixins";
import styled from "styled-components";

/**
 * A styled `div` element that serves as a responsive container.
 *
 * Utilizes the `container` mixin to apply styles for dynamic width and automatic horizontal margins.
 * The width of the container adapts based on the screen size and theme tokens:
 * - It is constrained by the theme's `containerMaxWidth`.
 * - Margins are adjusted to ensure the content is centered with appropriate spacing.
 *
 * @returns A styled `div` element representing a responsive container.
 */
export const Container = styled.div`
  ${mixins.container()}
`;
