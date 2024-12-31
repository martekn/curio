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
 * A component that visually represents a star-based rating system.
 *
 * This component displays a maximum of stars defined by the `MAX_PRODUCT_RATING` constant.
 * The number of "filled" stars corresponds to the provided `rating` prop, while the remaining
 * stars are displayed as "empty." Each star is rendered using the `RatingIcon` component.
 *
 * @param rating - The rating value that determines the number of filled stars.
 *   - Should be a number between 0 and `MAX_PRODUCT_RATING` (inclusive).
 *   - Values greater than `MAX_PRODUCT_RATING` are capped.
 * @returns An unordered list (`ul`) visually representing the rating as a series of styled stars.
 */
export const Rating = ({ rating }: { rating: number }) => {
  const stars = [];

  for (let index = 0; index < MAX_PRODUCT_RATING; index++) {
    const variant = index < rating ? "filled" : "empty";

    stars.push(
      <li key={index}>
        <RatingIcon variant={variant} />
      </li>
    );
  }

  return <StarContainer>{stars}</StarContainer>;
};
