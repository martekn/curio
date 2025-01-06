import { StyledWrapper, StyledStarIcon } from "./RatingIcon.styles";
import { StarVariant } from "./types";

/**
 * Renders a rating icon based on the provided variant.
 *
 * @param variant - The variant of the star ("filled", "half", or "empty").
 * @param [size="1rem"] - The size of the star icon (e.g., "1rem", "24px").
 * @returns The JSX element representing a single rating icon.
 */
export const RatingIcon = ({ variant, size = "1rem" }: { variant: StarVariant; size?: string }) => {
  return (
    <StyledWrapper>
      {variant !== "empty" && <StyledStarIcon $variant={variant} $size={size} />}
      <StyledStarIcon $variant="empty" $size={size} />
    </StyledWrapper>
  );
};
