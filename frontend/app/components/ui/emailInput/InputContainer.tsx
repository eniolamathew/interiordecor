import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import Input from './input';

interface InputContainerProps {
  label: string;
  value: string;
  error?: string;
  disabled: boolean;
  obscureText:boolean;
  autoComplete:boolean;
  onChange: (e:ChangeEvent<HTMLInputElement>) => void;
}

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction:column;
`;

const InputContainer: React.FC<InputContainerProps> = (props) => {
  return (
    <>
     <InputWrapper>
        <Input
          label={props.label}
          value={props.value}
          onChange={props.onChange}
          error={props.error!}
          disabled={props.disabled}
          obscureText={props.obscureText ? true : false}
          autoComplete={props.autoComplete}
        />
    </InputWrapper>
    </>
  );
};

export default InputContainer