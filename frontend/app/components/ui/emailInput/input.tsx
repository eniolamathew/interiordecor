import { useState } from "react";
import { IInputProps } from "./input.i"
import { InputHolder, InputWrapper, FloatingLabel, InputError } from "./input.s"

const Input: React.FC<IInputProps> = (props) => {
    const [isFocused, setIsFocused] = useState(false);
  
    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      if (props.onBlur) props.onBlur(e);
    };
  
    return (
        <InputWrapper>
          <InputHolder
            value={props.value}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={props.onChange}
            disabled={props.disabled}
            type={props.obscureText ? "password" : "text"}
            placeholder=" " 
          />
          <FloatingLabel $isFocused={isFocused} $hasValue={!!props.value}>
            {props.label}
          </FloatingLabel>
          <InputError> 
            {props.error}
          </InputError>
        </InputWrapper>
    );
  };
  
  export default Input;