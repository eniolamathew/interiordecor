"use client";
import theme from "../../../style/theme";
import styled from "styled-components";
import { TextButton } from "../../buttons/textButton/textbutton.s";

export const NavIcon = styled(TextButton)`
    font-weight: ${theme.button.bold};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    text-align: center;
    border-radius: 12px;
`;