"use client";
import React, { useEffect, useState } from "react";
import { CustomButton } from "../ui/buttons/button/customButton";
import { usePathname, useRouter } from "next/navigation";
import { NavbarContainer, NavItems, NavItem, NavButton, NavIcon, NavRight, NavText} from "./NavbarStyles"
import { useAuth } from "../../../shared/context/AuthContext";
import Image from "next/image";

const HomeNavbar = () => {
  const { designActivedIndex, setDesignActivedIndex, isLoggedIn } = useAuth();
  const router = useRouter();
  const pathname = usePathname(); 
  const [scrollY, setScrollY] = useState<number>(0);

  // filter: "brightness(100%) saturate(100%) invert(98%) sepia(78%) saturate(155%) hue-rotate(164deg) brightness(62%) contrast(100%)"

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

  return (<>
    <NavbarContainer id="navConatainer" className="navConatainer">
      <NavItems>
      {isLoggedIn ? (
        <NavRight>
          <NavItem className="logo" onClick={(e)=>{ router.push("/design") }}>
              <div className="logoImage"></div>
              <div className="logoIcon"></div>
          </NavItem>
              {pathname.startsWith("/design") && (
                <>
                  <NavText className={`nav-text ${ designActivedIndex === 0 ? "active" : ""}`} onClick={() => { setDesignActivedIndex(0)
                    router.push("/design") 
                }}> Design </NavText>
                </>
              )}
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
              className="userIcon" 
              alt="icon" 
              src={"https://roomify.org/user-regular.svg"}
              width={30}
              height={30}
              onClick={(e)=>{router.push("/account")}}
              style={{ 
                  maxWidth: "30px", 
                  maxHeight: "30px", 
                  filter: "brightness(100%) saturate(100%) invert(98%) sepia(78%) saturate(155%) hue-rotate(164deg) brightness(100%) contrast(100%)"
              }}
            />
            </NavIcon>
        ) : ( pathname === "/" &&
          <NavButton>
            <CustomButton onClick={(e) => {
              e.preventDefault();
                router.push("/login");
              }}
              > Sign In
            </CustomButton>
          </NavButton>
        )}
      </NavItems>
    </NavbarContainer>
  </>
  );
};

export default HomeNavbar;