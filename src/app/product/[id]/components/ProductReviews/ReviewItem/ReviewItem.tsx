import { Heading } from "@/components/common/Heading";
import { ProductReview } from "@/types";
import { VisuallyHidden } from "react-aria";
import { StyledWrapper, StyledReviewHeader } from "./ReviewItem.styles";
import { Rating } from "../../Rating";

/**
 * Displays an individual review item, including the username, rating, and review description.
 *
 * @param review - A single review object containing `username`, `rating`, and `description`.
 * @returns A styled container for the review.
 */
export const ReviewItem = ({ review }: { review: ProductReview }) => {
  const { username, rating, description } = review;
  return (
    <StyledWrapper>
      <StyledReviewHeader>
        <Heading headingLevel="h3" headingStyle="HEADING_4">
          {username}
        </Heading>
        <Rating rating={rating} aria-hidden="true" />
        <VisuallyHidden>Rating: {rating}</VisuallyHidden>
      </StyledReviewHeader>
      <div>
        <p>{description}</p>
      </div>
    </StyledWrapper>
  );
};
