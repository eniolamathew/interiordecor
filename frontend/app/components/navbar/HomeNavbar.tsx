"use client";
import React, { useEffect, useState } from "react";
import { CustomButton } from "../ui/buttons/button/customButton";
import { usePathname, useRouter } from "next/navigation";
import { NavbarContainer, NavItems, NavItem, NavButton, NavIcon, NavRight, NavGroup} from "./NavbarStyles"
import { useAuth } from "../../../shared/context/AuthContext";
import ReactToggleSliderSwitch from "react-toggle-slider-switch";
import Modal from "../ui/modal/Modal";
import UserMenu from "../menu/Usermenu";
import ThemeMenu from "../menu/ThemeMenu";
import Image from "next/image";

const HomeNavbar = () => {
  const { isLightMode, setIsLightMode, isLoggedIn } = useAuth();
  const router = useRouter();
  const pathname = usePathname(); 
  const [scrollY, setScrollY] = useState<number>(0);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showTheme, setShowTheme] = useState<boolean>(false);
  const [showSettingModal, setShowSettingModal] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      const navContainer = document.querySelector(".navConatainer");
      if (navContainer) {
        if (currentScrollY > window.innerHeight * 0.10) {
          navContainer.classList.add("backgroundColor");
        } else {
          navContainer.classList.remove("backgroundColor");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  const menuItems = [
    { title: "My Details", href: "/account/profile", imgSrc:"https://cdn.roomify.org/menu-item-my-details.svg" },
    { title: "My Plan", href: "/account/plans", imgSrc:"https://cdn.roomify.org/menu-plan.svg" },
    { title: "Change Password", href: "/changepassword", imgSrc:"https://cdn.roomify.org/instant-solid.svg" },
    { title: "Setting", href:"#", imgSrc:"/gear-solid.svg"} ,
    { title: "Logout", href: "/", imgSrc:"/right-from-bracket-solid.svg" },
  ];

  const themeItems = [
    { title: "Dark", onClick:()=>{setIsLightMode(false)} },
    { title: "Light", onClick:()=>{setIsLightMode(true)} },
  ];

  const handleShowMenu = ()=>{ setShowMenu((prev) =>{ return !prev }) 
    setShowTheme(false)
  }

  const handleLightMode = (checked:boolean)=>{
    setIsLightMode(checked)
  }

  return (<>
    {showMenu && 
      <UserMenu  
        menuItems={menuItems}
        showMenu={showMenu} 
        setShowMenu={setShowMenu} 
        setShowSettingModal={setShowSettingModal} 
      />
    }
    {showTheme && 
      < ThemeMenu  
        menuItems={themeItems}
        showThemeMenu={showTheme} 
        setShowThemeMenu={setShowTheme} 
      />
    }
    { showSettingModal && 
        <Modal title={"Settings"}
            onClose={() => setShowSettingModal(false)}
            width={"75%"} 
            height={"75%"}
        >
          <ReactToggleSliderSwitch
            label={"Light Mode"}
            checked={isLightMode}
            onChange={handleLightMode}
            onColor="#0f0"
            offColor="#f00"
            height={28}
            width={70}
            checkedIcon={true}
            uncheckedIcon={true}
            labelStyle={{ fontWeight: "bold", fontSize: "14px" }}
          />
        </Modal>
    }
    <NavbarContainer id="navConatainer" className="navConatainer" $isLightMode={isLightMode}>
      <NavItems>
      {isLoggedIn ? (
        <NavRight>
          <NavItem className="logo" onClick={(e)=>{ router.push("/design") }}>
              <div className="logoImage"></div>
              <div className="logoIcon"></div>
          </NavItem>
        </NavRight>
        ) : (
          <NavItem className="logo" onClick={(e)=>{ isLoggedIn ? router.push("/design") : router.push("/") }}>
              <div className="logoImage"></div>
              <div className="logoIcon"></div>
          </NavItem>
        )}
        {isLoggedIn ? (
          <NavIcon>
            <Image
              className="themeIcon" 
              alt="icon" 
              src={"/moon-regular.svg"}
              width={24}
              height={24}
              onClick={(e)=>{ setShowTheme(true);
                setShowMenu(false)
               }}
              style={{ 
                  maxWidth: "24px", 
                  maxHeight: "24px", 
                  cursor: "pointer",
                  filter: "brightness(100%) saturate(100%) invert(98%) sepia(78%) saturate(155%) hue-rotate(164deg) brightness(100%) contrast(100%)"
              }}
            />
            <div style={{width:"32px", display:"flex", alignItems:"center", justifyContent: "center", color: 'white'}}> | </div>
            <Image
              className="userIcon" 
              alt="icon" 
              src={"/user-regular.svg"}
              width={24}
              height={24}
              onClick={(e)=>{ window.innerWidth > 800 ? handleShowMenu() : router.push("/account")}}
              style={{ 
                  maxWidth: "24px", 
                  maxHeight: "24px", 
                  cursor: "pointer",
                  filter: "brightness(100%) saturate(100%) invert(98%) sepia(78%) saturate(155%) hue-rotate(164deg) brightness(100%) contrast(100%)"
              }}
            />
            </NavIcon>
        ) : ( pathname === "/" &&
          <NavGroup>
            <Image
              className="themeIcon" 
              alt="icon" 
              src={"/sun-regular.svg"}
              width={20}
              height={20}
              onClick={(e)=>{ setShowTheme(true);
                setShowMenu(false) 
              }}
              style={{ 
                  maxWidth: "20px", 
                  maxHeight: "20px", 
                  cursor: "pointer",
                  filter: "brightness(100%) saturate(100%) invert(98%) sepia(78%) saturate(155%) hue-rotate(164deg) brightness(100%) contrast(100%)"
              }}
            />
            <div style={{width:"32px", display:"flex", alignItems:"center", justifyContent: "center", color: 'white'}}> | </div>
            <NavButton>
              <CustomButton onClick={(e) => {
                e.preventDefault();
                router.push("/login");
              }}
              > Sign In
              </CustomButton>
            </NavButton>
          </NavGroup>
        )}
      </NavItems>
    </NavbarContainer>
  </>
  );
};

export default HomeNavbar;