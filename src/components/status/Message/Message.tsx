import React, { ReactNode } from "react";
import { MessageType } from "./types";
import { StyledWrapper, StyledHeading } from "./Message.styles";

interface Props {
  type: MessageType;
  title?: string;
  margin?: string;
  children: ReactNode;
}

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
    <StyledWrapper $messageType={type} $margin={margin}>
      {title && (
        <StyledHeading headingLevel="h4" headingStyle="HEADING_4">
          {title}
        </StyledHeading>
      )}
      <p>{children}</p>
    </StyledWrapper>
  );
};
