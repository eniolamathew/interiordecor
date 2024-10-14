import styled from "styled-components";

export const Pricing = styled.div<{$isLightMode: boolean}>`
    cursor: pointer;
    text-align: left;
    border-radius: 12px;
    padding: 30px;
    width: 260px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: 10px;
    position: relative;
    border: ${(props) => (props.$isLightMode ? '1px solid rgba(25, 25, 25, 1)' : '1px solid rgba(255, 255, 255, 0.1)' )};
    width: calc(25% - 30px - 30px - 30px);
    width: calc(25% - 30px);
    width: calc(33% - 30px);

    &:hover {
      opacity: 1;
      border-color: ${(props) => (props.$isLightMode ? 'rgba(75, 75, 75, 0.1)' : 'rgba(255, 255, 255, 0.2)' )};
      background-color: ${(props) => (props.$isLightMode ? 'rgba(25, 25, 25, 0.1)' : 'rgba(255, 255, 255, 0.1)' )};
    }
`;
