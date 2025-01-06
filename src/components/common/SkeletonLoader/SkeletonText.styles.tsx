import styled, { css } from "styled-components";
import { SkeletonBase } from "./SkeletonBase.styles";

interface SkeletonType {
  $width?: string;
  $height?: string;
  $margin?: string;
}

/**
 * A styled component for skeleton loaders resembling text.
 *
 * @param [$width="100%"] - The width of the skeleton text. Defaults to 100%.
 * @param [$height="20px"] - The height of the skeleton text. Defaults to 20px.
 * @param [$margin="0"] - The margin around the skeleton text. Defaults to 0.
 *
 * @returns A styled div simulating a text loader.
 */
export const SkeletonText = styled(SkeletonBase)<SkeletonType>`
  ${({ $height, $width, $margin }) => css`
    height: ${$height || "20px"};
    width: ${$width || "100%"};
    margin: ${$margin || "0"};
  `}
`;
