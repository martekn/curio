import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { SearchBar } from "./search/SearchBar";
import styled, { css } from "styled-components";
import React from "react";
import { CartIcon } from "./CartIcon";
import { HeaderRow } from "./HeaderRow";
import { NavList } from "./NavList";

const StyledContainer = styled(Container)`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${theme.sizes.size9};
  `}
`;

const InnerContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.sizes.size7};
  `}
`;

/**
 * A component that renders the desktop version of the site header.
 * It includes a logo, a navigation list, a search bar, and a cart icon, all styled for desktop layouts.
 *
 * @returns The rendered desktop site header component.
 */
export const DesktopSiteHeader = () => {
  return (
    <header>
      <HeaderRow variant="desktop">
        <StyledContainer>
          <InnerContainer>
            <Logo size="lg" />
            <nav>
              <NavList variant="desktop" />
            </nav>
          </InnerContainer>
          <InnerContainer>
            <SearchBar />
            <CartIcon />
          </InnerContainer>
        </StyledContainer>
      </HeaderRow>
    </header>
  );
};
