import { Product } from "@/types";
import { ProductCard, ProductCardSkeleton } from "../ProductCard";
import { Message } from "../../status/Message";
import { StyledProductsList } from "./ProductGrid.styles";

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
export const ProductGrid = ({
  products,
  isError = false,
  isLoading = false,
  cardCount = 4,
}: {
  products: Product[] | undefined;
  isLoading?: boolean;
  isError?: boolean;
  cardCount?: number;
}) => {
  const keys = [...Array(cardCount).keys()];

  if (isError && !isLoading) {
    return (
      <Message type="error" title="Oops! Something went wrong">
        We&apos;re unable to load the products at the moment. Please check your internet connection or try again later.
        If the issue persists, contact our support team.
      </Message>
    );
  }

  if (products && products.length > 0 && !isLoading) {
    return (
      <StyledProductsList>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </StyledProductsList>
    );
  }

  return (
    <StyledProductsList>
      {keys.map((key) => (
        <li key={key}>
          <ProductCardSkeleton />
        </li>
      ))}
    </StyledProductsList>
  );
};
