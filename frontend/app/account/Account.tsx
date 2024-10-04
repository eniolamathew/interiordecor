"use client";
import React from "react";
import "./account.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import UserAuthManager from "@/shared/data/UserAuthManager";
import { useAuth } from "@/shared/context/AuthContext";

const Profile = () => {
  const { logout } = useAuth();
  const router = useRouter()
  const profileLayout = [
    { title: "Your Details", href: "/account/profile", imgSrc:"https://cdn.roomify.org/menu-item-my-details.svg" },
    { title: "Plan", href: "/account/plans", imgSrc:"https://cdn.roomify.org/menu-plan.svg" },
    { title: "Change Password", href: "/changepassword", imgSrc:"/menu-item-change-password.png" },
    { title: "Logout", href: "/", imgSrc:"https://cdn.roomify.org/menu-item-logout.svg" },
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
                            width={window.innerWidth >= 800 ? 20 : 12}
                            height={window.innerWidth >= 800 ? 20 : 12}
                            style={{ 
                              maxWidth: "45px", 
                              maxHeight: "45px", 
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