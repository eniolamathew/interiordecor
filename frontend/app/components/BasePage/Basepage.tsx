"use client";
import React, { useEffect, useState }  from "react";
import HomeNavbar from "../navbar/HomeNavbar";
import styled, { css, keyframes, useTheme} from "styled-components";

interface IChildrenProps {
  children: any
}

interface IBaseContainerProps {
  $background: string;
}

const moveBackground = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(-15%); }
  100% { transform: translateX(0); }
`;

const animatedBackground = css`
  animation: ${moveBackground} 20s infinite alternate linear;
`;

export const BaseWrapper = styled.div<IBaseContainerProps>`
  width: 100vw;
  display: flex;
  min-height: calc(100vh);
  height: auto;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  padding: 0;
  
  ${(props) => css`
    @media (min-width: ${props.theme.breakpoints.md}px) {
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 120%;
        min-height: 100%;
        height: 100%;
        background-image: url(${props.$background});
        background-size: cover;
        background-position: center;
        z-index: 1;
        ${animatedBackground}; 
      }

      &::after {
        content: "";
        position: absolute;
        width: 100%;
        min-height: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 2;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.6) 15%,
          rgba(0, 0, 0, 0.6) 50%,
          rgba(0, 0, 0, 0.95) 70%,
          rgba(0, 0, 0, 0.4) 95%,
          rgba(0, 0, 0, 1) 100%
        );
        opacity: 0.9;
      }
    }
  `}
`;

export const BaseContainer = styled.div`
  width: 100%;
  max-width: 1240px;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MaxWidth = styled.div`
  width: 50vw;
  position: relative;
  z-index: 3;
  display: flex;
  margin-top: 60px;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;

  @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
    width: 90vw;
  }
`;

export const CardBody = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 4px;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    margin: 0;
    width: 100%;

    @media screen and (min-width: 800px) {
      min-height: 100%;
      padding: 20px 20px;
    }
}
`;

const Basepage = (props: IChildrenProps) => {
  const theme = useTheme();
  const [isTransparent, setIsTransparent] = useState<boolean>(window.innerWidth >= theme.breakpoints.md);
  
  useEffect(() => {
    const handleResize = () => {
      setIsTransparent(window.innerWidth >= theme.breakpoints.md);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [theme.breakpoints.md]);

  return (
    <>
      <HomeNavbar transparentBackground={isTransparent} />
      <BaseWrapper $background={"/asset/backgroundImage.jpg"}>
          <BaseContainer>
            <MaxWidth>
              <CardBody>
                {props.children}
              </CardBody>
            </MaxWidth>
          </BaseContainer>
      </BaseWrapper>
    </>
  );
}   

export default Basepage