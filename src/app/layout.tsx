"use client";
import StyledComponentsRegistry from "@/app/registry";
import GlobalStyle from "@/theme/GlobalStyle";
import { ClientProviders } from "./providers";

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
          <ClientProviders>{children}</ClientProviders>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
