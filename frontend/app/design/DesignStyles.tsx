import styled from "styled-components";

export const Designcontianer = styled.div`
     max-width: 1300px;
    margin: auto;
    margin-top: 60px;
    width: 100vw;
    height: calc(100vh - 60px);
    position: relative;
    padding: 2rem;

    @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
        height: 100%;
        overflow-y: scroll
    }
`;
   
export const Designwrapper = styled.div`
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    width: 100%;
    height: 100%;

    @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
        flex-direction: column;
    }
`;

export const Designinfo = styled.div<{$isLightMode: boolean}>`
    width: 40vw;
    border: ${(props) => (props.$isLightMode ? '2px solid rgba(228, 199, 199, 1)' : '2px solid rgba(228, 199, 199, 0.2)')};
    height: 100%;
    border-radius: 6px 0px 0px 6px;
    padding: 1rem;
    position: relative;

    @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 35rem;
    }
`;

export const Designdisplay = styled.div<{$isLightMode: boolean}>`
    width: 60vw;
    height: 100%;
    background-color: ${(props) => (props.$isLightMode ? 'rgb(225, 255, 255, 40%)' : 'rgb(25, 25, 25)')};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;

    @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 30rem;
        margin-top: 1rem;
    }
`;

export const Infobody = styled.div`
    // overflow-y: scroll;
    padding-right: 10px;
    height: calc(100% - 120px);
    scrollbar-width: 12px;
    z-index: 20;
`;

export const Infofooter= styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 1rem;
    padding-right: 1rem;

    @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
        padding-left: 2rem;
        padding-right: 2rem;    
    }
`;

export const RoomType = styled.div<{$isLightMode: boolean}>`
    background-color: ${(props) => (props.$isLightMode ? 'rgb(225, 255, 255, 40%)' : 'rgb(25, 25, 25)')};
    border: ${(props) => (props.$isLightMode ? '1px solid #B4B4B4' : '1px solid rgba(228, 199, 199, 0.2)')};
    padding: 0.5rem;
    border-radius: 8px;
`;