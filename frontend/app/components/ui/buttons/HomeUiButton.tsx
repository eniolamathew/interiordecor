"use client"
import React from "react";
import styled from "styled-components";
import { HomeButton } from "./button/homeButton";
import Icon from "../icons/icon";

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
  return (
    <ButtonContainerWrapper>
      <HomeButton onClick={onClick}>
        {text && <ButtonText>{text}</ButtonText>}
        {icon && <></>
        // <Icon
        //   // className="chevronLeft"
        //   // src={IconType.ChevronLeft}
        //   alt="Chevron-left"
        //   width={16}
        //   height={16}
        //   filter={"invert(100%) brightness(100%) contrast(100%)"}
        // />
        }
      </HomeButton>
    </ButtonContainerWrapper>
  );
};

export default HomeUiButton;
