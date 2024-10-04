"use client"
import React from "react";
import styled from "styled-components";
import { HomeButton } from "./button/homeButton";
import Image from "next/image";

interface ButtonContainerProps {
  text?: string;
  icon?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonText = styled.div`
  display: contents;
  text-align: center;
  font-size: 1.2rem;
  margin-left: 2rem;
  margin-right: 2rem;
`;

const ButtonContainerWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const HomeUiButton: React.FC<ButtonContainerProps> = ({text, icon, onClick}) => {
  return (
    <ButtonContainerWrapper>
      <HomeButton onClick={onClick}>
        {text && <ButtonText>{text}</ButtonText>}
        {icon && 
            <Image
                className="homeIcon" 
                alt="icon" 
                src={"https://cdn.roomify.org/chevron-right-solid.svg"}
                width={30}
                height={30}
                style={{ 
                    maxWidth: "24px", 
                    maxHeight: "24px", 
                    filter:"invert(100%) brightness(100%) contrast(100%)"
                }}
            />
        }
      </HomeButton>
    </ButtonContainerWrapper>
  );
};

export default HomeUiButton;
