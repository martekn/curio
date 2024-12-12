"use client";
import StyledComponentsRegistry from "@/app/registry";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/theme/GlobalStyle";
import { defaultTheme } from "@/theme/theme";

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
          <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
