import { Container } from "@/components/common/Container";
import { SearchBar } from "../SearchBar";
import styled, { css } from "styled-components";

export const StyledContainer = styled(Container)`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${theme.sizes.size9};
  `}
`;

export const StyledInnerWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.sizes.size7};
  `}
`;

export const StyledLeftWrapper = styled(StyledInnerWrapper)`
  justify-content: end;
  flex: 1;
`;

export const StyledSearchBar = styled(SearchBar)`
  flex: 1;
  max-width: 20rem;
`;
