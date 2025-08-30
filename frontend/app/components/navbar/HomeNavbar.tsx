"use client";
import React, { useEffect, useState } from "react";
import { CustomButton } from "../ui/buttons/button/customButton";
import { usePathname, useRouter } from "next/navigation";
import { NavbarContainer, NavItems, NavItem, NavButton, NavIcon, NavRight, NavGroup} from "./NavbarStyles"
import { User, CreditCard, Lock, Settings, LogOut } from "lucide-react";
import { useAuth } from "../../../shared/context/AuthContext";
import ReactToggleSliderSwitch from "react-toggle-slider-switch";
import Modal from "../ui/modal/Modal";
import UserMenu from "../menu/Usermenu";
import ThemeMenu from "../menu/ThemeMenu";
import Image from "next/image";
import Icon from "../ui/Icon/Icon";

interface IHomeNavbarProps {
  transparentBackground?: boolean
}

const HomeNavbar:React.FC<IHomeNavbarProps> = ({ transparentBackground }) => {
  let url = process.env.NEXT_PUBLIC_CLOUDFLARE_URL_PROD ?? process.env.NEXT_PUBLIC_CLOUDFLARE_URL_DEV;
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
          isLoggedIn ? navContainer.classList.add("navPageBackgroundColor") : navContainer.classList.add("navHomeBackgroundColor");
        } else {
          isLoggedIn ? navContainer.classList.remove("navPageBackgroundColor") : navContainer.classList.remove("navHomeBackgroundColor"); 
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  const menuItems = [
    { title: "My Details", href: "/account/profile", icon: User },
    { title: "My Plan", href: "/account/plans", icon: CreditCard },
    { title: "Change Password", href: "/changepassword", icon: Lock },
    { title: "Setting", href: "#", icon: Settings },
    { title: "Logout", href: "/", icon: LogOut },
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
    <NavbarContainer id="navConatainer" className="navConatainer" $isLightMode={isLightMode} $transparentBackground={transparentBackground ? transparentBackground: false}>
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
              { isLightMode ?
                <button 
                  className="btn btn-primary" 
                  type="button"
                  onClick={(e)=>{ setIsLightMode(false) }}
                  style={{color : "white" , maxWidth: "24px"}}
                >
                  <Icon id="cil-moon" width={24} height={24} />
                </button> :
                <Image
                  className="themeIcon" 
                  alt="icon" 
                  src={"/sun-regular.svg"}
                  width={24}
                  height={24}
                  onClick={(e)=>{ setIsLightMode(true) }}
                  style={{ 
                      maxWidth: "24px", 
                      maxHeight: "24px", 
                      cursor: "pointer",
                      filter: "brightness(100%) saturate(100%) invert(98%) sepia(78%) saturate(155%) hue-rotate(164deg) brightness(100%) contrast(100%)"
                  }}
                />
              }
              <div style={{ display:"flex", alignItems:"center", justifyContent: "center", color: 'white'}}> 
                <div className="text-opacity-90 vbar"></div>
              </div>
              <button 
                className="btn btn-primary" 
                type="button"
                style={{color : "white"}}
                onClick={(e)=>{ window.innerWidth > 800 ? handleShowMenu() : router.push("/account")}}
              >
                <Icon id="cil-user" width={24} height={24} />
              </button>
            </NavIcon>
            ) : ( pathname === "/" &&
              <NavGroup>
                  { isLightMode ?
                    <button 
                      className="btn btn-primary" 
                      type="button"
                      onClick={(e)=>{ setIsLightMode(false) }}
                      style={{color : "white" , maxWidth: "20px"}}
                    >
                      <Icon id="cil-moon" width={20} height={20} />
                    </button> :
                    <Image
                      className="themeIcon" 
                      alt="icon" 
                      src={"/sun-regular.svg"}
                      width={20}
                      height={20}
                      onClick={(e)=>{ setIsLightMode(true) }}
                      style={{ 
                          maxWidth: "20px", 
                          maxHeight: "20px", 
                          cursor: "pointer",
                          filter: "brightness(100%) saturate(100%) invert(98%) sepia(78%) saturate(155%) hue-rotate(164deg) brightness(100%) contrast(100%)"
                      }}
                    />
                }
                <div style={{width:"32px", display:"flex", alignItems:"center", justifyContent: "center", color: 'white'}}> | </div>
                <NavButton>
                  <CustomButton onClick={(e) => {
                    e.preventDefault();
                    router.push("/login");
                    setIsLightMode(false);
                  }}> 
                  Sign In
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