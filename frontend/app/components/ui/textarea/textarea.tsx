"use client";
import { useState } from "react";
import { ITextAreaProps } from "./textarea.i"
import { TextAreaHolder, TextAreaWrapper, FloatingLabel, TextAreaError } from "./textarea.s"
import { useAuth } from "@/shared/context/AuthContext";  

const Textarea: React.FC<ITextAreaProps> = (props) => {
    const { isLightMode } = useAuth();
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false);
      if (props.onBlur) props.onBlur(e); 
    };
  
    return (
        <TextAreaWrapper>
          <TextAreaHolder
            value={props.value}
            onFocus={handleFocus}
            rows={props.rows}
            onBlur={handleBlur}
            onChange={props.onChange}
            disabled={props.disabled}
            $isLightMode={isLightMode}
            type={"text"}
            placeholder=" " 
          />
          <FloatingLabel $isFocused={isFocused} $hasValue={!!props.value} $isLightMode={isLightMode}>
            {props.label}
          </FloatingLabel>
          <TextAreaError> 
            {props.error}
          </TextAreaError>
        </TextAreaWrapper>
    );
  };
  
  export default Textarea;