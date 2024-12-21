import { css } from "styled-components";

const flow = (flowSpace = "1rem") => css`
  > *:where(:not(:first-child)) {
    margin-top: ${flowSpace};
  }
`;

const ellipseText = () => css`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const mixins = { flow, ellipseText };

export default mixins;
