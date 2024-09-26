import styled from "styled-components"

export interface ICheckboxHolderProps extends React.HTMLAttributes<HTMLInputElement> {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    checked?: boolean;
    type: string;  
  }

export const CheckboxHolder = styled.input<ICheckboxHolderProps>`
    width:100%;
`