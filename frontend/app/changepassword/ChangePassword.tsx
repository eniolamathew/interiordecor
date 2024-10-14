"use client";
import React, { ChangeEvent, useState } from "react";
import { validatePassword, formatPasswordErrors } from "../../shared/helperFunctions/helperFunctions";
import { ResetPasswordWrapper, MaxWidth, ResetPasswordContainer, ResetPasswordContent, Text1 } from "./ChangePasswordStyles";
import PasswordContainer from "../components/ui/password/PasswordContainer";
import ButtonContainer from "../components/ui/buttons/HomeUiButton";
import userApiData from "../../shared/data/userApiData";
import UserAuthManager from "@/shared/data/UserAuthManager";
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify';
import HomeNavbar from "../components/navbar/HomeNavbar";

export default function ChangePassword() {
  const emailData: string = UserAuthManager.getEmail()!;
  const router = useRouter()
  const email = emailData ? emailData : "";
  const [oldpassword, setOldPassword] = useState<string>("");
  const [newpassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");
  const [errors, setErrors] = useState({ newpassword : "", confirmnewpassword: ""});
  const [invalidOldpassword, setInvalidOldpassword] = useState<string>("");

  const clearError = ()=>{
    setInvalidOldpassword("")
    setErrors({ newpassword : "", confirmnewpassword: ""})
  }

  const handleSubmit = (e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault()
    if(oldpassword.trim().length === 0){
        setInvalidOldpassword("Old Password cannot be null")
      }
    if(newpassword.trim().length === 0){
      setErrors(prev => { return {...prev, newpassword : "New Password cannot be null"}})
    }
    if(confirmNewPassword.trim().length === 0){
      setErrors(prev => { return {...prev, confirmnewpassword : "Confirm New Password cannot be null"}})
    }
    if(newpassword.trim().length > 0 && confirmNewPassword.trim().length > 0){
      if(newpassword.trim() !== confirmNewPassword.trim()){
        setErrors({ newpassword : "", confirmnewpassword : "Password do not match"})
      }
      if(newpassword.trim() === confirmNewPassword.trim()){
        const oldpassWordError = formatPasswordErrors(validatePassword(oldpassword))
        const passWordError = formatPasswordErrors(validatePassword(newpassword))
        const confirmPasswordError = formatPasswordErrors(validatePassword(confirmNewPassword))
        if(passWordError.length ===  0 && confirmPasswordError.length === 0 && oldpassWordError.length === 0 ){
          submitData({email, oldpassword, newpassword})
        }
        else{
          setInvalidOldpassword(oldpassWordError)
          setErrors({ newpassword : passWordError, confirmnewpassword : confirmPasswordError })
        }
      }
    }
  }

  async function submitData(payload: {email:string, oldpassword: string, newpassword: string }) {
      try {
        const result = await userApiData.changePassword(payload);
        if (result?.success) {
            toast.success("Password Changed Successfully!", {autoClose: 2000});
            router.push("/account")
        } else {
          toast.error(`Password Changed failed: ${result.errors[0]}`, {position: "top-right"});
        }
    } catch(error) {
      Promise.reject(error)
    }
  }
    
  return (
    <>
    <HomeNavbar />
    <ResetPasswordWrapper>
      <ResetPasswordContainer>
        <MaxWidth>
          <ResetPasswordContent>
            <Text1>Change Password</Text1>
                <div className="mb-2">
                  <PasswordContainer
                    label={"Old Password"}
                    value={oldpassword}
                    obscureText={true}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => { setOldPassword(e.target.value)
                      clearError()
                    }}
                    error={invalidOldpassword}
                    autoComplete={false}
                    disabled={false}
                  />
                </div>
                <div className="mb-2">
                  <PasswordContainer
                    label={"New Password"}
                    value={newpassword}
                    obscureText={true}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => { setNewPassword(e.target.value)
                      clearError()
                    }}
                    error={errors.newpassword}
                    autoComplete={false}
                    disabled={false}
                  />
                </div>
                <div className="mb-2">
                  <PasswordContainer
                    label={"Confirm New Password"}
                    value={confirmNewPassword}
                    obscureText={true}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => { setConfirmNewPassword(e.target.value)
                      clearError()
                    }}
                    error={errors.confirmnewpassword}
                    autoComplete={false}
                    disabled={false}
                  />
                </div>
              <div className="mt-4">
                <ButtonContainer
                  icon={false}
                  text={"Save"}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit(e)
                  }}
                />
              </div>
           </ResetPasswordContent>
         </MaxWidth>
       </ResetPasswordContainer>
     </ResetPasswordWrapper>
  </>);
}
