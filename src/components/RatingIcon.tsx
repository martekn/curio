import styled, { css } from "styled-components";
import { Star } from "react-feather";

type StarVariant = "empty" | "filled" | "half";

const Icon = styled(Star)<{ $variant: StarVariant; $size: string }>`
  ${({ theme, $variant, $size }) => css`
    stroke-width: 1px;
    height: ${$size};
    width: ${$size};

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
      clip-path: inset(0 50% 0 0);
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
 * @param [size="1rem"] - The size of the star icon (e.g., "1rem", "24px").
 * @returns The JSX element representing a single rating icon.
 */
export const RatingIcon = ({ variant, size = "1rem" }: { variant: StarVariant; size?: string }) => {
  return (
    <Container>
      {variant !== "empty" && <Icon $variant={variant} $size={size} />}
      <Icon $variant="empty" $size={size} />
    </Container>
  );
};
