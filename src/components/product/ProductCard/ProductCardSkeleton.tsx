import { SkeletonContainer, SkeletonText } from "../../common/SkeletonLoader";
import { StyledBody, StyledSkeletonImage } from "./ProductCardSkeleton.styles";

/**
 * A skeleton loader component for a product card, simulating the loading state with placeholders.
 *
 * @returns A styled skeleton representation of a product card, including placeholders for an image and description text.
 */
export const ProductCardSkeleton = () => {
  return (
    <SkeletonContainer>
      <StyledSkeletonImage $height="0" />
      <StyledBody>
        <SkeletonText $height="1.5rem" $width="70%" />
        <SkeletonText $height="1.5rem" $width="30%" />
      </StyledBody>
    </SkeletonContainer>
  );
};
