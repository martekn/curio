import mixins from "@/theme/abstracts/mixins";
import styled, { css } from "styled-components";

export const StyledHeroLayout = styled.section`
  ${({ theme }) => css`
    padding-block: ${theme.tokens.heroPaddingBlockSm};
    margin-top: ${theme.tokens.heroMarginTopSm};
    background-color: ${theme.colors.light.primary100};
    display: grid;

    @media (min-width: ${theme.breakpoints.md}) {
      padding-block: ${theme.tokens.heroPaddingBlockLg};
      margin-top: ${theme.tokens.heroMarginTopLg};
      border-radius: ${theme.tokens.borderRadius};
      grid-template-columns: 1fr 1fr;
      ${mixins.container}

      > * {
        margin-left: ${theme.sizes.size12};
      }
    }
  `}
`;

export const StyledContentLayout = styled.div`
  ${({ theme }) => css`
    ${mixins.flow(theme.sizes.size12)}

    @media (max-width: ${theme.breakpoints.md}) {
      ${mixins.flow(theme.sizes.size9)}
      padding-top: ${theme.tokens.heroPaddingBlockSm};
      ${mixins.container}
    }
  `}
`;

export const StyledContentLayoutInner = styled.div`
  ${({ theme }) => css`
    ${mixins.flow(theme.sizes.size3)}
    max-width: 60ch;
    @media (minx-width: ${theme.breakpoints.md}) {
      ${mixins.flow(theme.sizes.size5)}
    }
  `}
`;

export const StyledImageWrapper = styled.div`
  ${({ theme }) => css`
    grid-row: 1;
    ${mixins.sectionBleed({ sectionPadding: theme.tokens.heroPaddingBlockSm, position: "top" })}
    position: relative;
    min-height: 30rem;

    img {
      width: 100%;
      position: absolute;
      inset: 0;
    }

    @media (min-width: ${theme.breakpoints.md}) {
      img {
        border-radius: 0 ${theme.tokens.borderRadius} ${theme.tokens.borderRadius} 0;
      }

      grid-column: 2;
      ${mixins.sectionBleed({ sectionPadding: theme.tokens.heroPaddingBlockLg })}
    }
  `}
`;
