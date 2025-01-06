import { Container } from "@/components/common/Container";
import styled, { css } from "styled-components";
import { Dialog, Popover } from "react-aria-components";

// Includes !important for the `inset` and `max-height` properties to override the default popover styling effectively.
export const StyledPopover = styled(Popover)`
  ${({ theme }) => css`
    inset: 0 !important;
    max-height: unset !important;
    width: 100%;
    height: 100vh;
    background-color: ${theme.colors.light.neutral100};
  `}
`;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StyledDialog = styled(Dialog)`
  &:focus-visible {
    outline: none;
  }
`;
