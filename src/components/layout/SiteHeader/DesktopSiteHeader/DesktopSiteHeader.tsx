import { Logo } from "@/components/common/Logo";
import React from "react";
import { Cart } from "../Cart";
import { HeaderRow } from "../HeaderRow";
import { NavList } from "../NavList";
import { StyledInnerWrapper, StyledLeftWrapper, StyledContainer, StyledSearchBar } from "./DesktopSiteHeader.styles";

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
          <StyledInnerWrapper>
            <Logo size="lg" />
            <nav>
              <NavList variant="desktop" />
            </nav>
          </StyledInnerWrapper>
          <StyledLeftWrapper>
            <StyledSearchBar />
            <Cart />
          </StyledLeftWrapper>
        </StyledContainer>
      </HeaderRow>
    </header>
  );
};
