import styled, { css } from "styled-components";
import { RatingIcon } from "@/components/RatingIcon";
import { MAX_PRODUCT_RATING } from "@/constants";

const StarContainer = styled.ul`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.sizes.size2};
  `}
`;

/**
 * Renders a list of stars to visually represent a given rating.
 *
 * @param rating - The rating value (0 to MAX_PRODUCT_RATING).
 * @returns The JSX element containing the list of stars.
 */
export const Rating = ({ rating }: { rating: number }) => {
  const stars = [];
  const roundedRating = Math.round(rating * 2) / 2;

  for (let index = 0; index < MAX_PRODUCT_RATING; index++) {
    const parsedRating = parseInt(roundedRating.toString());

    const nonFilledVariant = roundedRating === parsedRating ? "empty" : "half";
    const variant = index < parsedRating ? "filled" : nonFilledVariant;

    stars.push(
      <li key={index}>
        <RatingIcon variant={variant} />
      </li>
    );
  }

  return <StarContainer>{stars}</StarContainer>;
};
