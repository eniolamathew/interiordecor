"use client"
import React, { createContext, useContext, useState } from 'react'
import HomeNavbar from '../components/navbar/HomeNavbar';
import Footer from '../components/footer/Footer';
import UserAuthManager from '@/shared/data/UserAuthManager';
import { IGetUserProfileByEmailResult } from '@/models/user';
import userApiData from '@/shared/data/userApiData';
import useDataFetching from '@/shared/hook/useDataFecthing';
import Loading from '../loading';

interface UserProfileContextProps {
  userprofile: IGetUserProfileByEmailResult;
}

const UserProfileContext = createContext<UserProfileContextProps | null>(null);

export const useUserProfile = () => {
  const userProfilecontext = useContext(UserProfileContext);
  if (!userProfilecontext) {
    throw new Error('userProfilecontext must be used within an UserProfileProvider');
  }
  return userProfilecontext;
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const email: string = UserAuthManager.getEmail()!;
  const [userprofile, setUserprofile] = useState<IGetUserProfileByEmailResult | null>(null)

  const fetchUserProfile = async ()=>{
    const result = await userApiData.getUserProfileByEmail(email)
    if (result.success){
      setUserprofile(result.payload!)
    } else{
      setUserprofile(null)
    }
  }

  const { isLoading } = useDataFetching(fetchUserProfile, [])

  if(isLoading || !userprofile){ return <Loading />}

  return <>
    <UserProfileContext.Provider value={{userprofile}}>
      <HomeNavbar />
        {children}
      <Footer />
    </UserProfileContext.Provider>
  </>
}