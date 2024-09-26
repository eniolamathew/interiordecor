import styled from "styled-components"

interface ITextAreaHolderProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  value?: string;
  rows: number;
  type: string;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

const TextAreaWrapper = styled.div`
  position: relative;
  max-width: 100%;
  margin: 0rem 0rem;
`;

const TextAreaError = styled.div`
  min-height: 24px;
  position: relative;
  text-align: left;
  color: var(--colour-red);
`;

const FloatingLabel = styled.label<{ $isFocused: boolean; $hasValue: boolean }>`
  position: absolute;
  left: 16px;
  top: ${(props) => (props.$isFocused || props.$hasValue ? '16px' : `calc(18.75% - 12px)` )};
  transform: ${(props) => (props.$isFocused || props.$hasValue ? 'translateY(-50%) scale(0.8)' : 'translateY(-50%)')};
  transform-origin: left;
  color: ${(props) => (props.$isFocused ? '#B4B4B4' : '#B4B4B4')};
  transition: all 0.2s ease-out;
  pointer-events: none;
  text-align: left;
`;


const TextAreaHolder = styled.textarea<ITextAreaHolderProps>`
  max-width: 100%;
  border-radius: 12px;
  border: 1px solid #B4B4B4;
  padding: 1rem;
  font-size: 1rem;
  outline: none;
  background-color: transparent !important;

  &:focus {
    border: 3px solid #FFF;
    border-radius: 12px;
  }

  &:focus + ${FloatingLabel}, &:not(:placeholder-shown) + ${FloatingLabel} {
    top: 16px;
    font-size: 0.6rem;
    transform: translateY(-50%) scale(0.9);
  }
`;

export { TextAreaHolder, FloatingLabel, TextAreaWrapper, TextAreaError};