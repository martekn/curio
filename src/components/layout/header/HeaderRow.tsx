import styled, { css } from "styled-components";
import { DeviceVariant } from "@/types";

interface HeaderRowProps {
  children: React.ReactNode;
  variant: DeviceVariant;
}

interface StyledHeaderRowProps {
  $variant: DeviceVariant;
}

export const StyledHeaderRow = styled.div<StyledHeaderRowProps>`
  ${({ theme, $variant }) => css`
    padding: ${theme.sizes.size3} 0;
    ${$variant === "mobile"
      ? css`
          border-bottom: 1px solid ${theme.colors.light.primary100};
        `
      : ""}
  `}
`;

/**
 * A component that renders a styled header row, applying different styles
 * based on the `variant` prop (e.g., "mobile" or "desktop").
 *
 * @param children - The child elements to render inside the header row.
 * @param variant - Determines the styling variant for the header row.
 * @returns The rendered HeaderRow component.
 */
export const HeaderRow = ({ children, variant }: HeaderRowProps) => {
  return <StyledHeaderRow $variant={variant}>{children}</StyledHeaderRow>;
};
