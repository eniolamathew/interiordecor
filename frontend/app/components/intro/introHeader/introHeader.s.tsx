import theme from "../../style/theme"
import styled from "styled-components";
import { IIntroHeadingProps } from "./introHeader.i";

export const IntroHeading = styled.h2`
  display: ${(props:IIntroHeadingProps) => !props.mobile ? "none;" : "block;"}
  font-weight: ${theme.fonts.default.weight};
  text-transform: uppercase;

  @media screen and (min-width: ${theme.breakpoints.md}px) {
    display: ${(props:IIntroHeadingProps) => !props.mobile ? "block;" : "none;"}
  }
`;
