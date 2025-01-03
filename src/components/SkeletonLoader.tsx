import styled, { css } from "styled-components";
import { motion } from "framer-motion";

interface SkeletonType {
  $width?: string;
  $height?: string;
  $margin?: string;
}

/**
 * A styled base component for skeleton loaders, providing a consistent background and border radius.
 *
 * @returns A styled div with default skeleton loader styles.
 */
export const SkeletonBase = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.light.neutral300};
    border-radius: ${theme.tokens.borderRadius};
  `}
`;

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

/**
 * A container for skeleton components, animating the opacity for a pulsing effect.
 *
 * @param children - The child elements wrapped inside the skeleton container.
 *
 * @returns  A div containing animated skeleton components.
 */
export const SkeletonContainer = ({ children, ...props }: { children: React.ReactNode }) => {
  return (
    <div {...props}>
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        {children}
      </motion.div>
    </div>
  );
};
