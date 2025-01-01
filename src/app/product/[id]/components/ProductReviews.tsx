import { Heading } from "@/components/Heading";
import { RatingIcon } from "@/components/RatingIcon";
import { Product, ProductReview } from "@/types";
import { Rating } from "./Rating";
import styled, { css } from "styled-components";
import mixins from "@/theme/abstracts/mixins";
import { VisuallyHidden } from "react-aria";

const Subtitle = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.sizes.size4};
    align-items: center;
  `}
`;

const SmallText = styled.span`
  ${({ theme }) =>
    css`
      color: ${theme.colors.light.neutral400};
      font-size: ${theme.typography.fontSize300};
    `}
`;

const AverageRatingContainer = styled.div`
  ${({ theme }) => css`
    margin-block: ${theme.sizes.size4} ${theme.sizes.size8};
  `}
`;
const AverageRating = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.sizes.size1};
    align-items: center;
    font-size: ${theme.typography.fontSize700};
    font-weight: ${theme.typography.fontWeightMedium};
  `}
`;

const ReviewList = styled.ul`
  ${({ theme }) => css`
    > li {
      border-bottom: 1px solid ${theme.colors.light.primary100};
      border-bottom: 1px solid ${theme.colors.light.neutral300};
      padding-block: ${theme.sizes.size8};

      &:first-of-type {
        border-top: 1px solid ${theme.colors.light.primary100};
        border-top: 1px solid ${theme.colors.light.neutral300};
      }
    }
  `}
`;

const ReviewItemContainer = styled.div`
  ${({ theme }) => css`
    ${mixins.flow(theme.sizes.size3)}
  `}
`;

const ReviewItemHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.tokens.gridGap};
  `}
`;

/**
 * Displays an individual review item, including the username, rating, and review description.
 *
 * @param review - A single review object containing `username`, `rating`, and `description`.
 * @returns A styled container for the review.
 */
const ReviewItem = ({ review }: { review: ProductReview }) => {
  const { username, rating, description } = review;
  return (
    <ReviewItemContainer>
      <ReviewItemHeader>
        <Heading headingLevel="h3" headingStyle="HEADING_4">
          {username}
        </Heading>
        <Rating rating={rating} aria-hidden="true" />
        <VisuallyHidden>Rating: {rating}</VisuallyHidden>
      </ReviewItemHeader>
      <div>
        <p>{description}</p>
      </div>
    </ReviewItemContainer>
  );
};

/**
 * Renders a list of product reviews and the average rating for a product.
 *
 * @param reviews - An array of reviews for the product.
 * Each review includes a username, rating, and description.
 * @param rating - The average rating of the product.
 * @returns A container displaying reviews, the average rating, or a message if no reviews exist.
 */
export const ProductReviews = ({
  reviews,
  rating,
}: {
  reviews: Product["reviews"] | undefined;
  rating: Product["rating"] | undefined;
}) => {
  const Title = (
    <Heading headingLevel="h2" headingStyle="HEADING_2">
      Reviews
    </Heading>
  );

  if (reviews && reviews.length > 0) {
    return (
      <div id="rating">
        {Title}
        <AverageRatingContainer>
          <Subtitle>
            <Heading headingLevel="p" headingStyle="HEADING_4">
              Average rating
            </Heading>
            <SmallText>
              (based on {reviews.length} {reviews.length > 1 ? "reviews" : "review"})
            </SmallText>
          </Subtitle>
          <AverageRating>
            <RatingIcon variant="filled" size="1.5rem" /> {rating}
          </AverageRating>
        </AverageRatingContainer>
        <ReviewList>
          {reviews?.map((review) => (
            <li key={review.id}>
              <ReviewItem review={review} />
            </li>
          ))}
        </ReviewList>
      </div>
    );
  }

  return (
    <div id="rating">
      {Title}
      <AverageRatingContainer>
        <SmallText>No reviews yet</SmallText>
      </AverageRatingContainer>
    </div>
  );
};
