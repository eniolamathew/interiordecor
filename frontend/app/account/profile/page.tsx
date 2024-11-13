"use client";
import React, { useState } from 'react'
import Profile from './Profile'
import Loading from '@/app/loadingComp';
import HomeNavbar from '@/app/components/navbar/HomeNavbar';
import Footer from '../../components/footer/Footer';
import { useRouter } from 'next/navigation';
import userApiData from '@/shared/data/userApiData';
import UserAuthManager from '@/shared/data/UserAuthManager';
import { IGetUserProfileByEmailResult } from '@/models/user';
import useDataFetching from '@/shared/hook/useDataFecthing';

const Page = () => {
  const router = useRouter();
  const email: string = UserAuthManager.getEmail()!;
  const [userprofile, setUserprofile] = useState<IGetUserProfileByEmailResult | null>(null)
  const [dataFetched, setDataFetched] = useState<boolean | null>(null)

  const fetchUserProfile = async ()=>{
    try {
      const result = await userApiData.getUserProfileByEmail(email);
      if (result.success){
        setUserprofile(result.payload!)
        setDataFetched(true)
      } else{
        setDataFetched(false)
        setUserprofile(null)
      }
    } catch (error) {      
      setDataFetched(false)
      setUserprofile(null)
      Promise.reject(error);
    }    
  }
  
  useDataFetching(fetchUserProfile, [])
  
  if(typeof dataFetched === "boolean" && !dataFetched && !userprofile){ 
    router.push("/500")    
    return null
  }
  else if(dataFetched === null){ return <Loading /> }

  return (
    <>
      <HomeNavbar />
        <Profile userprofile={userprofile!}/>
      <Footer />
    </> 
  )
}

export default Page