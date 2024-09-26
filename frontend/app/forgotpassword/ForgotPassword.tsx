"use client";
import React, { ChangeEvent, useState } from "react";
import {
  ForgotPasswordWrapper,
  MaxWidth,
  ForgotPasswordContainer,
  ForgotPasswordContent,
  Text1,
} from "./ForgotPasswordStyles";
import InputContainer from "../components/ui/emailInput/InputContainer";
import HomeUiButton from "../components/ui/buttons/HomeUiButton";
import Link from "next/link";
import userApiData from "../../shared/data/userApiData";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import HomeNavbar from "../components/navbar/HomeNavbar";

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [invalidEmail, setInvalidEmail] = useState<string>("");

  const clearError = () => { setInvalidEmail("") };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(email.trim().length === 0){ setInvalidEmail("Email cannot be null") }
    else{
      submitData(email)
    }
  };

  async function submitData(email: string ) {
    try {
      const result = await userApiData.requestPasswordReset(email);
      if (result?.success) {
        toast.success("Link Sent to Email Successfully!", { autoClose: 3000 });
      } else {
        toast.error(`Registration failed: ${result.errors[0]}`, {
          position: "top-right",
        });
      }
    } catch (error) {
      Promise.reject(error);
    }
  }

  return (
    <>
      <HomeNavbar />
      <ForgotPasswordWrapper>
        <ForgotPasswordContainer>
          <MaxWidth>
            <ForgotPasswordContent>
              <Text1>Forget Password</Text1>
              <div className="mb-2">
                <InputContainer
                  label={"Email Address"}
                  value={email}
                  obscureText={false}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value);
                    clearError();
                  }}
                  disabled={false}
                  error={invalidEmail}
                  autoComplete={false}
                />
              </div>
              <div className="mt-4">
                <HomeUiButton
                  icon={false}
                  text={"Reset Password"}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit(e);
                  }}
                />
              </div>
              <div className="mt-4">
                <span style={{ color: "#acacac" }}>Have an account? </span>
                <Link href="/login">Sign in</Link>
              </div>
              <div className="mt-4">
                <span style={{ color: "#acacac" }}>New to us? </span>
                <Link href="/signup">Sign up now.</Link>
              </div>
              <div className="mt-4">
                <Link href="/">Back to home</Link>
              </div>
            </ForgotPasswordContent>
          </MaxWidth>
        </ForgotPasswordContainer>
      </ForgotPasswordWrapper>
    </>
  );
}
