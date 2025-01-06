import styled, { css } from "styled-components";

/**
 * A styled `section` element with theme-based vertical margins.
 *
 * This component uses the `sectionPaddingBlock` token from the theme to apply consistent
 * vertical spacing (`margin-block`) above and below the section.
 *
 * @returns A styled `section` element with dynamic vertical margins.
 */
export const Section = styled.section`
  ${({ theme }) => css`
    margin-block: ${theme.tokens.sectionPaddingBlock};
  `}
`;
