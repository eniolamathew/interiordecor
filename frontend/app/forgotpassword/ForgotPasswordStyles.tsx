import styled from "styled-components";

export const ForgotPasswordWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing:border-box;
  padding: 0;
`;

export const ForgotPasswordContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MaxWidth = styled.div`
  width: 50vw;
  position: relative;
  z-index: 3;
  display: flex;
  margin-top: 60px;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;

  @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
    width: 90vw;
  }
`;

export const ForgotPasswordContent = styled.div`
  text-align: center;
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

   @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
  font-size: 2rem;
 }
`;