"use client";
import UserAuthManager from "../../../shared/data/UserAuthManager";
import "./profile.css";
import InputContainer from "../../components/ui/emailInput/InputContainer";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify';
import userApiData from "@/shared/data/userApiData";
import ButtonContainer from "../../components/ui/buttons/HomeUiButton";
import { ProfileHeader } from "./ProfileStyles";
import { IGetUserProfileByEmailResult } from '@/models/user';

interface IProfileProps {
  userprofile: IGetUserProfileByEmailResult
}

const Profile:React.FC<IProfileProps> = ({ userprofile }) => {
  const router = useRouter()
  const email: string = UserAuthManager.getEmail()!;
  const [fullname, setFullName] = useState<string>("");
  const [postcode, setPostcode] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [invalidName, setInvalidName] = useState<string>("");
  const [invalidPostcode, setInvalidPostCode] = useState<string>("");
  const [invalidAddress, setInvalidAddress] = useState<string>("");
  const [updateProfile, setUpdateProfile] = useState<boolean>(false);

  useEffect(()=>{
    if(userprofile){
      setFullName(userprofile.Fullname)
      setAddress(userprofile.Useraddress)
      setPostcode(userprofile.Postcode)
      setUpdateProfile(true)
    } else{
      setUpdateProfile(false)
    }
  }, [])

  const clearError = ()=>{
    setInvalidName("");
    setInvalidPostCode("")
    setInvalidAddress("")
  }

  const validateForm = (e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault()
    if(fullname.length === 0){
      setInvalidName("Full Name cannot be null")
    }
    if(postcode.length === 0){
      setInvalidPostCode("Postcode cannot be null")
    }
    if(address.length === 0){
      setInvalidAddress("Address cannot be null")
    }
    else{
          submitData({email, fullname, useraddress:address, postcode})
        }
  }

  async function submitData(profileData:{email:string, fullname:string, useraddress:string,  postcode: string}) {
      try {
      let result
        if(updateProfile){
          result = await userApiData.updateUserProfile(profileData);
        } else { result = await userApiData.cretaeUserProfile(profileData) }
        if (result?.success) {
            toast.success("User Profile Updated!", {autoClose: 3000});
            setTimeout(() => { router.push("/design") }, 100)
        } else {
          toast.error(`Registration failed: ${result.errors[0]}`, {position: "top-right"});
        }
    } catch(error) {
      Promise.reject(error)
    }
  }

  return (
    <>
      <div className="">
        <div className="profileContainer">
          <div className="mb-2 ">
            <ProfileHeader >Your Profile</ProfileHeader>
            <InputContainer
              label={"Full Name"}
              value={fullname}
              obscureText={false}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setFullName(e.target.value);
                clearError()
              }}
              error={invalidName}
              disabled={false}
              autoComplete={false}
            />
          </div>
          <div className="mb-2 ">
            <InputContainer
              label={"Email Address"}
              value={email}
              obscureText={false}
              onChange={() => {}}
              disabled={true}
              autoComplete={false}
            />
          </div>
          <div className="mb-2 ">
            <InputContainer
              label={"Address"}
              value={address}
              obscureText={false}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setAddress(e.target.value);
                clearError()              
              }} 
              error={invalidAddress}
              disabled={false}
              autoComplete={false}
            />
          </div>
          <div className="mb-2 ">
            <InputContainer
              label={"Post Code"}
              value={postcode}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setPostcode(e.target.value);
                clearError();              
              }}
              obscureText={false}
              error={invalidPostcode}
              disabled={false}
              autoComplete={false}
            />
          </div>
          <div className="mt-4">
                <ButtonContainer
                  icon={false}
                  text={"Save"}
                  onClick={(e) => {
                    e.preventDefault();
                    validateForm(e)
                  }}
                />
              </div>
        </div>
      </div>
    </>
  );
};

export default Profile;