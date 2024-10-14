"use client";
import React from 'react';
import Link from 'next/link';
import { useAuth } from "../../shared/context/AuthContext";

const Custom500 = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div style={{ textAlign: 'center', padding: '2rem'}}>
      <h1>500 - Internal Server Error</h1>
      <p>Oops! Something went wrong on our end.</p>
      <Link href={isLoggedIn ? "/design": "/"}>Go back to the homepage</Link>
    </div>
  );
};

export default Custom500;