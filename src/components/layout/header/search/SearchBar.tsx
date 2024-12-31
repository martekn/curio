import styled, { css } from "styled-components";
import { Search } from "react-feather";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { debounce } from "@/utils/debounce";
import { useFetch } from "@/hooks/useFetch";
import { LookAheadContainer } from "./LookAhead";
import { Product, ProductsFetch, SetState } from "@/types";
import { API_URL } from "@/constants";

const SearchContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr auto;
    width: 100%;
    color: ${theme.tokens.formInputColor};
    font-family: ${theme.tokens.formInputFontFamily};
    font-weight: ${theme.tokens.formInputFontWeight};
    font-size: ${theme.tokens.formInputFontSize};
    background-color: ${theme.tokens.formInputBackgroundColor};
    border: ${theme.tokens.formInputBorderDefault};
    border-color: ${theme.colors.light.neutral300};
    padding: ${theme.tokens.formInputPadding};
    border-radius: ${theme.tokens.formInputBorderRadius};

    &:focus-within {
      outline: ${theme.tokens.formInputOutlineFocus};
      border: ${theme.tokens.formInputBorderFocus};
    }
  `}
`;

const Input = styled.input`
  width: 100%;
  border: none;

  &:focus {
    outline: none;
  }
`;

const Icon = styled.button`
  background-color: transparent;
  > * {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const Form = styled.form`
  position: relative;
`;

/**
 * Updates the look-ahead search results based on the user's input.
 * Debounces the execution to limit how frequently it processes user input.
 *
 * @param searchTerm - The search term entered by the user.
 * @param products - The list of products to search through.
 * @param setProductsSearchResult - Function to update the state with the filtered search results.
 * @param setShowLookAhead - Function to toggle the visibility of the look-ahead suggestions.
 */
const updateLookAhead = debounce(
  (
    searchTerm: string,
    products: Product[],
    setProductsSearchResult: SetState<Product[]>,
    setShowLookAhead: SetState<boolean>
  ) => {
    if (!searchTerm) {
      setProductsSearchResult([]);
      setShowLookAhead(false);
      return;
    }

    const matchingProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setShowLookAhead(true);
    setProductsSearchResult(matchingProducts);
  },
  500
);

/**
 * A search bar component that allows users to search products.
 * It includes a debounced look-ahead feature that displays suggestions as the user types.
 * The component also handles form submission and redirects to the search results page.
 *
 * @returns The rendered `SearchBar` component.
 *
 * @example
 * <SearchBar />
 */
export const SearchBar = () => {
  const { data, error } = useFetch<ProductsFetch>(API_URL, "get");
  const [productsSearchResult, setProductsSearchResult] = useState<Product[]>([]);
  const [showLookAhead, setShowLookAhead] = useState(false);

  const { register, handleSubmit, watch } = useForm<{ searchInput: string }>();
  const router = useRouter();
  const searchTerm = watch("searchInput");

  useEffect(() => {
    let products: Product[] = [];
    if (!error && data && "data" in data && Array.isArray(data.data)) {
      products = data.data;
    }

    updateLookAhead(searchTerm, products, setProductsSearchResult, setShowLookAhead);
  }, [searchTerm, data, error]);

  /**
   * Handles the form submission for the search bar.
   * This function is triggered when the user submits the form.
   *
   * @param formData - The data object containing form values.
   * @param formData.searchInput - The search query input from the user.
   */
  const onSubmit = (formData: { searchInput: string }) => {
    if (formData.searchInput) {
      const query = formData.searchInput;
      router.push(`/products/search/${query}`);
    } else {
      router.push(`/products`);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <SearchContainer>
        <Input {...register("searchInput")} />
        <Icon>
          <Search />
        </Icon>
      </SearchContainer>
      {showLookAhead && <LookAheadContainer productsSearchResult={productsSearchResult} />}
    </Form>
  );
};
