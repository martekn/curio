import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { SearchBar } from "./search/SearchBar";
import { Menu as MenuIcon, X } from "react-feather";
import styled, { css } from "styled-components";
import { Dialog, DialogTrigger, Popover } from "react-aria-components";
import { VisuallyHidden } from "react-aria";
import { CartIcon } from "./CartIcon";
import { NavButton } from "./NavButton";
import { HeaderRow } from "./HeaderRow";
import { NavList } from "./NavList";

// Includes !important for the `inset` and `max-height` properties to override the default popover styling effectively.
const StyledPopover = styled(Popover)`
  ${({ theme }) => css`
    inset: 0 !important;
    max-height: unset !important;
    width: 100%;
    height: 100vh;
    background-color: ${theme.colors.light.neutral100};
  `}
`;

const StyledNavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledDialog = styled(Dialog)`
  &:focus-visible {
    outline: none;
  }
`;

const StyledHeaderContainer = styled(Container)`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${theme.sizes.size5};
  `}
`;

const InnerContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.sizes.size4};
  `}
`;

/**
 * A component that renders the mobile navigation menu within a popover.
 * Includes a header with a logo, a close button, and a navigation list.
 *
 * @returns The rendered Nav component for mobile navigation.
 */
const Nav = () => {
  return (
    <StyledPopover offset={0}>
      <StyledDialog>
        {({ close }) => (
          <nav>
            <HeaderRow variant="mobile">
              <StyledNavContainer>
                <Logo size="lg" onClick={close} />
                <NavButton onPress={close}>
                  <X />
                  <VisuallyHidden>Close</VisuallyHidden>
                </NavButton>
              </StyledNavContainer>
            </HeaderRow>
            <NavList variant="mobile" close={close} />
          </nav>
        )}
      </StyledDialog>
    </StyledPopover>
  );
};

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
          <StyledHeaderContainer>
            <InnerContainer>
              <NavButton>
                <MenuIcon />
                <VisuallyHidden>Menu</VisuallyHidden>
              </NavButton>
              <Logo size="lg" />
            </InnerContainer>
            <CartIcon />
          </StyledHeaderContainer>
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
