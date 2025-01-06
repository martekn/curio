import styled, { css } from "styled-components";
import { SkeletonImage } from "../../common/SkeletonLoader";
import mixins from "@/theme/abstracts/mixins";

export const StyledSkeletonImage = styled(SkeletonImage)`
  position: relative;
  padding-top: 66%;
`;

export const StyledBody = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.sizes.size4};
    ${mixins.flow(theme.tokens.cardFlowSpacing)};
  `}
`;
