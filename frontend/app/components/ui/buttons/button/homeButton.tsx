import theme from "../../../style/theme";
import styled from "styled-components";
import { TextButton } from "../textButton/textbutton.s";

export const HomeButton = styled(TextButton)`
    font-weight: ${theme.button.bold};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    height: 80px;
    width: 25rem;
    padding: 1rem 0 1rem;
    text-align: center;
    background-color: var(--colour-red);
    border-radius: 12px;
`;