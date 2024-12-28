import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import Link from "next/link";
import styled, { css } from "styled-components";

const FooterContainer = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.tokens.footerBackgroundColor};
    color: ${theme.tokens.footerTextColor};
    padding: ${theme.tokens.siteFooterPadding};
    margin: ${theme.tokens.siteFooterMargin};
  `}
`;

const FooterLayout = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.tokens.gridGap};
    align-items: center;
    justify-content: space-between;
    @media (min-width: ${theme.breakpoints.sm}) {
      flex-direction: row;
    }
  `}
`;

const FooterLinkList = styled.ul`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.tokens.gridGap};
  `}
`;

const FooterLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.tokens.footerLinkColor};
    text-decoration: ${theme.tokens.footerLinkTextDecoration};

    &:hover {
      color: ${theme.tokens.footerLinkColorHover};
      text-decoration: ${theme.tokens.footerLinkTextDecorationHover};
    }
  `}
`;

const Footnote = styled.span`
  ${({ theme }) => css`
    color: ${theme.tokens.bodyTextColorSecondary};
    font-size: ${theme.typography.fontSize200};
  `}
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterLayout>
          <Logo size="sm" />
          <FooterLinkList>
            <li>
              <FooterLink href="/">Home</FooterLink>
            </li>
            <li>
              <FooterLink href="/products">Products</FooterLink>
            </li>
            <li>
              <FooterLink href="/contact">Contact</FooterLink>
            </li>
          </FooterLinkList>
          <Footnote>&#169;2024 Martekn</Footnote>
        </FooterLayout>
      </Container>
    </FooterContainer>
  );
};
