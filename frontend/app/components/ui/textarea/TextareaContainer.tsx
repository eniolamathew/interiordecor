import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import TextArea from './textarea';

interface TextareaContainerProps {
  label: string;
  value: string;
  rows: number
  error?: string;
  disabled: boolean;
  onChange: (e:ChangeEvent<HTMLInputElement>) => void;
}

const TextAreaWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction:column;
`;

const TextareaContainer: React.FC<TextareaContainerProps> = (props) => {
  return (
    <>
     <TextAreaWrapper>
        <TextArea
          label={props.label}
          value={props.value}
          rows={props.rows}
          onChange={props.onChange}
          error={props.error!}
          disabled={props.disabled}
        />
    </TextAreaWrapper>
    </>
  );
};

export default TextareaContainer