import styled, { css } from "styled-components";
import { DeviceVariant } from "@/types";

interface StyledRowProps {
  $variant: DeviceVariant;
}

export const StyledRow = styled.div<StyledRowProps>`
  ${({ theme, $variant }) => css`
    padding: ${theme.sizes.size3} 0;
    ${$variant === "mobile"
      ? css`
          border-bottom: 1px solid ${theme.colors.light.primary100};
        `
      : ""}
  `}
`;
