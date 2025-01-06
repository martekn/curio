import styled, { css } from "styled-components";
import { Heading } from "../../common/Heading";
import { MessageType } from "./types";

export const StyledWrapper = styled.div<{ $messageType: MessageType; $margin: string | undefined }>`
  ${({ theme, $messageType, $margin }) => css`
    display: grid;
    padding: ${theme.sizes.size6};
    margin-block: ${$margin ? $margin : theme.sizes.size6};
    border-radius: ${theme.tokens.borderRadius};
    border: 1px solid ${theme.colors.light.neutral400};
    background-color: ${theme.colors.light.neutral200};
    color: #${theme.colors.bodyTextColor};

    ${$messageType === "error" &&
    css`
      border-color: ${theme.colors.light.error500};
      background-color: ${theme.colors.light.error100};
    `}

    ${$messageType === "success" &&
    css`
      border-color: ${theme.colors.light.success500};
      background-color: ${theme.colors.light.success100};
    `}
  `}
`;

export const StyledHeading = styled(Heading)`
  ${({ theme }) => css`
    margin-bottom: ${theme.sizes.size3};
  `}
`;
