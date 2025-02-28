import { Search } from "react-feather";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { debounce } from "@/utils/debounce";
import { useFetch } from "@/hooks/useFetch";
import { LookAhead } from "./LookAhead";
import { Product, ProductsFetch, SetState } from "@/types";
import { API_URL } from "@/constants";
import { StyledForm, StyledButton, StyledInput, StyledWrapper } from "./SearchBar.styles";
import { VisuallyHidden } from "react-aria";

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
  150
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
  const formRef = useRef<HTMLFormElement>(null);
  const { register, handleSubmit, watch, reset } = useForm<{ searchInput: string }>();
  const router = useRouter();
  const searchTerm = watch("searchInput");

  useEffect(() => {
    let products: Product[] = [];
    if (!error && data && "data" in data && Array.isArray(data.data)) {
      products = data.data;
    }

    updateLookAhead(searchTerm, products, setProductsSearchResult, setShowLookAhead);
  }, [searchTerm, data, error]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setShowLookAhead(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowLookAhead(false);
      }
    };

    const handleFocusOut = (event: FocusEvent) => {
      if (formRef.current && !formRef.current.contains(event.relatedTarget as Node)) {
        setShowLookAhead(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);
    document.addEventListener("focusout", handleFocusOut);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("focusout", handleFocusOut);
    };
  }, []);

  const handleFormFocus = () => {
    if (searchTerm) {
      setShowLookAhead(true);
    }
  };

  const handleItemSelect = () => {
    setShowLookAhead(false);
    reset();
  };

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
    reset();
    setShowLookAhead(false);
  };

  return (
    <StyledForm ref={formRef} onSubmit={handleSubmit(onSubmit)} onFocus={handleFormFocus}>
      <StyledWrapper>
        <VisuallyHidden>
          <label htmlFor="searchInput">Search</label>
        </VisuallyHidden>
        <StyledInput id="searchInput" {...register("searchInput")} />
        <StyledButton>
          <Search />
        </StyledButton>
      </StyledWrapper>
      {showLookAhead && (
        <LookAhead
          productsSearchResult={productsSearchResult}
          onItemSelect={handleItemSelect}
          searchTerm={searchTerm}
        />
      )}
    </StyledForm>
  );
};
