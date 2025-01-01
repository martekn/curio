import styled, { css } from "styled-components";
import { Star } from "react-feather";

type StarVariant = "empty" | "filled" | "half";

const Icon = styled(Star)<{ $variant: StarVariant }>`
  ${({ theme, $variant }) => css`
    stroke-width: 1px;
    height: 1rem;
    width: 1rem;

    ${$variant === "empty" &&
    css`
      fill: none;
      stroke: ${theme.colors.light.neutral400};
    `}

    ${$variant === "half" &&
    css`
      position: absolute;
      fill: ${theme.colors.light.neutral900};
      stroke: ${theme.colors.light.neutral900};
      clip-path: inset(0 50% 0 0)};
    `}

    ${$variant === "filled" &&
    css`
      position: absolute;
      fill: ${theme.colors.light.neutral900};
      stroke: ${theme.colors.light.neutral900};
    `}
  `}
`;

const Container = styled.div`
  position: relative;
`;

/**
 * Renders a rating icon based on the provided variant.
 *
 * @param variant - The variant of the star ("filled", "half", or "empty").
 * @returns The JSX element representing a single rating icon.
 */
export const RatingIcon = ({ variant }: { variant: StarVariant }) => {
  return (
    <Container>
      {variant !== "empty" && <Icon $variant={variant} />}
      <Icon $variant="empty" />
    </Container>
  );
};
