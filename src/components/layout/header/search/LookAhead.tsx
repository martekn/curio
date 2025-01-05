import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Product } from "@/types";
import { ListBox, ListBoxItem, Text } from "react-aria-components";
import { ChevronRight } from "react-feather";

const LookAhead = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-top: ${theme.sizes.size2};
    border: 1px solid ${theme.colors.light.neutral300};
    z-index: 100;
    position: absolute;
    border-radius: ${theme.tokens.borderRadius};
    background-color: ${theme.tokens.colorBackgroundDefault};
  `}
`;
const LookAheadText = styled.div`
  ${({ theme }) => css`
    padding: ${theme.sizes.size3} ${theme.sizes.size7};
    font-size: ${theme.typography.fontSize200};
    font-weight: ${theme.typography.fontWeightMedium};
    color: ${theme.colors.light.neutral400};
  `}
`;

const LookAheadListItem = styled(ListBoxItem)`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    gap: ${theme.sizes.size4};
    z-index: 2;
    padding: ${theme.sizes.size3} ${theme.sizes.size7};
    text-decoration: none;
  `}
`;
const SeeAllListItem = styled(LookAheadListItem)`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize200};
    font-weight: ${theme.typography.fontWeightMedium};
    color: ${theme.tokens.bodyTextColor};
    gap: ${theme.sizes.size2};
    &:hover {
      text-decoration: underline;
    }
  `}
`;

const LookAheadListItemImage = styled.img`
  ${({ theme }) => css`
    border-radius: ${theme.tokens.borderRadius};
    pointer-events: none;
    height: 3rem;
    width: 3rem;
    object-fit: cover;
  `}
`;

const LookAheadListItemTitle = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.tokens.colorTextDefault};
    font-family: ${theme.tokens.colorTextDefault};
    font-size: ${theme.tokens.bodyFontSize};
    text-decoration: underline transparent;
    text-underline-offset: 2px;
    transition: text-decoration 200ms ease-in-out;

    &:hover {
      text-decoration-color: ${theme.tokens.colorTextDefault};
    }

    &::before {
      transition: background-color 200ms ease-in-out;
      display: block;
      content: "";
      position: absolute;
      inset: 0;
      cursor: pointer;
      z-index: -1;
    }

    &:hover::before {
      background-color: ${theme.colors.light.primary100};
    }
  `}
`;

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
export const LookAheadContainer = ({
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
    <LookAhead>
      <LookAheadText>{title}</LookAheadText>
      <ListBox
        onAction={() => {
          onItemSelect();
        }}
      >
        {topMatches.map((product) => (
          <LookAheadListItem key={product.id} href={`/product/${product.id}`}>
            <LookAheadListItemImage src={product.image.url} alt={product.image.alt} />
            <LookAheadListItemTitle slot="label">{product.title}</LookAheadListItemTitle>
          </LookAheadListItem>
        ))}
        {productsSearchResult && productsSearchResult.length > 4 && (
          <SeeAllListItem key="seeAll" href={`/products/search/${searchTerm}`}>
            See all matches <ChevronRight width={"1rem"} />
          </SeeAllListItem>
        )}
      </ListBox>
    </LookAhead>
  );
};
