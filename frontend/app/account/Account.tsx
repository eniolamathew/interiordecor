"use client";
import React, { useState } from "react";
import "./account.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ReactToggleSliderSwitch from "react-toggle-slider-switch";
import UserAuthManager from "@/shared/data/UserAuthManager";
import { useAuth } from "@/shared/context/AuthContext";
import Modal from "../components/ui/modal/Modal";

const Profile = () => {
  const {  isLightMode, setIsLightMode, logout } = useAuth();
  const router = useRouter();
  const [showSettingModal, setShowSettingModal] = useState<boolean>(false);
  const profileLayout = [
    { title: "Your Details", href: "/account/profile", imgSrc:"https://cdn.roomify.org/menu-item-my-details.svg" },
    { title: "Plan", href: "/account/plans", imgSrc:"https://cdn.roomify.org/menu-plan.svg" },
    { title: "Change Password", href: "/changepassword", imgSrc:"https://cdn.roomify.org/instant-solid.svg" },
    { title: "Setting", href:"#", imgSrc:"/gear-solid.svg"} ,
    { title: "Logout", href: "/", imgSrc:"/right-from-bracket-solid.svg" },
  ];

  const handleLightMode = (checked:boolean)=>{ setIsLightMode(checked) }

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
                            width={window.innerWidth >= 800 ? 20 : 12}
                            height={window.innerWidth >= 800 ? 20 : 12}
                            style={{ 
                              width: `${window.innerWidth >= 800 ? "20px" : "12px"}`, 
                              height: `${window.innerWidth >= 800 ? "20px" : "12px"}`, 
                              filter: "brightness(0) saturate(100%) invert(98%) sepia(78%) saturate(155%) hue-rotate(164deg) brightness(117%) contrast(100%)"
                            }}
                          />
                        </div>
                      <div className="right-container" style={{ width: "55%" }}>
                        <div className="label-container">
                            <Link href={item.href} className="">
                              <span className="text">
                                {item.title}
                              </span>
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

export default Profile;