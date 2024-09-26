import { useState } from "react";
import { IInputProps } from "./input.i"
import { InputHolder, InputWrapper, FloatingLabel, InputError, EyeIcon } from "./input.s"
import Image from "next/image";

const Input: React.FC<IInputProps> = (props) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      if (props.onBlur) props.onBlur(e);
    };

    const togglePasswordVisibility = () => {
      setIsPasswordVisible((prev) => !prev);
    };
  
    return (
        <InputWrapper>
          <InputHolder
            value={props.value}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={props.onChange}
            disabled={props.disabled}
            type={isPasswordVisible ? "text" : "password"}
            placeholder="" 
          />
          <FloatingLabel $isFocused={isFocused} $hasValue={!!props.value}>
            {props.label}
          </FloatingLabel>
          {(isFocused || !!props.value ) && <EyeIcon $isFocused={isFocused} $hasValue={!!props.value} onClick={togglePasswordVisibility}>
            {isPasswordVisible ? 
              <Image 
                 alt="icon" 
                 src={"/icons/eye-slash-regular.svg"}
                 width={20}
                 height={20}
                 style={{ 
                     maxWidth: "20px", 
                     maxHeight: "20px", 
                     filter: "brightness(0) saturate(100%) invert(98%) sepia(78%) saturate(155%) hue-rotate(164deg) brightness(62%) contrast(100%)"
                 }}
             /> :
            <Image 
                alt="icon" 
                src={"/icons/eye-regular.svg"}
                width={20}
                height={20}
                style={{ 
                    maxWidth: "20px", 
                    maxHeight: "20px", 
                    filter: "brightness(0) saturate(100%) invert(98%) sepia(78%) saturate(155%) hue-rotate(164deg) brightness(62%) contrast(100%)"
                }}
            /> 
            } 
          </EyeIcon>}
          <InputError> 
            {props.error}
          </InputError>
        </InputWrapper>
    );
  };
  
  export default Input;