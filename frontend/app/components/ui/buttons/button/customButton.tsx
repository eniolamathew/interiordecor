import theme from "../../../style/theme";
import styled from "styled-components";
import { TextButton } from "../textButton/textbutton.s";

export const CustomButton = styled(TextButton)`
    font-weight: ${theme.button.weight};
    font-size: 1.2rem;
    padding: 0.5rem 0 0.5rem;
    text-align: center;
    background-color: var(--colour-red);
    border: 1px solid var(--colour-red);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover { 
        border: 1px solid var(--colour-red);
        border-radius: 6px;
        background-color: transparent;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
        font-size: 0.8rem;
    }
`;