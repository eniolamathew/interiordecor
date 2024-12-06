"use client";
import React from "react";
import {
  ErrorWrapper,
  MaxWidth,
  ErrorContainer,
  ErrorContent,
} from "./ErrorStyles";
import Link from 'next/link';
import { useAuth } from "../../shared/context/AuthContext";
import HomeNavbar from "../components/navbar/HomeNavbar";

const Custom500 = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
    <HomeNavbar />

    <ErrorWrapper>
      <ErrorContainer>
        <MaxWidth>
          <ErrorContent>
            <div style={{ textAlign: 'center', padding: '2rem'}}>
              <h1>500 - Internal Server Error</h1>
              <p>Oops! Something went wrong on our end.</p>
              <Link href={isLoggedIn ? "/design": "/"}>Go back to the homepage</Link>
            </div>
          </ErrorContent>
        </MaxWidth>
      </ErrorContainer>
    </ErrorWrapper>
    </>
  );
}

export default Custom500;