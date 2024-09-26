import theme from "../../style/theme";
import styled from "styled-components";

export const IntroText = styled.p<React.HTMLAttributes<HTMLParagraphElement>>`
  padding: 0 2rem;
  text-align: center;

  @media screen and (min-width: ${theme.breakpoints.md}px) {
    padding: 0;
    text-align: justify;
  }
`;
