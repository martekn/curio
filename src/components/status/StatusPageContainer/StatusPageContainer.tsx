import styled, { css } from "styled-components";
import { Container } from "../../common/Container";

/**
 * A styled container used for status pages such as the 404 or checkout success pages.
 *
 * This component extends the existing `Container` component and dynamically renders as a `<main>` element, providing
 * a consistent layout for status pages. It uses a grid layout to center content and ensures appropriate spacing and text alignment.
 *
 * @returns A styled container acting as the `main` element for status pages, with a centered grid layout and responsive design.
 */
export const StatusPageContainer = styled(Container).attrs({ as: "main" })`
  ${({ theme }) => css`
    margin-top: ${theme.sizes.size14};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: ${theme.sizes.size6};
    p {
      max-width: 70ch;
    }
  `}
`;
