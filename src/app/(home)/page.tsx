"use client";

import { ProductGrid } from "@/components/ProductGrid";
import { Hero } from "./components/Hero";
import { Heading } from "@/components/Heading";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import styled, { css } from "styled-components";
import mixins from "@/theme/abstracts/mixins";
import { useEffect, useState } from "react";
import { Product } from "@/types";
import { useFetch } from "@/hooks/useFetch";
import { ProductsFetch } from "@/types";
import { API_URL, HERO_PRODUCT_ID } from "@/constants";
import { VisuallyHidden } from "react-aria";
import { Message } from "@/components/Message";

const StyledSection = styled(Section)`
  ${({ theme }) => css`
    ${mixins.flow(theme.sizes.size5)};
  `}
`;

const useProducts = (featuredId: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [popularProducts, setPopularProducts] = useState<Product[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [featuredProduct, setFeaturedProduct] = useState<Product>();

  useEffect(() => {
    setFeaturedProduct(products.find((product) => product.id === featuredId));

    const filteredProducts = products.filter((product) => product.id !== featuredId);
    const sortedProducts = filteredProducts.sort((a, b) => a.rating - b.rating);

    setPopularProducts(sortedProducts.splice(0, 4));
    setFeaturedProducts(sortedProducts.splice(0, 8));
  }, [products, featuredId]);

  return { setProducts, popularProducts, featuredProducts, featuredProduct };
};

/**
 * The main page of the Curio website, showcasing a hero section, popular products, and featured products.
 *
 * This component:
 * - Displays a visually hidden heading for accessibility and SEO purposes.
 * - Renders the `Hero` section showcasing a featured product.
 * - Renders two sections with product grids: one for popular products and one for featured products.
 * - Fetches product data from an API and organizes the products into featured and popular categories.
 *
 * @returns The home page component containing the hero section and two product grids.
 */
const Home = () => {
  const { setProducts, popularProducts, featuredProducts, featuredProduct } = useProducts(HERO_PRODUCT_ID);
  const { data, error } = useFetch<ProductsFetch>(API_URL, "get");

  useEffect(() => {
    if (!error && data && "data" in data && Array.isArray(data.data)) {
      setProducts(data.data);
    }
  }, [data, error, setProducts]);

  if (error) {
    return (
      <Container>
        <Message type="error" title="Oops! Something went wrong">
          We&apos;re unable to load the products at the moment. Please check your internet connection or try again
          later. If the issue persists, contact our support team.
        </Message>
      </Container>
    );
  }

  return (
    <main>
      <VisuallyHidden>
        <Heading headingLevel="h1">Curio - Products to explore</Heading>
      </VisuallyHidden>
      <Hero product={featuredProduct} />
      <Container>
        <StyledSection>
          <Heading headingLevel="h2" headingStyle="HEADING_2">
            Popular products
          </Heading>
          <ProductGrid products={popularProducts} />
        </StyledSection>
        <StyledSection>
          <Heading headingLevel="h2" headingStyle="HEADING_2">
            Featured products
          </Heading>
          <ProductGrid products={featuredProducts} />
        </StyledSection>
      </Container>
    </main>
  );
};
export default Home;
