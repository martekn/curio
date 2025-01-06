import { useTheme } from "styled-components";
import React from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { MobileSiteHeader } from "./MobileSiteHeader";
import { DesktopSiteHeader } from "./DesktopSiteHeader";

/**
 * A responsive component that renders the site header. It determines the header layout
 * (mobile or desktop) based on the screen width using a media query.
 *
 * @returns The rendered site header, either `MobileSiteHeader` or `DesktopSiteHeader`,
 * based on the screen width.
 */
export const SiteHeader = () => {
  const theme = useTheme();
  const breakpoint = theme.breakpoints.sm;

  const isMobile = useMediaQuery(`(max-width: ${breakpoint})`);

  if (isMobile) {
    return <MobileSiteHeader />;
  }

  return <DesktopSiteHeader />;
};
