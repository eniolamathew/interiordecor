"use client";
import React, { useState, useEffect } from "react";
import "./account.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ReactToggleSliderSwitch from "react-toggle-slider-switch";
import UserAuthManager from "@/shared/data/UserAuthManager";
import { useAuth } from "@/shared/context/AuthContext";
import Modal from "../components/ui/modal/Modal";
import { RightContainerText } from "./AccountStyles";
import { removeCookieToken } from "@/shared/data/cookieManager";
import Loading from '@/app/loadingComp';

const Account = () => {       
  let url = process.env.NEXT_PUBLIC_CLOUDFLARE_URL_PROD ?? process.env.NEXT_PUBLIC_CLOUDFLARE_URL_DEV;
  const { isLightMode, setIsLightMode, logout } = useAuth();
  const router = useRouter()
  const [showSettingModal, setShowSettingModal] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const profileLayout = [
    { title: "Your Details", href: "/account/profile", imgSrc:`${url}/menu-item-my-details.svg` },
    { title: "Plan", href: "/account/plans", imgSrc:`${url}/menu-plan.svg` },
    { title: "Change Password", href: "/changepassword", imgSrc:`${url}/instant-solid.svg` },
    { title: "Setting", href:"#", imgSrc:`${url}/menu-settings-solid.png`},
    { title: "Logout", href: "/", imgSrc:`${url}/menu-item-logout.svg` },
  ];

  // Get window width after component mounts
  useEffect(() => {
    setIsMounted(true);
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLightMode = (checked: boolean): void => {
    setIsLightMode(checked);
  };

  if (!isMounted) { return <Loading /> }
  
  return (
    <>
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
        <div className="account">
        <div className="accountTitle">Your Account</div>
        <div className="accountContainer">
          <div className="landing-content">
            {profileLayout.map((item, ind) => {
              return (
                <div key={ind}>
                  <div className="menu-item" onClick={(e)=>{
                      e.preventDefault()
                      if(item.title === "Logout"){
                        UserAuthManager.removeToken()
                        removeCookieToken()
                        router.push(item.href)
                        logout()
                      } else if(item.title.toLowerCase() === "setting"){
                        setShowSettingModal(true);
                      } 
                      else{ router.push(item.href) }
                    }}
                    >
                      <div style={{ width: "100%", display: "flex", alignItems:"center" }}>
                        <div className="left-container" style={{ width: "45%" }}>
                          <Image 
                            className="imageIcon" 
                            alt="icon" 
                            src={item.imgSrc}
                            width={windowWidth >= 800 ? 20 : 16}
                            height={windowWidth >= 800 ? 20 : 16}
                            style={{ 
                              width: `${windowWidth >= 800 ? "20px" : "16px"}`, 
                              height: `${windowWidth >= 800 ? "20px" : "16px"}`,
                              filter: "invert(100%) brightness(100%) contrast(100%)",
                            }}
                          />
                        </div>
                      <div className="right-container" style={{ width: "55%" }}>
                        <div className="label-container">
                            <Link href={item.href} className="">
                              <RightContainerText publicUrl={url!} className="text">
                                {item.title}
                              </RightContainerText>
                            </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </div>
    </>
  );
};

export default Account;