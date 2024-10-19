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
`;

const ButtonContainerWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const HomeUiButton: React.FC<ButtonContainerProps> = ({text, icon, onClick}) => {
  let url = process.env.NEXT_PUBLIC_CLOUDFLARE_URL_PROD ?? process.env.NEXT_PUBLIC_CLOUDFLARE_URL_DEV;
  return (
    <ButtonContainerWrapper>
      <HomeButton onClick={onClick}>
        {text && <ButtonText>{text}</ButtonText>}
        {icon && 
            <Image
                className="homeIcon" 
                alt="icon" 
                src={`${url}/chevron-right-solid.svg`}
                width={24}
                height={24}
                style={{ 
                    maxWidth: "30px", 
                    maxHeight: "30px", 
                    marginRight:"1rem",
                    marginLeft:"1rem",
                    textAlign: "center",
                    cursor: "pointer",
                    filter:"invert(100%) brightness(100%) contrast(100%)"
                }}
            />
        }
      </HomeButton>
    </ButtonContainerWrapper>
  );
};

export default HomeUiButton;
