import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
`;

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

`;

export const MaxWidth = styled.div`
  max-width: 50vw;
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0 auto;
  text-align: center;
`;

export const LoginContent = styled.div`
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
  text-align:start;
  font-size: 3rem;
  color: white;
`;

export const Text2 = styled.div`
  font-size: 2rem;
  color: white;

  span {
    color: #007bff;
  }
`;

export const Text3 = styled.div`
  font-size: 1.2rem;
  color: white;
`;

export const Text4 = styled.div`
  font-size: 1.2rem;
  margin-top: 2rem;
  color: white;
  margin-bottom: 1rem;
`;
