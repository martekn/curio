import styled, { css } from "styled-components";
import { SkeletonText, SkeletonImage, SkeletonContainer } from "../SkeletonLoader";
import mixins from "@/theme/abstracts/mixins";

const StyledSkeletonImage = styled(SkeletonImage)`
  position: relative;
  padding-top: 66%;
`;

const DescriptionContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.sizes.size4};
    ${mixins.flow(theme.tokens.cardFlowSpacing)};
  `}
`;

/**
 * A skeleton loader component for a product card, simulating the loading state with placeholders.
 *
 * @returns A styled skeleton representation of a product card, including placeholders for an image and description text.
 */
export const ProductCardSkeleton = () => {
  return (
    <SkeletonContainer>
      <StyledSkeletonImage $height="0" />
      <DescriptionContainer>
        <SkeletonText $height="1.5rem" $width="70%" />
        <SkeletonText $height="1.5rem" $width="30%" />
      </DescriptionContainer>
    </SkeletonContainer>
  );
};
