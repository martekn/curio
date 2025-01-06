import styled, { css } from "styled-components";
import { Star } from "react-feather";
import { StarVariant } from "./types";

export const StyledStarIcon = styled(Star)<{ $variant: StarVariant; $size: string }>`
  ${({ theme, $variant, $size }) => css`
    stroke-width: 1px;
    height: ${$size};
    width: ${$size};

    ${$variant === "empty" &&
    css`
      fill: none;
      stroke: ${theme.colors.light.neutral400};
    `}

    ${$variant === "half" &&
    css`
      position: absolute;
      fill: ${theme.colors.light.neutral900};
      stroke: ${theme.colors.light.neutral900};
      clip-path: inset(0 50% 0 0);
    `}

    ${$variant === "filled" &&
    css`
      position: absolute;
      fill: ${theme.colors.light.neutral900};
      stroke: ${theme.colors.light.neutral900};
    `}
  `}
`;

export const StyledWrapper = styled.div`
  position: relative;
`;
