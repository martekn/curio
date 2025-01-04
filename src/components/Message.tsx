import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { Heading } from "./Heading";

type MessageType = "error" | "info" | "success";

interface Props {
  type: MessageType;
  title?: string;
  margin?: string;
  children: ReactNode;
}

const StyledAlert = styled.div<{ $messageType: MessageType; $margin: string | undefined }>`
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

const Title = styled(Heading)`
  ${({ theme }) => css`
    margin-bottom: ${theme.sizes.size3};
  `}
`;

/**
 * A functional React component for displaying styled messages, such as error or informational messages.
 *
 * @param type - The type of the message, determines the style of the alert.
 * @param [title] - An optional title for the message, rendered as a heading.
 * @param children - The content of the message, displayed inside the alert.
 *
 * @returns - A styled alert component with optional title and message content.
 */
export const Message = ({ type, title, margin, children }: Props) => {
  return (
    <StyledAlert $messageType={type} $margin={margin}>
      {title && (
        <Title headingLevel="h4" headingStyle="HEADING_4">
          {title}
        </Title>
      )}
      <p>{children}</p>
    </StyledAlert>
  );
};
