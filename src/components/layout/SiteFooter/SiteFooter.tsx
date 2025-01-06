import { Container } from "@/components/common/Container";
import { Logo } from "@/components/common/Logo";
import { StyledFooter, StyledLayout, StyledLink, StyledList, StyledFootnote } from "./SiteFooter.styles";

/**
 * A component that renders the footer section of the site. It includes a logo, a list of footer links,
 * and a footnote with copyright information.
 *
 * @returns The rendered SiteFooter component, which contains a logo, footer links, and a footnote.
 */
export const SiteFooter = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledLayout>
          <Logo size="sm" />
          <StyledList>
            <li>
              <StyledLink href="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink href="/products">Products</StyledLink>
            </li>
            <li>
              <StyledLink href="/contact">Contact</StyledLink>
            </li>
          </StyledList>
          <StyledFootnote>&#169;2024 Martekn</StyledFootnote>
        </StyledLayout>
      </Container>
    </StyledFooter>
  );
};
