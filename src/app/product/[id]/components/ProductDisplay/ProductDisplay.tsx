import { Product } from "@/types";
import { StyledBackgroundImage, StyledOverlay, StyledWrapper, StyledImage } from "./ProductDisplay.styles";

/**
 * Displays a product image with a blurred background and an overlay for visual effect.
 *
 * @param alt - The alt text for the image, used for accessibility.
 * @param url - The URL of the image to display.
 * @returns The JSX element for the product display.
 */
export const ProductDisplay = ({
  alt,
  url,
}: {
  alt: Product["image"]["alt"] | undefined;
  url: Product["image"]["url"] | undefined;
}) => {
  return (
    <StyledWrapper>
      <StyledOverlay />
      {url && (
        <>
          <StyledBackgroundImage $image={url} />
          <StyledImage src={url} alt={alt ?? ""} width={500} height={500} />
        </>
      )}
    </StyledWrapper>
  );
};
