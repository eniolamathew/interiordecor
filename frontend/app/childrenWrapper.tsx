"use client"
import React, { useState, useEffect } from 'react';
import theme from './components/style/theme'
import { useRouter } from "next/navigation";
import UserAuthManager from '@/shared/data/UserAuthManager';
import { AuthProvider } from '@/shared/context/AuthContext';
import { ThemeProvider } from 'styled-components';
import Loading from './loadingComp';

const ChildrenWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter()

  useEffect(() => {
    const token = UserAuthManager.getToken();
    if (token && UserAuthManager.isTokenExpired()) {
      UserAuthManager.removeToken();
      router.push("/");
    }
  }, [router]);
  
    // useEffect(() => {
    //   const handleDocumentReady = () => {
    //     if (document.readyState === 'complete') { setLoading(false) }
    //   };
  
    //   document.addEventListener('readystatechange', handleDocumentReady);
  
    //   if (document.readyState === 'complete') { setLoading(false) }
    //   return () => {
    //     document.removeEventListener('readystatechange', handleDocumentReady);
    //   };
    // }, []);

    // if (loading) { return <Loading /> }
  
  return (
    <AuthProvider>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider> 
    </AuthProvider>
  );
};

export default ChildrenWrapper;



// export const getServerSideProps = async (context: any) => {
//   const token = UserAuthManager.getToken();
//   if (!token) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }

//   if (UserAuthManager.isTokenExpired()) {
//     UserAuthManager.removeToken();
//     return {
//       redirect: {
//         destination: "/", 
//         permanent: false,
//       },
//     };
//   }

//   return {
//     redirect: {
//       destination: "/design", 
//       permanent: false,
//     },
//   };
// };