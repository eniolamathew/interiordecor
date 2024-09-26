import theme from "../../style/theme";
import styled from "styled-components";

export const ProgressBar = styled.div`
    background-color: ${theme.colors.lightGrey};
    height: 2px;
    margin: 1rem auto;
    margin-top:10px;
    position: relative;
    width: 32.35%;

    &:after {
        background-color: #000;
        display: block;
        content: "";
        height: 2px;
        left: 0;
        position: absolute;
    }
`;