import styled from "styled-components"

interface IInputHolderProps extends React.HTMLAttributes<HTMLInputElement> {
    value?: string;
    type: string;
    $isLightMode: boolean;
}

const InputWrapper = styled.div`
  position: relative;
  max-width: 100%;
  margin: 0rem 0rem;
`;

const InputError = styled.div`
  min-height: 24px;
  position: relative;
  text-align: left;
  color: var(--colour-red);
  font-weight: 500;
`;

const FloatingLabel = styled.label<{ $isFocused: boolean; $hasValue: boolean; $isLightMode:boolean }>`
  position: absolute;
  left: 16px;
  top: ${(props) => (props.$isFocused || props.$hasValue ? '16px' : `calc(50% - 12px)` )};
  transform: ${(props) => (props.$isFocused || props.$hasValue ? 'translateY(-50%) scale(0.8)' : 'translateY(-50%)')};
  color: ${(props) => (props.$isLightMode ? '#000' : '#B4B4B4')};
  transform-origin: left;
  transition: all 0.2s ease-out;
  pointer-events: none;
  text-align: left;
`;


const InputHolder = styled.input<IInputHolderProps>`
  max-width: 100%;
  height: 80px;
  border-radius: 12px;
  border: 1px solid #B4B4B4;
  padding: 1rem;
  font-size: 1rem;
  outline: none;
  background-color: transparent !important;

  &:focus {
    border: ${(props) => (props.$isLightMode ? '3px solid #000' : '3px solid #FFF' )};
    border-radius: 12px;
  }

  &:focus + ${FloatingLabel} {
    top: 16px;
    font-size: 0.6rem
    transform: translateY(-50%) scale(0.9);
  }
`;

const EyeIcon = styled.div`
  position: absolute;
  top: calc(50% - 12px);
  right: 16px;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 1.5rem;
  color: #B4B4B4;
  transition: color 0.2s ease;
  width: 30px;
`;

export { InputHolder, FloatingLabel, InputWrapper, InputError, EyeIcon};