import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";
import mixins from "@/theme/abstracts/mixins";
import { Product } from "@/types";
import Image from "next/image";
import styled, { css } from "styled-components";

const Container = styled.section`
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

const ImageContainer = styled.div`
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

/**
 * A component that displays a hero section for showcasing a featured product.
 *
 * @param product - The product to showcase in the hero section.
 *   - If product is `undefined`, the hero section will not render.
 * @returns The hero section component if a product is provided, otherwise `null`.
 */
export const Hero = ({ product }: { product: Product | undefined }) => {
  if (product) {
    return (
      <Container>
        <ContentLayout>
          <Content>
            <Heading headingLevel="h2" headingStyle="HEADING_1_LG">
              Have you tried our {product.title}?
            </Heading>
            <p>{product.description}</p>
          </Content>

          <Button variant="primary" href={`/product/${product.id}`}>
            Shop now
          </Button>
        </ContentLayout>
        <ImageContainer>
          <Image src={product.image.url} alt={product.image.alt} width={600} height={900} />
        </ImageContainer>
      </Container>
    );
  }
};
