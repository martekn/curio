import { Container } from "@/components/common/Container";
import styled, { css } from "styled-components";

export const StyledContainer = styled(Container)`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${theme.sizes.size5};
  `}
`;

export const InnerWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.sizes.size4};
  `}
`;
