"use client";

import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { VisuallyHidden } from "react-aria";

const SpinnerCircle = styled(motion.div)<{ $size: string; $width: string }>`
  ${({ theme, $size, $width }) => css`
    width: ${$size};
    height: ${$size};
    border: ${$width} solid ${theme.colors.light.primary100};
    border-top: ${$width} solid ${theme.colors.light.primary400};
    border-radius: 50%;
  `}
`;

/**
 * Spinner component for displaying a loading indicator.
 *
 *
 * @param [width="0.2rem"] - The thickness of the spinner circle.
 * @param [size="2.5rem"] - The size (diameter) of the spinner circle.
 *
 * @returns A visually hidden "Loading..." text for screen readers
 * and a rotating spinner element visible to the user.
 */
export default function Spinner({ width = "0.2rem", size = "2.5rem", ...props }) {
  return (
    <div {...props}>
      <VisuallyHidden>Loading...</VisuallyHidden>
      <SpinnerCircle
        $width={width}
        $size={size}
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
