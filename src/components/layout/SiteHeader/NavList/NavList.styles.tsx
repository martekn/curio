import styled, { css } from "styled-components";
import { DeviceVariant } from "@/types";

interface StyledListProps {
  $variant: DeviceVariant;
}

export const StyledList = styled.ul<StyledListProps>`
  ${({ theme, $variant }) => css`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;

    ${$variant === "mobile"
      ? css`
          display: flex;
          flex-direction: column;
        `
      : css`
          display: flex;
          align-items: center;
          gap: ${theme.sizes.size5};
        `}
  `}
`;
