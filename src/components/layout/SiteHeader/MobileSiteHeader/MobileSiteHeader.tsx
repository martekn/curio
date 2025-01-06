import { Container } from "@/components/common/Container";
import { Logo } from "@/components/common/Logo";
import { SearchBar } from "../SearchBar";
import { Menu as MenuIcon } from "react-feather";
import { DialogTrigger } from "react-aria-components";
import { VisuallyHidden } from "react-aria";
import { Cart } from "../Cart";
import { NavButton } from "./NavButton";
import { HeaderRow } from "../HeaderRow";
import { InnerWrapper, StyledContainer } from "./MobileSiteHeader.styles";
import { Nav } from "./Nav";

/**
 * A responsive component that renders the site header for mobile devices.
 * Includes a menu button, logo, cart icon, and a search bar. Clicking the menu button opens the `Nav` component.
 *
 * @returns The rendered MobileSiteHeader component.
 */
export const MobileSiteHeader = () => {
  return (
    <header>
      <DialogTrigger>
        <HeaderRow variant="mobile">
          <StyledContainer>
            <InnerWrapper>
              <NavButton>
                <MenuIcon />
                <VisuallyHidden>Menu</VisuallyHidden>
              </NavButton>
              <Logo size="lg" />
            </InnerWrapper>
            <Cart />
          </StyledContainer>
        </HeaderRow>
        <HeaderRow variant="mobile">
          <Container>
            <SearchBar />
          </Container>
        </HeaderRow>
        <Nav />
      </DialogTrigger>
    </header>
  );
};
