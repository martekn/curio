"use client";

import { useParams } from "next/navigation";
import styled, { css } from "styled-components";
import { Container } from "@/components/Container";
import { useFetch } from "@/hooks/useFetch";
import { Product as TProduct, ProductFetch } from "@/types";
import { API_URL } from "@/constants";
import { useEffect, useState } from "react";
import { ProductReviews } from "./components/ProductReviews";
import { ProductDescription } from "./components/ProductDescription";
import { ProductDisplay } from "./components/ProductDisplay";

const DisplayWrapper = styled.div`
  grid-area: display;
`;

const DescriptionWrapper = styled.div`
  grid-area: description;
`;

const ReviewWrapper = styled.div`
  grid-area: review;
`;

const Main = styled.main`
  ${({ theme }) => css`
    margin-top: ${theme.tokens.mainMarginTop};
    display: grid;
    gap: ${theme.sizes.size8};
    grid-template-areas:
      "display"
      "description"
      "review";

    @media (min-width: ${theme.breakpoints.sm}) {
      gap: ${theme.sizes.size11};
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "display description"
        "review description";
    }

    @media (min-width: ${theme.breakpoints.lg}) {
      grid-template-columns: 3fr 2fr;
    }
  `}
`;

/**
 * The product detail page
 *
 * This page dynamically fetches and displays detailed information about a specific product, including:
 * - A product image with a styled background.
 * - A description section containing the product title, pricing, rating, and an "Add to Cart" button.
 * - A reviews section that shows the average rating and a list of customer reviews.
 *
 * @returns A responsive page showcasing the product's details, images, and reviews.
 */
const Product = () => {
  const { id } = useParams();
  const { data, error } = useFetch<ProductFetch>(`${API_URL}${id}`, "get");
  const [product, setProduct] = useState<TProduct>();

  useEffect(() => {
    if (!error && data && "data" in data) {
      setProduct(data.data);
    }
  }, [data, error, setProduct]);
  return (
    <>
      <title>{product ? `${product.title} - Buy Now at Curio` : `${id} - Curio`}</title>
      <meta name="description" content={product ? `Buy ${product.title} now at Curio. ${product.description}` : ""} />
      <Container>
        <Main>
          <DescriptionWrapper>
            <ProductDescription product={product} />
          </DescriptionWrapper>
          <DisplayWrapper>
            <ProductDisplay alt={product?.image.alt} url={product?.image.url} />
          </DisplayWrapper>
          <ReviewWrapper>
            <ProductReviews reviews={product?.reviews} rating={product?.rating} />
          </ReviewWrapper>
        </Main>
      </Container>
    </>
  );
};

export default Product;
