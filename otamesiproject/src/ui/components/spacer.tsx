import styled from "styled-components";

type Props = {
  width?: number;
  height?: number;
  flexShrink?: number;
  flexGrow?: number;
};
export const Spacer = styled.div<Props>`
  min-width: ${({ width }) => (width ? `${width}px` : 0)};
  min-height: ${({ height }) => (height ? `${height}px` : 0)};
  flex-grow: ${({ flexGrow }) =>
    flexGrow !== undefined ? flexGrow : "initial"};
  flex-shrink: ${({ flexShrink }) =>
    flexShrink !== undefined ? flexShrink : "initial"};
`;
