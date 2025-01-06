import { Product as TProduct } from "@/types";
import { VisuallyHidden } from "react-aria";
import { useCallback } from "react";
import { StyledLink } from "./LinkToRating.styles";

interface RatingLinkProps {
  rating: TProduct["rating"];
  targetId: string;
}

/**
 * Displays a link to the product's rating, allowing for smooth scrolling to the rating section.
 *
 * @param rating - The rating value of the product.
 * @param targetId - The ID of the target element for smooth scrolling.
 * @returns The JSX element representing the rating link.
 */
export const LinkToRating = ({ rating, targetId }: RatingLinkProps) => {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const target = document.getElementById(targetId);
      if (target) {
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition - 100; // Adjust this value to control how far it scrolls

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    },
    [targetId]
  );

  return (
    <StyledLink href={`#${targetId}`} onClick={handleClick}>
      <VisuallyHidden>Product rating: </VisuallyHidden>
      {rating}
    </StyledLink>
  );
};
