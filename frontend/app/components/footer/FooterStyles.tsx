import styled from "styled-components";

// Main Footer Container
export const FooterContainer = styled.footer`
  background-color: transparent;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem 0 2rem 0;
  color: #fff;
`;

// Wrapper to control layout
export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 980px;
  margin: 0 auto;

  @media (max-width: ${props => props.theme.breakpoints.md}px) {
    flex-direction: column;
  }
`;

export const FooterLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const FooterRightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Logo or Brand Name
export const FooterLogo = styled.div`
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  width: 120px;
  height: 60px;
  background-image: url("/roomify.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;

// Container for Links
export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  @media (max-width: ${props => props.theme.breakpoints.md}px) {
    flex-direction: row;
    align-items: center;
  }
`;

// Individual Link
export const FooterLink = styled.a`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 0 1.5rem;
  font-size: 1rem;

  &:hover {
    transition: 0.3s ease-out;
  }

  @media screen and (max-width: 820px) {
    margin: 0.5rem 0;
  }
`;

// Container for Social Media Icons
export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Individual Social Icon Link
export const SocialIconLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 24px;
  margin: 0 0.5rem;

  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;

// Bottom Section
export const FooterBottom = styled.div`
  text-align: center;
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #fff;
`;
