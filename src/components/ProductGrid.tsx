import styled, { css } from "styled-components";

/**
 * A responsive grid container for displaying products.
 * The grid adjusts based on the screen size using CSS Grid Layout.
 * It uses the theme's spacing and breakpoints to set up the layout, ensuring consistency across the application.
 *
 * On small screens, the grid will display two columns, while on medium and larger screens, it will display four columns.
 * The gap between the grid items also adjusts based on the screen size.
 *
 * This component is intended to be used as a container for product cards or similar grid items.
 *
 * @example
 * <ProductGrid>
 *   <ProductCard />
 *   <ProductCard />
 *   ...
 * </ProductGrid>
 */
export const ProductGrid = styled.div`
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
