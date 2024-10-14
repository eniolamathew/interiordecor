import styled from "styled-components";

export const ProfileWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

export const ProfileContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const ProfileHeader = styled.div`
    text-align: start;
    font-size: 3rem;
    margin-bottom: 1rem;
    text-align: center;
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

  @media (max-width: 800px) {
    width: 90vw;
  }
`;

export const ProfileContent = styled.div`
  text-align: center;
`;