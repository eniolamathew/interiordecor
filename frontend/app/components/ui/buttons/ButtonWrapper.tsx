import React from "react";
import styled from "styled-components";
import { CustomButton } from "./button/customButton";

interface ButtonProps {
  text: string;
  width: string;
  height: string;
  margin: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface ButtonTextProps {
  $width: string;
  $height: string;
  $margin: string;
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
`;

const Button: React.FC<ButtonProps> = ({text, width, height, margin, onClick}) => {
  return (
    <ButtonWrap
      $width={width}
      $height={height}
      $margin={margin}
    >
      <CustomButton onClick={onClick}>
        <ButtonText>
          {text}
        </ButtonText>
      </CustomButton>
    </ButtonWrap>
  );
};

export default Button;
