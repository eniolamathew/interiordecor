import styled from "styled-components"

const DropdownError = styled.div`
  min-height: 24px;
  position: relative;
  text-align: left;
  color: var(--colour-red);
`;

const DropdownWrapper = styled.div`
  position: relative;
  max-width: 100%;
  margin: 0rem 0rem;
  overflow: visible; 
`;

const FloatingLabel = styled.label<{ $isFocused: boolean; $hasValue: boolean, $isLightMode:boolean }>`
  position: absolute;
  left: 16px;
  top: ${(props) => (props.$isFocused || props.$hasValue ? '16px' : `calc(50% - 12px)` )};
  transform: ${(props) => (props.$isFocused || props.$hasValue ? 'translateY(-50%) scale(0.8)' : 'translateY(-50%)')};
  transform-origin: left;
  color: ${(props) => (props.$isLightMode ? '#000' : '#B4B4B4')};
  transition: all 0.2s ease-out;
  pointer-events: none;
  text-align: left;
`;

// const DropdownHolder = styled.div`
const DropdownHolder = styled.div<{ $disabled: boolean, $isLightMode:boolean }>`

  ${(props) =>
    props.$disabled &&
    `background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 0.6;
  `}

  max-width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  border: 1px solid #B4B4B4;
  padding: 1rem;
  font-size: 1rem;
  outline: none;
  background-color: transparent !important;
  position: relative; 

  &:focus {
    border: ${(props) => (props.$isLightMode ? '3px solid #000' : '3px solid #FFF' )};
    border-radius: 12px;
  }

  &:focus + ${FloatingLabel}, &:not(:placeholder-shown) + ${FloatingLabel} {
    top: 16px;
    transform: translateY(-50%) scale(0.9);
  }
`;

const ClearButton = styled.span<{ $isLightMode:boolean }>`
  margin-left: 8px;
  cursor: pointer;
  font-size: 1.2rem;;
  width: 1.5rem;
  color: ${(props) => (props.$isLightMode ? 'rgba(15, 15, 15,)' : '#888' )};

  &:hover {
    color: ${(props) => (props.$isLightMode ? 'rgba(1, 1, 1, 0.7)' : 'rgba(255, 255, 255, 0.7)' )};
  }
`;

const ValueWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1; /* Take up available space */
  overflow: hidden; /* Prevent overflow in case of long value */
`;

export { DropdownHolder, FloatingLabel, DropdownWrapper, DropdownError, ClearButton, ValueWrapper};