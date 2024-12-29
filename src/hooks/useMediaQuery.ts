"use client";
import { useState, useEffect } from "react";

/**
 * Custom hook to determine if a media query matches the current viewport.
 * This hook listens for changes to the media query and updates its state accordingly.
 *
 * @param query - The CSS media query string to evaluate (e.g., "(max-width: 768px)").
 * @returns A boolean value indicating whether the media query currently matches.
 *
 * @example
 * // Check if the viewport width is less than or equal to 768px
 * const isMobile = useMediaQuery("(max-width: 768px)");
 *
 * return (
 *   <div>
 *     {isMobile ? "Mobile View" : "Desktop View"}
 *   </div>
 * );
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    setMatches(media.matches);

    const updateMatches = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    media.addEventListener("change", updateMatches);

    return () => {
      media.removeEventListener("change", updateMatches);
    };
  }, [query]);

  return matches;
};
