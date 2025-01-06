import styled, { css } from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.light.neutral400};
    font-size: ${theme.typography.fontSize200};

    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  `}
`;
