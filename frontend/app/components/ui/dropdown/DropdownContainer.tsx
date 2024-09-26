import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import Dropdown from './Dropdown';

interface DropdownContainerProps {
  label: string;
  value: string;
  error?: string;
  disabled: boolean;
  options: { value: string, display: string }[];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const DropdownContainer: React.FC<DropdownContainerProps> = (props) => {
  return (
      <Dropdown
        label={props.label}
        value={props.value}
        onChange={props.onChange}
        error={props.error!}
        disabled={props.disabled}
        options={props.options}
      />
  );
};

export default DropdownContainer;
