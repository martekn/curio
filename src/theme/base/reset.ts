import { css } from "styled-components";

export const reset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }

  a {
    display: inline-block;
  }

  img,
  picture,
  svg {
    display: block;
    max-width: 100%;
  }

  legend {
    display: table;
    padding: 0;
  }

  fieldset {
    border: 0;
    margin: 0;
    min-width: 0;
    padding: 0.01em 0 0 0;
  }

  body:not(:-moz-handler-blocked) fieldset {
    display: table-cell;
  }

  label {
    display: block;
  }

  button {
    border: none;
    cursor: pointer;
  }

  ul,
  ol {
    list-style: none;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Removes smooth scrolling, animation and transitions for people that doesn't want to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
