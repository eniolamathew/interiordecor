"use client";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useAuth } from "@/shared/context/AuthContext";

// Types for the props and menu item structure
interface ThemeItem {
  title: string;
  onClick: ()=> void;
}

interface ThemeProps {
  menuItems: ThemeItem[];
  showThemeMenu: boolean;
  setShowThemeMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

//Hook to detect clicks outside the component
function useClickOutside(ref: React.RefObject<HTMLDivElement>, onClickOutside: () => void) {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (ref.current && !ref.current.contains(event.target as Element) && !(event.target as Element).classList.contains("themeIcon")) {
            onClickOutside();
          }
        };
      
        document.addEventListener("mousedown", handleClickOutside);
      
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [ref, onClickOutside]);
}

// Styled components for menu
const EllipseMenuWrapper = styled.div`
  position: fixed;
  display: inline-block;
  top: 60px;
  right: 20px;
  height: 260px;
  width: 250px;
  float: right;
  z-index: 99999999;
`;

const ThemeDataRow = styled.div<{$isLightMode:boolean}>`
  position: absolute;
  background-color: black;
  min-width: 160px;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
`;

const DropdownItem = styled.button<{$isLightMode:boolean}>`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 10px;
  text-align: left;
  cursor: pointer;
  width: 100%;
  color: ${(props) => (props.$isLightMode ? 'rgb(1, 1, 1)' : 'rgb(225, 225, 225)' )};

  &:hover {
    border-radius: 6px;
    background-color: rgba(125, 123, 123, 0.2);
  }
`;

// Main UserMenu component
const ThemeMenu: React.FC<ThemeProps> = (props) => {
  const { isLightMode } = useAuth();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useClickOutside(wrapperRef, () => {
    props.setShowThemeMenu((prev) =>{ return !prev })
  });

  const onChange = (onClick: ()=>void) => {
    onClick();
    props.setShowThemeMenu(false);
  };

  return (<>
    <EllipseMenuWrapper>
      <ThemeDataRow $isLightMode={isLightMode} className={'theme-data-row'} ref={wrapperRef}>
        <Dropdown>
            {props.menuItems.map((item, index) => (
                <DropdownItem
                    $isLightMode={isLightMode}
                    onClick={() => onChange(item.onClick)}
                    key={index}
                >
                  <div className="pl-2" style={{color: "white"}}>{item.title}</div>
                </DropdownItem>
              ))}
        </Dropdown>
      </ThemeDataRow>
    </EllipseMenuWrapper>
  </>);
};

export default ThemeMenu;  