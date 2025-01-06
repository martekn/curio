import { Button } from "@/components/common/Button";
import { Heading } from "@/components/common/Heading";
import { Product } from "@/types";
import Image from "next/image";
import { SkeletonHero } from "./SkeletonHero";
import { StyledHeroLayout, StyledContentLayoutInner, StyledContentLayout, StyledImageWrapper } from "./Hero.styles";

/**
 * A component that displays a hero section for showcasing a featured product.
 *
 * @param product - The product to showcase in the hero section.
 *   - If product is `undefined`, the hero section will not render.
 * @returns The hero section component if a product is provided, otherwise skeleton loader.
 */
export const Hero = ({ product }: { product: Product | undefined }) => {
  if (product) {
    return (
      <StyledHeroLayout>
        <StyledContentLayout>
          <StyledContentLayoutInner>
            <Heading headingLevel="h2" headingStyle="HEADING_1_LG">
              Have you tried our {product.title}?
            </Heading>
            <p>{product.description}</p>
          </StyledContentLayoutInner>

          <Button variant="primary" href={`/product/${product.id}`}>
            Shop now
          </Button>
        </StyledContentLayout>
        <StyledImageWrapper>
          <Image src={product.image.url} alt={product.image.alt} width={600} height={900} />
        </StyledImageWrapper>
      </StyledHeroLayout>
    );
  }

  return <SkeletonHero />;
};
