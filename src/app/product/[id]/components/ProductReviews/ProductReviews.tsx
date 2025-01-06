import { Heading } from "@/components/common/Heading";
import { RatingIcon } from "@/components/product/RatingIcon";
import { Product } from "@/types";
import { ReviewItem } from "./ReviewItem";
import {
  StyledRating,
  StyledRatingWrapper,
  StyledReviewList,
  StyledSmallText,
  StyledSubtitle,
} from "./ProductReviews.styles";

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
        <StyledRatingWrapper>
          <StyledSubtitle>
            <Heading headingLevel="p" headingStyle="HEADING_4">
              Average rating
            </Heading>
            <StyledSmallText>
              (based on {reviews.length} {reviews.length > 1 ? "reviews" : "review"})
            </StyledSmallText>
          </StyledSubtitle>
          <StyledRating>
            <RatingIcon variant="filled" size="1.5rem" /> {rating}
          </StyledRating>
        </StyledRatingWrapper>
        <StyledReviewList>
          {reviews?.map((review) => (
            <li key={review.id}>
              <ReviewItem review={review} />
            </li>
          ))}
        </StyledReviewList>
      </div>
    );
  }

  return (
    <div id="rating">
      {Title}
      <StyledRatingWrapper>
        <StyledSmallText>No reviews yet</StyledSmallText>
      </StyledRatingWrapper>
    </div>
  );
};
