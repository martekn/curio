"use client";

import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { ProductGrid } from "@/components/ProductGrid";
import { API_URL } from "@/constants";
import { useFetch } from "@/hooks/useFetch";
import mixins from "@/theme/abstracts/mixins";
import { Product, ProductsFetch } from "@/types";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const Main = styled.main`
  ${({ theme }) => css`
    margin-top: ${theme.tokens.mainMarginTop};
    ${mixins.flow(theme.tokens.gridGap)}
  `}
`;

/**
 * The page that displays all the available products.
 *
 * This component fetches a list of products from the API and renders them in a grid format. It displays a heading
 * with the text "All products" and uses the `ProductGrid` component to render the fetched products.
 *
 * The component utilizes the `useFetch` hook to retrieve the product data and stores the fetched products in
 * the component's state. If there is an error or no data, it will not render any products.
 *
 * @returns A container with a heading and a grid of all products.
 */
const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { data, error } = useFetch<ProductsFetch>(API_URL, "get");

  useEffect(() => {
    if (!error && data && "data" in data && Array.isArray(data.data)) {
      setProducts(data.data);
    }
  }, [data, error]);

  return (
    <Container>
      <Main>
        <Heading headingLevel="h1" headingStyle="HEADING_2">
          All products
        </Heading>
        <ProductGrid products={products} isError={error} cardCount={16} />
      </Main>
    </Container>
  );
};

export default Products;
