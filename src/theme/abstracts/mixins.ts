import { css } from "styled-components";

const flow = (flowSpace = "1rem") => css`
  > *:where(:not(:first-child)) {
    margin-top: ${flowSpace};
  }
`;

const mixins = { flow };

export default mixins;
