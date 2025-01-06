import { DeviceVariant } from "@/types";
import { StyledRow } from "./HeaderRow.styles";

interface Props {
  children: React.ReactNode;
  variant: DeviceVariant;
}

/**
 * A component that renders a styled header row, applying different styles
 * based on the `variant` prop (e.g., "mobile" or "desktop").
 *
 * @param children - The child elements to render inside the header row.
 * @param variant - Determines the styling variant for the header row.
 * @returns The rendered HeaderRow component.
 */
export const HeaderRow = ({ children, variant }: Props) => {
  return <StyledRow $variant={variant}>{children}</StyledRow>;
};
