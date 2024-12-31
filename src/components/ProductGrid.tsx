import { Product } from "@/types";
import styled, { css } from "styled-components";
import { ProductCard } from "./ProductCard";

export const StyledProductGrid = styled.ul`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.sizes.size5};

    @media (min-width: ${theme.breakpoints.xs}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: ${theme.breakpoints.md}) {
      grid-template-columns: repeat(4, 1fr);
      gap: ${theme.sizes.size7};
    }
  `}
`;

/**
 * A component that renders a grid of products.
 *
 * This component maps through an array of `Product` objects and renders each as a `ProductCard`
 * inside a styled grid container. Each product is wrapped in a `<li>` element, with a unique `key`
 * based on the product's `id`.
 *
 * @param products - An array of `Product` objects to display in the grid.
 * @returns A styled grid containing product cards.
 */
export const ProductGrid = ({ products }: { products: Product[] | undefined }) => {
  if (products) {
    return (
      <StyledProductGrid>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </StyledProductGrid>
    );
  }
};
