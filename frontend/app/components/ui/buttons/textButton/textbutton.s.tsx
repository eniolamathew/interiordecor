import theme from "../../../style/theme";
import styled from "styled-components";

export const TextButton = styled.button<React.HTMLAttributes<HTMLButtonElement>>`
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: ${theme.button.size};
    transition: background-color 200ms linear, border-bottom-color 200ms linear; 
`;