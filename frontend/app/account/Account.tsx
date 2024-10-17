"use client";
import React from "react";
import "./account.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import UserAuthManager from "@/shared/data/UserAuthManager";
import { useAuth } from "@/shared/context/AuthContext";
import { RightContainerText } from "./AccountStyles";

const Profile = () => {       
  let url = process.env.NEXT_PUBLIC_CLOUDFLARE_URL_PROD ?? process.env.NEXT_PUBLIC_CLOUDFLARE_URL_DEV;
  const { logout } = useAuth();
  const router = useRouter()
  const profileLayout = [
    { title: "Your Details", href: "/account/profile", imgSrc:`${url}/menu-item-my-details.svg` },
    { title: "Plan", href: "/account/plans", imgSrc:`${url}/menu-plan.svg` },
    { title: "Change Password", href: "/changepassword", imgSrc:`${url}/instant-solid.svg` },
    { title: "Setting", href:"#", imgSrc:`${url}/menu-gear-solid.svg`},
    { title: "Logout", href: "/", imgSrc:`${url}/menu-item-logout.svg` },
  ];

  return (
    <>
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
                      } else{
                        router.push(item.href)
                      }
                    }}
                    >
                      <div style={{ width: "100%", display: "flex", alignItems:"center" }}>
                        <div className="left-container" style={{ width: "45%" }}>
                          <Image 
                            className="imageIcon" 
                            alt="icon" 
                            src={item.imgSrc}
                            width={window.innerWidth >= 800 ? 20 : 16}
                            height={window.innerWidth >= 800 ? 20 : 16}
                            style={{ 
                              width: `${window.innerWidth >= 800 ? "20px" : "16px"}`, 
                              height: `${window.innerWidth >= 800 ? "20px" : "16px"}`, 
                              filter: "brightness(0) saturate(100%) invert(98%) sepia(78%) saturate(155%) hue-rotate(164deg) brightness(117%) contrast(100%)"
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

export default Profile;