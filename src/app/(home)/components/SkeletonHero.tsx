import { SkeletonContainer, SkeletonImage, SkeletonText } from "@/components/SkeletonLoader";
import mixins from "@/theme/abstracts/mixins";
import styled, { css } from "styled-components";

const Container = styled.div`
  ${({ theme }) => css`
    padding-block: ${theme.tokens.heroPaddingBlockSm};
    margin-top: ${theme.tokens.heroMarginTopSm};
    background-color: ${theme.colors.light.neutral200};
    display: grid;
    overflow: hidden;
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

const ContentLayout = styled.div`
  ${({ theme }) => css`
    ${mixins.flow(theme.sizes.size12)}

    @media (max-width: ${theme.breakpoints.md}) {
      ${mixins.flow(theme.sizes.size9)}
      padding-top: ${theme.tokens.heroPaddingBlockSm};
      ${mixins.container}
    }
  `}
`;

const Content = styled.div`
  ${({ theme }) => css`
    ${mixins.flow(theme.sizes.size3)}
    max-width: 60ch;
    @media (minx-width: ${theme.breakpoints.md}) {
      ${mixins.flow(theme.sizes.size5)}
    }
  `}
`;

const StyledSkeletonImage = styled(SkeletonImage)`
  ${({ theme }) => css`
    grid-row: 1;
    ${mixins.sectionBleed({ sectionPadding: theme.tokens.heroPaddingBlockSm, position: "top" })}
    position: relative;
    min-height: 30rem;

    @media (min-width: ${theme.breakpoints.md}) {
      grid-column: 2;
      ${mixins.sectionBleed({ sectionPadding: theme.tokens.heroPaddingBlockLg })}
    }
  `}
`;

/**
 * A skeleton loader component for a hero section, simulating the loading state with placeholders for text and an image.
 *
 * @returns A styled skeleton representation of a hero section, including placeholders for headings, subheadings, and an image.
 */
export const SkeletonHero = () => {
  return (
    <SkeletonContainer>
      <Container>
        <ContentLayout>
          <Content>
            <SkeletonText $height="3rem" $width="90%" />
            <SkeletonText $height="3rem" $width="50%" />
            <SkeletonText $height="1.5rem" $width="90%" />
            <SkeletonText $height="1.5rem" $width="40%" />
          </Content>
          <SkeletonText $height="3rem" $width="9rem" />
        </ContentLayout>
        <StyledSkeletonImage $height="100%" />
      </Container>
    </SkeletonContainer>
  );
};
