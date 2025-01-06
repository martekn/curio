import { NAV_ITEMS } from "@/constants";
import { DeviceVariant } from "@/types";
import { StyledList } from "./NavList.styles";
import { NavLink } from "../NavLink";

interface NavProps {
  variant: DeviceVariant;
  close?: () => void;
}

/**
 * Renders a list of navigation items based on the `variant` prop.
 * The list items adapt styling and behavior for mobile or desktop views.
 * On mobile, clicking a link triggers the `close` function.
 *
 * @param props - The props object.
 * @param props.variant - The variant of the navigation list, determining its styling and behavior.
 * @param [props.close] - A function to close the navigation menu (used in mobile variant).
 * @returns The rendered NavList component.
 */
export const NavList = ({ variant, close }: NavProps) => {
  return (
    <StyledList $variant={variant}>
      {NAV_ITEMS.map((item) => (
        <li key={item.href}>
          <NavLink href={item.href} variant={variant} {...(variant === "mobile" && { onClick: close })}>
            {item.label}
          </NavLink>
        </li>
      ))}
    </StyledList>
  );
};
