"use client";
import React from "react";
import Account from "./Account";
import HomeNavbar from '../components/navbar/HomeNavbar';
import Footer from '../components/footer/Footer';

const page = () => {
  return (
    <>
      <HomeNavbar />
        <Account />
      <Footer />
    </>
  );
};

export default page;
