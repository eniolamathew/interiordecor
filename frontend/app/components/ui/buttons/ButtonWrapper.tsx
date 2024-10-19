import React from "react";
import styled from "styled-components";
import { CustomButton } from "./button/customButton";

interface ButtonProps {
  text: string;
  width: string;
  height: string;
  margin: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean; 
}

interface ButtonTextProps {
  $width: string;
  $height: string;
  $margin: string;
  $disabled: boolean;
}

const ButtonText = styled.div`
  display: contents;
  text-align: center;
  font-size: 1.2rem;
`;

const ButtonWrap = styled.div<ButtonTextProps>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: ${props => props.$margin};
  width: ${props => props.$width};
  height: ${props => props.$height};
  opacity: ${props => props.$disabled ? '0.6' : '1'};
`;

const Button: React.FC<ButtonProps> = ({text, width, height, margin, onClick, disabled=false}) => {
  return (
    <ButtonWrap
      $width={width}
      $height={height}
      $margin={margin}
      $disabled={disabled}
    >
      <CustomButton onClick={disabled ? undefined : onClick} disabled={disabled}>
        <ButtonText>
          {text}
        </ButtonText>
      </CustomButton>
    </ButtonWrap>
  );
};

export default Button;