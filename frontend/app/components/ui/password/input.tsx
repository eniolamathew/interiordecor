"use client";
import { useState } from "react";
import { IInputProps } from "./input.i"
import { InputHolder, InputWrapper, FloatingLabel, InputError, EyeIcon } from "./input.s"
import Image from "next/image";
import { useAuth } from "@/shared/context/AuthContext";  

const Input: React.FC<IInputProps> = (props) => {
    let url = process.env.NEXT_PUBLIC_CLOUDFLARE_URL_PROD ?? process.env.NEXT_PUBLIC_CLOUDFLARE_URL_DEV;
    const { isLightMode } = useAuth();
    const [isFocused, setIsFocused] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const handleFocus = (e:React.FocusEvent<HTMLInputElement>) => { 
      e.preventDefault();
      setIsFocused(true)
    }

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
            $isLightMode={isLightMode}
            type={isPasswordVisible ? "text" : "password"}
            placeholder="" 
          />
          <FloatingLabel $isFocused={isFocused} $hasValue={ props.value.length > 0 ? true : false } $isLightMode={isLightMode}>
            {props.label}
          </FloatingLabel>
          {(isFocused || !!props.value ) && <EyeIcon onClick={togglePasswordVisibility}>
            {isPasswordVisible ? 
              <Image 
                 alt="icon" 
                 src={`${url}/eye-slash-regular.svg`}
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
                src={`${url}/eye-regular.svg`}
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