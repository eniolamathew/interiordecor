import styled from "styled-components";

// Styled component for the Navbar container
const NavbarContainer = styled.nav<{$isLightMode:boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) => (props.$isLightMode ? '#000' : 'transparent' )};
  transition: background-color 0.3s ease; 
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  z-index: 99999999;
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 95vw;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  display: flex;
  margin: 0 15px;
  font-size: 1.2rem;
  cursor: pointer;
`;

const NavText = styled.li`
  margin: 0 15px;
  font-size: 1.1rem;
  cursor: pointer;
  max-width: 6rem;
  text-align: center;
  height: 2.3rem;
  border-bottom: 2px solid tranparent;

  &.active {
    border-bottom: 2px solid white; 
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
`;

const NavLeft = styled.div`
  display: flex;
  width: 40px;
  margin: 0 0px;

`;

const NavButton = styled.li`
  display: flex;
  width: 200px;
  margin: 0 15px;
  font-size: 1.2rem;
  cursor: pointer;
  color: white;

  @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
    width: 100px;
    margin: 0;
  }
`;

const NavGroup = styled.li`
  display: flex;
  align-items: center;
  width: 250px;
  margin: 0 0px;
  font-size: 1.2rem;
  cursor: pointer;

  @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
    width: 160px;
  }
`;

const NavIcon = styled.li`
  display: flex;
  align-items: center;
  width: 100px;
  margin: 0 0px;
  font-size: 1.2rem;
  cursor: pointer;
`;

export{ NavbarContainer,NavItems, NavItem, NavButton, NavIcon, NavLeft, NavRight, NavText, NavGroup}