import styled from "styled-components";
import { COLORS } from "../../_static/color-palette";
import { fontDefault } from "../../_static/typography";

export const StyledTitle = styled.h1`
  margin: 0;
  font-family: ${fontDefault};
  letter-spacing: 0.2em;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 120%;
  color: ${COLORS.WHITE};
`;
