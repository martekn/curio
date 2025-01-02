import styled, { css } from "styled-components";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  headingStyle?: "HEADING_1_LG" | "HEADING_1" | "HEADING_2" | "HEADING_3" | "HEADING_4";
  children: React.ReactNode;
}

const HeadingBase = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.tokens.headingFontFamilyDefault};
    color: ${theme.tokens.headingColorDefault};
    font-weight: ${theme.tokens.headingFontWeightDefault};
    letter-spacing: ${theme.tokens.headingLetterSpacing};
    line-height: ${theme.tokens.headingLineHeight};
    text-transform: ${theme.tokens.headingTextTransform};
  `}
`;

const Heading1Lg = styled(HeadingBase)`
  ${({ theme }) => css`
    font-family: ${theme.tokens.heading1LgFontFamily};
    font-size: ${theme.tokens.heading1LgFontSize};
    font-weight: ${theme.tokens.heading1LgFontWeight};
    color: ${theme.tokens.heading1LgColor};
  `}
`;

const Heading1 = styled(HeadingBase)`
  ${({ theme }) => css`
    font-family: ${theme.tokens.heading1FontFamily};
    font-size: ${theme.tokens.heading1FontSize};
    font-weight: ${theme.tokens.heading1FontWeight};
    color: ${theme.tokens.heading1Color};
  `}
`;

const Heading2 = styled(HeadingBase)`
  ${({ theme }) => css`
    font-family: ${theme.tokens.heading2FontFamily};
    font-size: ${theme.tokens.heading2FontSize};
    font-weight: ${theme.tokens.heading2FontWeight};
    color: ${theme.tokens.heading2Color};
  `}
`;

const Heading3 = styled(HeadingBase)`
  ${({ theme }) => css`
    font-family: ${theme.tokens.heading3FontFamily};
    font-size: ${theme.tokens.heading3FontSize};
    font-weight: ${theme.tokens.heading3FontWeight};
    color: ${theme.tokens.heading3Color};
  `}
`;

const Heading4 = styled(HeadingBase)`
  ${({ theme }) => css`
    font-family: ${theme.tokens.heading4FontFamily};
    font-size: ${theme.tokens.heading4FontSize};
    font-weight: ${theme.tokens.heading4FontWeight};
    color: ${theme.tokens.heading4Color};
  `}
`;

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
export const Heading = ({ headingLevel = "p", headingStyle = "HEADING_1", children, ...props }: Props) => {
  switch (headingStyle) {
    case "HEADING_1_LG":
      return (
        <Heading1Lg as={headingLevel} {...props}>
          {children}
        </Heading1Lg>
      );
    case "HEADING_4":
      return (
        <Heading4 as={headingLevel} {...props}>
          {children}
        </Heading4>
      );

    case "HEADING_3":
      return (
        <Heading3 as={headingLevel} {...props}>
          {children}
        </Heading3>
      );

    case "HEADING_2":
      return (
        <Heading2 as={headingLevel} {...props}>
          {children}
        </Heading2>
      );

    default:
      return (
        <Heading1 as={headingLevel} {...props}>
          {children}
        </Heading1>
      );
  }
};
