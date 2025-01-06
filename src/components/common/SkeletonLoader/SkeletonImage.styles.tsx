import styled, { css } from "styled-components";
import { SkeletonBase } from "./SkeletonBase.styles";

/**
 * A styled component for skeleton loaders resembling images.
 *
 * @param [$height="200px"] - The height of the skeleton image. Defaults to 200px.
 *
 * @returns A styled div simulating an image loader.
 */
export const SkeletonImage = styled(SkeletonBase)<{ $height?: string }>`
  ${({ $height }) => css`
    width: 100%;
    height: ${$height || "200px"};
  `}
`;
