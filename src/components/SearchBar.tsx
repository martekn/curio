import styled, { css } from "styled-components";
import { Search } from "react-feather";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { debounce } from "@/utils/debounce";
import { useFetch } from "@/hooks/useFetch";
import { LookAHeadContainer } from "./LookAHead";
import { Product, ProductsFetch } from "@/types";

const SearchContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
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
  border: none;
  flex: 1;

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
  const { data } = useFetch<ProductsFetch>("https://v2.api.noroff.dev/online-shop", "get");
  const [productsSearchResult, setProductsSearchResult] = useState<Product[]>([]);
  const [showLookAHead, setShowLookAHead] = useState(false);

  const { register, handleSubmit } = useForm<{ searchInput: string }>();
  const router = useRouter();

  /**
   * Updates the look-ahead search results based on the user's input.
   * Debounces the execution to limit how frequently it processes user input.
   *
   * @param {ChangeEvent<HTMLInputElement>} formData - The input change event containing the search term.
   */
  const updateLookAHead = debounce((formData: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = formData.target.value.toLowerCase();

    if (!searchTerm) {
      setProductsSearchResult([]);
      setShowLookAHead(false);
      return;
    }

    if (data) {
      const products = data.data;
      const matchingProducts = products.filter((product) => product.title.toLowerCase().includes(searchTerm));
      setShowLookAHead(true);
      setProductsSearchResult(matchingProducts);
    }
  }, 500);

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
    <Form>
      <SearchContainer onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("searchInput")} onChange={(formData) => updateLookAHead(formData)} />
        <Icon>
          <Search />
        </Icon>
      </SearchContainer>
      {showLookAHead && <LookAHeadContainer productsSearchResult={productsSearchResult} />}
    </Form>
  );
};
