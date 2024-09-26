"use client";
import React, { ChangeEvent, useState } from "react";
import { SignupWrapper, MaxWidth, SignupContainer, SignupContent, Text1 } from "./SignupStyles";
import InputContainer from "../components/ui/emailInput/InputContainer";
import HomeUiButton from "../components/ui/buttons/HomeUiButton";
import Link from "next/link";
import styled from "styled-components";
import { useSearchParams } from 'next/navigation';
import CheckboxContainer from "../components/ui/checkbox/CheckboxContainer";
import userApiData from "../../shared/data/userApiData";
import HomeNavbar  from "../components/navbar/HomeNavbar";
import { validatePassword, formatPasswordErrors } from "../../shared/helperFunctions/helperFunctions";
import { useRouter } from 'next/navigation'
import {  toast } from 'react-toastify';
import PasswordContainer from "../components/ui/password/PasswordContainer";

const Terms = styled.div`
  text-align: start;
  font-size: 0.8rem;
  color: #acacac;

  span {
    color: #007BFF;
  }
`;

export default function Signup() {
  const router = useRouter()
  const searchParams = useSearchParams();
  const emailParams = searchParams.get('email'); 
  const [isTermsChecked, setIsTermsChecked] = useState<boolean>(false);
  const [checkboxError, setCheckboxError] = useState<boolean>(false);
  const [email, setEmail] = useState<string>(emailParams ? emailParams : "");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [invalidEmail, setInvalidEmail] = useState<string>("");
  const [errors, setErrors] = useState({ password : "", confirmPassword: ""});

  const clearError = ()=>{
    setErrors({ password : "", confirmPassword: ""})
    setInvalidEmail("")
    setCheckboxError(false)
  }

  const handleSubmit = (e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault()
    if(!isTermsChecked ){
      setCheckboxError(true)
    }
    if(email.trim().length === 0){ setInvalidEmail("Email cannot be null") }
    if(password.trim().length === 0){
      setErrors(prev => { return {...prev, password : "Password cannot be null"}})
    }
    if(confirmPassword.trim().length === 0){
      setErrors(prev => { return {...prev, confirmPassword : "Password cannot be null"}})
    }
    if(password.trim().length > 0 && confirmPassword.trim().length > 0){
      if(password.trim() !== confirmPassword.trim()){
        setErrors({ password : "", confirmPassword : "Password do not match"})
      }
      if(password.trim() === confirmPassword.trim()){
        const passWordError = formatPasswordErrors(validatePassword(password))
        const confirmPasswordError = formatPasswordErrors(validatePassword(confirmPassword))
        if(passWordError.length ===  0 && confirmPasswordError.length === 0){
          submitData({email, password})
        }
        else{
          setErrors({ password : passWordError, confirmPassword : confirmPasswordError })
        }
      }
    }
  }

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsTermsChecked(event.target.checked);
    clearError()
  };

  async function submitData(payload: {email:string, password: string}) {
      try {
        const result = await userApiData.registerUserAsync(payload);
        if (result?.success) {
            toast.success("User Registered Successfully!", {autoClose: 3000});
            router.push("/login")
        } else {
          toast.error(`Registration failed: ${result.errors[0]}`, {position: "top-right"});
        }
    } catch(error) {
      Promise.reject(error)
    }
  }
  
  return (
    <>
    <HomeNavbar />
    <SignupWrapper>
      <SignupContainer>
        <MaxWidth>
          <SignupContent>
            <Text1>Sign Up</Text1>
            <div className="mb-2">
              <div className="mb-2">
                <InputContainer
                  label={"Email Address"}
                  value={email}
                  obscureText={false}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) 
                    clearError()
                  }}
                  error={invalidEmail}
                  disabled={false}
                  autoComplete={false}
                />
              </div>
              <PasswordContainer
                label={"Password"}
                value={password}
                obscureText={true}
                onChange={(e: ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value)
                  clearError()
                }}
                error={errors.password}
                disabled={false}
                autoComplete={false}
              />
            </div>
            <div className="mb-2">
              <PasswordContainer
                label={"Confirm Password"}
                value={confirmPassword}
                obscureText={true}
                onChange={(e: ChangeEvent<HTMLInputElement>) => { setConfirmPassword(e.target.value)
                  clearError()
                 }}
                error={errors.confirmPassword}
                disabled={false}
                autoComplete={false}
              />
            </div>
            <div className="mt-4 flex items-center">
              <CheckboxContainer 
                  error = {checkboxError}
                  type={"checkbox"}
                  checked={isTermsChecked}
                  onChange={(e)=>{ handleCheckboxChange(e)}}
                />
              <Terms style={{ color: "#acacac" }}>By Signing the account, you accept out <span >Terms & condtion</span> and <span>Privacy Policy</span></Terms>
            </div>
            <div className="mt-4">
              <HomeUiButton
                icon={false}
                text={"Sign Up"}
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit(e)
                }}
              />
            </div>
            <div className="mt-4">
              <span style={{ color: "#acacac" }}>Have an account? </span>
              <Link href="/login">Sign in now.</Link>
            </div>
            <div className="mt-4">
                <Link href="/">Back to home</Link>
            </div>
          </SignupContent>
        </MaxWidth>
      </SignupContainer>
    </SignupWrapper>
  </>);
}
