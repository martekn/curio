"use client";

import { useRouter } from "next/navigation";
import { RouterProvider } from "react-aria-components";
import { Provider as JotaiProvider } from "jotai";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/theme/theme";

declare module "react-aria-components" {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>["push"]>[1]>;
  }
}

export const ClientProviders = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <RouterProvider navigate={router.push}>
      <ThemeProvider theme={defaultTheme}>
        <JotaiProvider>{children}</JotaiProvider>
      </ThemeProvider>
    </RouterProvider>
  );
};
