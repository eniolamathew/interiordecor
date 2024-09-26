import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import Checkbox from './checkbox';

interface CheckboxContainerProps {
  type: string;
  error: boolean;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckBoxWrapper = styled.div<{ error: boolean }>`
  display: flex;
  width: 1rem;
  margin-right: 0.5rem;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid ${props => (props.error ? 'red' : 'black')};
  border-radius: 1px;
`;

const CheckboxContainer: React.FC<CheckboxContainerProps> = (props) => {
  return (
    <CheckBoxWrapper error={props.error}>
      <Checkbox
        type={props.type}
        checked={props.checked}
        onChange={props.onChange}
      />
    </CheckBoxWrapper>
  );
};

export default CheckboxContainer;
