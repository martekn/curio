import { useEffect, useState } from "react";
import { Product } from "@/types";
import { ListBox } from "react-aria-components";
import { ChevronRight } from "react-feather";
import {
  StyledWrapper,
  StyledListBoxItem,
  StyledProductImage,
  StyledProductTitle,
  StyledHeading,
  StyledAllListBoxItem,
} from "./LookAhead.styles";

/**
 * A component that displays the look-ahead search results for products based on the search term.
 * It limits the displayed results to the top 4, showing the title "Showing top 4 results",
 * or a message indicating no results are found or displaying all available results.
 * Intended to be used with the SearchBar component.
 *
 * @param props - The props for the component.
 * @param props.productsSearchResult - An array of products that match the search query.
 *
 * @returns The rendered `LookAheadContainer` with the search results.
 *
 * @example
 * <LookAheadContainer productsSearchResult={matchingProducts} />
 */
export const LookAhead = ({
  productsSearchResult,
  onItemSelect,
  searchTerm,
}: {
  productsSearchResult: Product[];
  onItemSelect: () => void;
  searchTerm: string;
}) => {
  const [title, setTitle] = useState("Showing top 4 results");
  const [topMatches, setTopMatches] = useState<Product[]>([]);

  useEffect(() => {
    if (!productsSearchResult || productsSearchResult.length === 0) {
      setTopMatches([]);
      setTitle("No products found");
    } else if (productsSearchResult.length > 4) {
      setTopMatches(productsSearchResult.splice(0, 4));
      setTitle("Showing top 4 results");
    } else {
      setTopMatches(productsSearchResult);
      setTitle("Showing all results");
    }
  }, [productsSearchResult]);

  return (
    <StyledWrapper>
      <StyledHeading>{title}</StyledHeading>
      <ListBox
        onAction={() => {
          onItemSelect();
        }}
      >
        {topMatches.map((product) => (
          <StyledListBoxItem key={product.id} href={`/product/${product.id}`}>
            <StyledProductImage src={product.image.url} alt={product.image.alt} />
            <StyledProductTitle slot="label">{product.title}</StyledProductTitle>
          </StyledListBoxItem>
        ))}
        {productsSearchResult && productsSearchResult.length > 4 && (
          <StyledAllListBoxItem key="seeAll" href={`/products/search/${searchTerm}`}>
            See all matches <ChevronRight width={"1rem"} />
          </StyledAllListBoxItem>
        )}
      </ListBox>
    </StyledWrapper>
  );
};
