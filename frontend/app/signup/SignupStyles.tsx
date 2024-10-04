import styled from "styled-components";

export const SignupWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

export const SignupContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const MaxWidth = styled.div`
  width: 50vw;
  position: relative;
  z-index: 3;
  display: flex;
  margin-top: 60px;
  min-height: 100%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;

  @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
    width: 90vw;
    margin: 0 auto;
  }s
`;

export const SignupContent = styled.div`
  text-align: center;
  color: white;
`;

export const EmailContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
  margin-top: 12px;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const CurveContainer = styled.div`
  position: relative;
  height: 5px;
  box-shadow: 1px 1px 30px 1px rgba(129, 218, 66, 0.9);
`;

export const GradientBackground = styled.div`
  height: 5px;
  background: linear-gradient(
    90deg,
    #fe3600 0%,
    #ff7b02 16%,
    #fad220 34%,
    #81da42 58%,
    #318eff 81%,
    #8b68e8 100%
  );
  filter: blur(4px);
  position: absolute;
  z-index: 5;
`;

export const Text1 = styled.div`
  text-align: start;
  font-size: 3rem;
  color: white;
  margin-bottom: 1rem;

  @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
  font-size: 2rem;
 }
`;