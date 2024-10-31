"use client";
import React, { ChangeEvent, useState } from "react";
import {
  LoginWrapper,
  MaxWidth,
  LoginContainer,
  LoginContent,
  Text1,
} from "./LoginStyles";
import InputContainer from "../components/ui/emailInput/InputContainer";
import HomeUiButton from "../components/ui/buttons/HomeUiButton";
import Link from "next/link";
import { formatPasswordErrors, validatePassword } from "@/shared/helperFunctions/helperFunctions";
import userApiData from "../../shared/data/userApiData";
import { useRouter } from 'next/navigation'
import {  toast } from 'react-toastify';
import { useAuth } from "@/shared/context/AuthContext";
import UserAuthManager from "@/shared/data/UserAuthManager";
import HomeNavbar from "../components/navbar/HomeNavbar";
import PasswordContainer from "../components/ui/password/PasswordContainer";
import Basepage from "../components/BasePage/Basepage";

const Login = () => {
  const { login } = useAuth();
  const router = useRouter()
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [invalidEmail, setInvalidEmail] = useState<string>("");
  const [invalidPassword, setInvalidPassword] = useState<string>("");

  const clearError = ()=>{
    setInvalidPassword("")
    setInvalidEmail("")
  }

  const validateForm =()=> {
    if(email.length === 0){
      setInvalidEmail("Email Address cannot be null")
    }
    if(password.length === 0){
      setInvalidPassword("Password cannot be null")
    }
    if(password.trim() ){
    const passWordError = formatPasswordErrors(validatePassword(password))
      if(passWordError.length ===  0){
        submitData(email.toLowerCase(), password)
      }
      else{
        setInvalidPassword(passWordError)
      }
    }
  }

  async function submitData(email:string, password: string) {
      try {
        const result = await userApiData.loginAsync(email, password);
          if (result.success && result.payload?.accesstoken) {
            UserAuthManager.setToken(result.payload.accesstoken)
            login(result.payload.accesstoken); 
            toast.success("User Logged In!", {autoClose: 3000});
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
        <Basepage>
          <LoginContent>
            <Text1>Sign In</Text1>
            <div className="mb-2 loginEmail">
                <InputContainer
                    label={"Email Address"}
                    value={email}
                    obscureText={false}
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>{ setEmail(e.target.value) 
                      clearError()
                    }}
                    error={invalidEmail}
                    disabled={false}
                    autoComplete={false}
                />
            </div>
            <div className="mb-2 loginPassword">
                <PasswordContainer
                    label={"Password"}
                    value={password}
                    obscureText={true}
                    disabled={false}
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>{ setPassword(e.target.value)
                      clearError()
                    }}
                    error={invalidPassword}
                    autoComplete={false}
                />
            </div>      
            <HomeUiButton
              icon={false}
              text={"Sign In"}
              onClick={(e) => {
                e.preventDefault();
                validateForm()
              }}
            />
            <div className="mt-4">
              <Link href="/forgotpassword" style={{fontSize:"14px"}}>Forgot Password?</Link>
            </div>
            <div className="mt-4">
                <span style={{color:"#acacac", fontSize:"14px"}}>New to us? </span>
                <Link href="/signup" style={{fontSize:"14px"}}> Sign up now.</Link>
            </div>
            <div className="mt-4">
                <Link href="/" style={{fontSize:"14px"}}>Back to home</Link>
            </div>
          </LoginContent>
        </Basepage>
    </>
  );
}

export default Login