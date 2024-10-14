"use client";
import React from 'react'
import Plan from './Plan'
import HomeNavbar from '../../components/navbar/HomeNavbar';
import Footer from '../../components/footer/Footer';

const page = () => {
  return (<>
    <HomeNavbar />
      <Plan/>
    <Footer />
  </>
  )
}

export default page