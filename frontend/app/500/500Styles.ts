import styled from "styled-components";

export const ErrorWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing:border-box;
  padding: 0;
`;

export const ErrorContainer = styled.div`
  width: 100%;
  max-width: 1400px;
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

export const ErrorContent = styled.div`
  text-align: center;
`;