import { Product } from "@/types";
import Image from "next/image";
import styled, { css } from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 400px;
  padding-top: 66%;
  overflow: hidden;
`;
const BackgroundImage = styled.div<{ $image: string }>`
  ${({ $image }) => css`
    position: absolute;
    object-fit: cover;
    inset: -10%;
    background: url(${$image}) no-repeat center;
    z-index: 1;

    -webkit-filter: blur(100px);
    -moz-filter: blur(100px);
    -o-filter: blur(100px);
    -ms-filter: blur(100px);
    filter: blur(100px);
  `}
`;
const BackgroundOverlay = styled.div`
  position: absolute;
  object-fit: cover;
  inset: 0;
  z-index: 2;
  background-color: #eaeaea45;
`;

const StyledImage = styled(Image)`
  position: absolute;
  z-index: 9999;
  inset: 0;
  margin: 0 auto;
  height: 100%;
  width: auto;
  object-fit: contain;
`;

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
    <Container>
      <BackgroundOverlay />
      {url && (
        <>
          <BackgroundImage $image={url} />
          <StyledImage src={url} alt={alt ?? ""} width={500} height={500} />
        </>
      )}
    </Container>
  );
};
