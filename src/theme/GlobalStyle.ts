import { createGlobalStyle } from "styled-components";
import { base, reset, root } from "./base";

const GlobalStyle = createGlobalStyle`
  ${root};
  ${base};
  ${reset};
`;

export default GlobalStyle;
