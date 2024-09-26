"use client"
import React from 'react'
import Design from './Design'
import HomeNavBar from '../components/navbar/HomeNavbar'
import Footer from '../components/footer/Footer'

const page = () => {
  return (<>
    <HomeNavBar />
    <Design />
    <Footer />
  </>
  )
}

export default page