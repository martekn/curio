"use client";

import { VisuallyHidden } from "react-aria";
import { StyledMotionSpinner } from "./Spinner.styles";

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
export const Spinner = ({ width = "0.2rem", size = "2.5rem", ...props }) => {
  return (
    <div {...props}>
      <VisuallyHidden>Loading...</VisuallyHidden>
      <StyledMotionSpinner
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
};
