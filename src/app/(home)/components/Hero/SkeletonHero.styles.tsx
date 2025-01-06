import styled, { css } from "styled-components";
import { StyledHeroLayout } from "./Hero.styles";

export const StyledSkeletonLayout = styled(StyledHeroLayout)`
  ${({ theme }) => css`
    background-color: ${theme.colors.light.neutral200};
    overflow: hidden;
  `}
`;
