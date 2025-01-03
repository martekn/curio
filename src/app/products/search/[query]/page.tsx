"use client";

import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Message } from "@/components/Message";
import { ProductGrid } from "@/components/ProductGrid";
import { API_URL } from "@/constants";
import { useFetch } from "@/hooks/useFetch";
import mixins from "@/theme/abstracts/mixins";
import { Product, ProductsFetch } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const Main = styled.main`
  ${({ theme }) => css`
    margin-top: ${theme.tokens.mainMarginTop};
    ${mixins.flow(theme.tokens.gridGap)}
  `}
`;

const Italic = styled.i`
  font-style: italic;
`;

/**
 * The page that displays search results based on a query from the URL parameters.
 *
 * This component fetches all products from an API and filters them based on the search query passed in the URL.
 * It displays a heading showing the search query and the filtered products in a grid format using the `ProductGrid` component.
 *
 * The search query is accessed from the URL using the `useParams` hook from Next.js, and the products are filtered by
 * their title to match the query (case-insensitive). The filtered results are then displayed in the product grid.
 *
 * @returns A container with a heading displaying the search query and a grid of matching products.
 */
const Search = () => {
  const { query } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const { data, error, loading } = useFetch<ProductsFetch>(API_URL, "get");

  useEffect(() => {
    if (!error && data && "data" in data && Array.isArray(data.data) && typeof query === "string") {
      const filteredProducts = data.data.filter((product) => product.title.toLowerCase().includes(query.toLowerCase()));

      setProducts(filteredProducts);
    }
  }, [data, error, query]);

  return (
    <>
      <title>{`Search Results for "${query}" - Curio`}</title>
      <meta
        name="description"
        content={`Browse results for "${query}" on Curio. Find unique products tailored to your search.`}
      />
      <Container>
        <Main>
          <Heading headingLevel="h1" headingStyle="HEADING_2">
            Search results for <Italic>&quot;{query}&quot;</Italic>
          </Heading>
          {!loading && products.length === 0 ? (
            <Message type="info">No Results Found</Message>
          ) : (
            <ProductGrid products={products} isError={error} cardCount={16} />
          )}
        </Main>
      </Container>
    </>
  );
};

export default Search;
