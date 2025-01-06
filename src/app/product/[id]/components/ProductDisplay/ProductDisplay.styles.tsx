import Image from "next/image";
import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 400px;
  padding-top: 66%;
  overflow: hidden;
`;
export const StyledBackgroundImage = styled.div<{ $image: string }>`
  ${({ $image }) => css`
    position: absolute;
    object-fit: cover;
    inset: -10%;
    background: url(${$image}) no-repeat center;
    z-index: 1;

    -webkit-filter: blur(100px);
    -moz-filter: blur(100px);
    -o-filter: blur(100px);
    -ms-filter: blur(100px);
    filter: blur(100px);
  `}
`;
export const StyledOverlay = styled.div`
  position: absolute;
  object-fit: cover;
  inset: 0;
  z-index: 2;
  background-color: #eaeaea45;
`;

export const StyledImage = styled(Image)`
  position: absolute;
  z-index: 9999;
  inset: 0;
  margin: 0 auto;
  height: 100%;
  width: auto;
  object-fit: contain;
`;
