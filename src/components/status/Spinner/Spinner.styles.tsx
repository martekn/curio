"use client";

import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const StyledMotionSpinner = styled(motion.div)<{ $size: string; $width: string }>`
  ${({ theme, $size, $width }) => css`
    width: ${$size};
    height: ${$size};
    border: ${$width} solid ${theme.colors.light.primary100};
    border-top: ${$width} solid ${theme.colors.light.primary400};
    border-radius: 50%;
  `}
`;
