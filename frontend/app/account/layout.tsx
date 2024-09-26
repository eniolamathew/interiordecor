"use client"
import React from 'react'
import HomeNavbar from '../components/navbar/HomeNavbar';
import Footer from '../components/footer/Footer';

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>
    <HomeNavbar />
    {children}
    <Footer />
  </>;
}
