import styled, { css } from "styled-components";
import { Button } from "react-aria-components";

/**
 * A styled button designed for navigation interactions.
 * It uses the Button component from react-aria-components
 */
export const NavButton = styled(Button)`
  ${({ theme }) => css`
    background-color: transparent;

    &[data-hovered] {
      color: ${theme.colors.light.neutral400};
    }
  `}
`;
