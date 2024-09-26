import styled from "styled-components"

interface IInputHolderProps extends React.HTMLAttributes<HTMLInputElement> {
    value?: string
    type:string
}

export const InputHolder = styled.input<IInputHolderProps>`
    width:100%;
    border-radius: 12px;
    border: 1px solid #B4B4B4;
    padding: 0.5rem;
    margin-top:10px;
`