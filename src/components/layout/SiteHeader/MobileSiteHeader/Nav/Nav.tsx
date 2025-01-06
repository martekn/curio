import { Logo } from "@/components/common/Logo";
import { X } from "react-feather";
import { VisuallyHidden } from "react-aria";
import { HeaderRow } from "../../HeaderRow";
import { NavButton } from "../NavButton/NavButton.styles";
import { NavList } from "../../NavList";
import { StyledDialog, StyledContainer, StyledPopover } from "./Nav.styles";

/**
 * A component that renders the mobile navigation menu within a popover.
 * Includes a header with a logo, a close button, and a navigation list.
 *
 * @returns The rendered Nav component for mobile navigation.
 */
export const Nav = () => {
  return (
    <StyledPopover offset={0}>
      <StyledDialog>
        {({ close }) => (
          <nav>
            <HeaderRow variant="mobile">
              <StyledContainer>
                <Logo size="lg" onClick={close} />
                <NavButton onPress={close}>
                  <X />
                  <VisuallyHidden>Close</VisuallyHidden>
                </NavButton>
              </StyledContainer>
            </HeaderRow>
            <NavList variant="mobile" close={close} />
          </nav>
        )}
      </StyledDialog>
    </StyledPopover>
  );
};
