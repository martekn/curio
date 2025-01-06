import { StyledHeading } from "./Heading.styling";
import { HeadingStyle } from "./types";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  headingStyle: HeadingStyle;
  children: React.ReactNode;
}

/**
 * A flexible `Heading` component that renders styled headings at various levels and styles.
 *
 * @param props - The props for the Heading component.
 * @param [props.headingLevel="p"] - The HTML element to render (e.g., "h1", "h2", "p").
 * @param [props.headingStyle="HEADING_1"] - The style variant of the heading (e.g., "HEADING_1", "HEADING_4").
 * @param props.children - The content to be rendered inside the heading.
 *
 * @returns The styled heading component based on the specified level and style.
 */
export const Heading = ({ headingLevel, headingStyle, children, ...props }: Props) => {
  return (
    <StyledHeading $headingStyle={headingStyle} as={headingLevel} {...props}>
      {children}
    </StyledHeading>
  );
};
