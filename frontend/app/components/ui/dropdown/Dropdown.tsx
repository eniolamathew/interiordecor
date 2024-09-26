import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { IDropDownProps } from "./dropdown.i";
import { DropdownHolder, FloatingLabel, DropdownWrapper, DropdownError, ClearButton, ValueWrapper} from "./dropdown.s"

interface IDropdownOption {
  value: string;
  display: string;
}

const DropdownMenu = styled.div`
  position: absolute;
  width: 100%;
  border: 1px solid #B4B4B4;
  border-radius: 4px;
  background-color: white;
  color: black;
  max-height: 200px;
  overflow-y: auto;
  top: calc(100% - 20px);
  left: 0;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-top: 2px; 
  pointer-events: auto;
`;


const DropdownItem = styled.div<{ isSelected: boolean }>`
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? 'rgba(218, 48, 48, 0.3)' : 'transparent')};

  &:hover {
    background-color:  ${(props) => (props.isSelected ? 'rgba(218, 48, 48, 0.3)' : 'rgba(17, 225, 253, 0.3)')};
  }
`;


interface DropdownProps extends IDropDownProps {
  options: IDropdownOption[];
}

const Dropdown: React.FC<DropdownProps> = ({ label, value, onChange, options, error, disabled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dropdownHolderRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option:{value: string, display:string}) => {
    const value = option.value
    setSelectedValue(option.display);
    onChange({ target: { value } } as React.ChangeEvent<HTMLInputElement>);
    setIsOpen(false);
  };

  const handleClear = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    event.stopPropagation(); 
    setSelectedValue("");
    setIsOpen(false)
    onChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>); 
    if (dropdownHolderRef.current) { dropdownHolderRef.current.blur() }
  };

  return (
    <DropdownWrapper ref={wrapperRef}>
      <DropdownHolder ref={dropdownHolderRef}
        onClick={() => { if (!disabled) { setIsOpen(!isOpen) } }}
        onFocus={() => { if (!disabled) setIsFocused(true) }}
        onBlur={() => { if (!disabled) setIsFocused(false) }}
        tabIndex={disabled ? -1 : 0}
        $disabled={disabled}
      >
        <ValueWrapper>
          <FloatingLabel $isFocused={isFocused} $hasValue={!!selectedValue}>
            {label}
          </FloatingLabel>
          {selectedValue}
        </ValueWrapper>
        {selectedValue && <ClearButton onClick={handleClear}> × </ClearButton>}
      </DropdownHolder>
      {isOpen && (
        <DropdownMenu>
          {options.map((option) => (
            <DropdownItem 
              key={option.value} 
              isSelected={option.display === selectedValue}
              onClick={() => handleSelect(option)}
            >
              {option.display}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
      <DropdownError> 
           {error}
        </DropdownError>
    </DropdownWrapper>
  );
};

export default Dropdown;