import styled from "styled-components";

export const Account = styled.div`
  margin-top: 60px;
`;

export const MenuNaviagtion = styled.ul``;

export const MenuItem = styled.li`

}`;

export const Title = styled.div`
  text-align: start;
  font-size: 3rem;

  margin-bottom: 1rem;
  text-align: center;
`;

export const RightContainerText = styled.span<{publicUrl: string}>`
  font-family: 'madera', Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  font-size: 24px;
  color: #fff;
  background: url(${(props) => `${props.publicUrl}/chevron-right-solid-red.svg`}) no-repeat right;
  background-size: 16px;
  padding-right: 25px;
  position: relative;
`;
