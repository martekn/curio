import { SkeletonContainer, SkeletonImage, SkeletonText } from "@/components/common/SkeletonLoader";
import { StyledContentLayout, StyledContentLayoutInner, StyledImageWrapper } from "./Hero.styles";
import { StyledSkeletonLayout } from "./SkeletonHero.styles";

/**
 * A skeleton loader component for a hero section, simulating the loading state with placeholders for text and an image.
 *
 * @returns A styled skeleton representation of a hero section, including placeholders for headings, subheadings, and an image.
 */
export const SkeletonHero = () => {
  return (
    <SkeletonContainer>
      <StyledSkeletonLayout>
        <StyledContentLayout>
          <StyledContentLayoutInner>
            <SkeletonText $height="3rem" $width="90%" />
            <SkeletonText $height="3rem" $width="50%" />
            <SkeletonText $height="1.5rem" $width="90%" />
            <SkeletonText $height="1.5rem" $width="40%" />
          </StyledContentLayoutInner>
          <SkeletonText $height="3rem" $width="9rem" />
        </StyledContentLayout>
        <StyledImageWrapper>
          <SkeletonImage $height="100%" />
        </StyledImageWrapper>
      </StyledSkeletonLayout>
    </SkeletonContainer>
  );
};
