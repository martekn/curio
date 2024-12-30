import { DeviceVariant } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled, { css } from "styled-components";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  variant: DeviceVariant;
}

interface StyledNavLinkProps {
  $variant: DeviceVariant;
  $active?: boolean;
}

/**
 * A styled version of the Next.js Link component that renders a styled navigation link.
 * The styling adjusts based on whether the link is active and the variant (mobile or desktop).
 *
 * @param [$active] - Whether the link is currently active (active state is determined by the current pathname).
 * @param $variant - The variant of the link, affecting its styling (mobile or desktop).
 *
 * @returns The styled navigation link.
 */
const StyledNavLink = styled(Link)<StyledNavLinkProps>`
  ${({ theme, $variant }) => css`
    text-decoration: none;
    color: ${theme.tokens.colorTextDefault};
    font-size: ${theme.typography.fontSize600};

    > * {
      pointer-events: none;
    }

    &:hover ${Text}::after {
      width: 66%;
    }

    ${$variant === "mobile"
      ? css`
          padding: ${theme.sizes.size5} ${theme.tokens.containerMinMarginInline};
          border-bottom: 1px solid ${theme.colors.light.primary100};
          width: 100%;
        `
      : ""}
  `}
`;

/**
 * A styled span element used to display the text inside the navigation link.
 * It includes hover and active state styles, including an underline effect.
 *
 * @param [$active] - Whether the text is in an active state, causing a custom underline style.
 * @param $variant - The variant of the link, affecting its text styling (mobile or desktop).
 *
 * @returns The styled text inside the navigation link.
 */
const Text = styled.span<StyledNavLinkProps>`
  ${({ theme, $active, $variant }) => css`
    position: relative;
    padding-block: 0.15rem;

    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      width: 0%;
      background-color: currentColor;
      transition: all ease-in-out 200ms;
      border-radius: 5px;

      ${$active
        ? css`
            width: 33%;
            background-color: ${theme.colors.light.primary400};
          `
        : ""}
    }

    &:hover::after {
      width: 66%;
    }

    ${$variant === "mobile"
      ? css`
          width: 100%;
        `
      : ""}
  `}
`;

/**
 * NavLink Component
 *
 * A styled navigation link component that renders a link with active state styling
 * and a variant that adjusts its styling based on the screen size (mobile or desktop).
 *
 * @param {string} href - The URL the link navigates to.
 * @param {React.ReactNode} children - The content to display inside the link.
 * @param {function} [onClick] - An optional callback function triggered when the link is clicked.
 * @param {"mobile"|"desktop"} variant - Defines the variant of the navigation link, either "mobile" or "desktop".
 *
 * @returns {JSX.Element} The rendered navigation link component.
 */
export const NavLink = ({ href, children, onClick, variant }: NavLinkProps) => {
  const isActive = usePathname() === href;

  return (
    <StyledNavLink href={href} $active={isActive} $variant={variant} onClick={onClick}>
      <Text $active={isActive} $variant={variant}>
        {children}
      </Text>
    </StyledNavLink>
  );
};
