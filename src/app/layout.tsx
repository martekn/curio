"use client";
import StyledComponentsRegistry from "@/app/registry";
import { ClientProviders } from "./providers";
import GlobalStyle from "@/theme/GlobalStyle";
import styled from "styled-components";
import { SiteHeader } from "@/components/layout/header/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

const MinHeightContainer = styled.div`
  min-height: 100vh;
`;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <ClientProviders>
            <MinHeightContainer>
              <SiteHeader />
              {children}
            </MinHeightContainer>
            <SiteFooter />
          </ClientProviders>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
