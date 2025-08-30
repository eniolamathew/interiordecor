"use client";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Image from "next/image";
import UserAuthManager from "@/shared/data/UserAuthManager";
import { useRouter } from "next/navigation";
import { useAuth } from "@/shared/context/AuthContext";
import { removeCookieToken } from "@/shared/data/cookieManager";
import { LucideProps } from "lucide-react";

// Types for the props and menu item structure
interface IMenuItem {
  title: string;
  href: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
}

interface UserMenuProps {
  menuItems: IMenuItem[];
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSettingModal: React.Dispatch<React.SetStateAction<boolean>>;
}

//Hook to detect clicks outside the component
function useClickOutside(ref: React.RefObject<HTMLDivElement>, onClickOutside: () => void) {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (ref.current && !ref.current.contains(event.target as Element) && !(event.target as Element).classList.contains("userIcon")) {
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
  z-index: 1000;
`;

const MenuDataRow = styled.div<{$isLightMode:boolean}>`
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

const Separator = styled.div`
    border-top: 1px solid rgba(125, 123, 123, 0.5);  
`;

// Main UserMenu component
const UserMenu: React.FC<UserMenuProps> = (props) => {
  const router = useRouter();
  const { isLightMode, setIsLightMode, logout } = useAuth();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useClickOutside(wrapperRef, () => {
    props.setShowMenu((prev) =>{ return !prev })
  });

  const onChange = (href: string, title: string) => {
    console.log("aaa");
    if(title.toLowerCase() === "logout"){ 
        UserAuthManager.removeToken()
        removeCookieToken();
        router.push(href)
        props.setShowMenu(false);
        logout()
    } 
    else if(title.toLowerCase() === "setting"){
        props.setShowSettingModal(true);
        props.setShowMenu(false);
    } 
    else{
        router.push(href)
        props.setShowMenu(false);
    }
  };

  return (<>
    <EllipseMenuWrapper>
      <MenuDataRow $isLightMode={isLightMode} className={'menu-data-row'} ref={wrapperRef}>
        <Dropdown>
            {props.menuItems.map((item, index) => (
                item.title.toLowerCase() !== 'logout' ? (
                <DropdownItem
                    $isLightMode={isLightMode}
                    onClick={() => onChange(item.href, item.title)}
                    key={index}
                >
                    <item.icon 
                      className="imageIcon"
                      size={16}
                      style={{ width: "16px", height: "16px" }}
                      color="#cfdadaff"
                    />
                    <div className="ml-3" style={{color:"white"}}>{item.title}</div>
                </DropdownItem>
                ) : (
                <React.Fragment key={index}>
                    <Separator role="separator" className="my-1"/>
                    <DropdownItem $isLightMode={isLightMode}
                        onClick={() => onChange(item.href, item.title)}
                    >
                    <item.icon 
                      className="imageIcon"
                      size={12}
                      style={{ width: "16px", height: "16px" }}
                      color="#cfdadaff"
                    />
                    <div className="ml-3" style={{color: "white"}}>{item.title}</div>
                    </DropdownItem>
                </React.Fragment>
                )))}
        </Dropdown>
      </MenuDataRow>
    </EllipseMenuWrapper>
  </>);
};

export default UserMenu;  