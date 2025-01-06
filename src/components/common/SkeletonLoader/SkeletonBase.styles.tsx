import styled, { css } from "styled-components";

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
