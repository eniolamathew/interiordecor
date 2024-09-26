"use client";
import React, { ChangeEvent, useState } from "react";
import { ResetPasswordWrapper, MaxWidth, ResetPasswordContainer, ResetPasswordContent, Text1 } from "./ResetPasswordStyles";
import ButtonContainer from "../components/ui/buttons/HomeUiButton";
import userApiData from "../../shared/data/userApiData";
import { validatePassword, formatPasswordErrors } from "../../shared/helperFunctions/helperFunctions";
import { useRouter, useSearchParams } from 'next/navigation'
import {  toast } from 'react-toastify';
import HomeNavbar from "../components/navbar/HomeNavbar";
import PasswordContainer from "../components/ui/password/PasswordContainer";

export default function ResetPassword() {
  const router = useRouter()
  const searchParams = useSearchParams();
  const emailParams = searchParams.get('email')!; 
  const tokenParams = searchParams.get('token')!;
  const [newpassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");
  const [errors, setErrors] = useState({ newpassword : "", confirmnewpassword: ""});

  const clearError = ()=>{
    setErrors({ newpassword : "", confirmnewpassword: ""})
  }

  const handleSubmit = (e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault()
    if(newpassword.trim().length === 0){
      setErrors(prev => { return {...prev, newpassword : "Password cannot be null"}})
    }
    if(confirmNewPassword.trim().length === 0){
      setErrors(prev => { return {...prev, confirmnewpassword : "Password cannot be null"}})
    }
    if(newpassword.trim().length > 0 && confirmNewPassword.trim().length > 0){
      if(newpassword.trim() !== confirmNewPassword.trim()){
        setErrors({ newpassword : "", confirmnewpassword : "Password do not match"})
      }
      if(newpassword.trim() === confirmNewPassword.trim()){
        const passWordError = formatPasswordErrors(validatePassword(newpassword))
        const confirmPasswordError = formatPasswordErrors(validatePassword(confirmNewPassword))
        if(passWordError.length ===  0 && confirmPasswordError.length === 0){
          submitData({email:emailParams, password:newpassword, token:tokenParams})
        }
        else{
          setErrors({ newpassword : passWordError, confirmnewpassword : confirmPasswordError })
        }
      }
    }
  }

  async function submitData(payload: {email:string, password: string, token: string}) {
      try {
        const result = await userApiData.resetPassword(payload);

        if (result?.success) {
            toast.success("Password Changed Successfully!", {autoClose: 3000});
            router.push("/login")
        } else {
          toast.error(`Password Reset failed: ${result.errors[0]}`, {position: "top-right"});
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
            <Text1>Create Password</Text1>
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
