"use client";
import StyledComponentsRegistry from "@/app/registry";
import { ClientProviders } from "./providers";
import GlobalStyle from "@/theme/GlobalStyle";
import styled from "styled-components";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const MinHeightContainer = styled.div`
  min-height: 100vh;
`;
const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

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
};

export default RootLayout;
