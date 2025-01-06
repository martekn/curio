import { DeviceVariant } from "@/types";
import { usePathname } from "next/navigation";
import { StyledLink, StyledLinkInner } from "./NavLink.styles";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  variant: DeviceVariant;
}

/**
 * NavLink Component
 *
 * A styled navigation link component that renders a link with active state styling
 * and a variant that adjusts its styling based on the screen size (mobile or desktop).
 *
 * @param href - The URL the link navigates to.
 * @param children - The content to display inside the link.
 * @param [onClick] - An optional callback function triggered when the link is clicked.
 * @param variant - Defines the variant of the navigation link, either "mobile" or "desktop".
 *
 * @returns The rendered navigation link component.
 */
export const NavLink = ({ href, children, onClick, variant }: NavLinkProps) => {
  const isActive = usePathname() === href;

  return (
    <StyledLink href={href} $active={isActive} $variant={variant} onClick={onClick}>
      <StyledLinkInner $active={isActive} $variant={variant}>
        {children}
      </StyledLinkInner>
    </StyledLink>
  );
};
