"use client"
import React, { useState, useEffect } from 'react';
import theme from './components/style/theme'
import { useRouter } from "next/navigation";
import UserAuthManager from '@/shared/data/UserAuthManager';
import { AuthProvider } from '@/shared/context/AuthContext';
import { ThemeProvider } from 'styled-components';
import Loading from './loading';

const ChildrenWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isMounted, setIsMounted] = useState<boolean>(false); 
  const router = useRouter()

    useEffect(() => {
        setIsMounted(true); 
        const token = UserAuthManager.getToken();
        if (token && UserAuthManager.isTokenExpired()) {
          UserAuthManager.removeToken();
          router.push("/");
        }
    }, [router]);

    useEffect(() => {
      const handleDocumentReady = () => {
        if (document.readyState === 'complete') { setLoading(false) }
      };
  
      document.addEventListener('readystatechange', handleDocumentReady);
  
      if (document.readyState === 'complete') { setLoading(false) }
      return () => {
        document.removeEventListener('readystatechange', handleDocumentReady);
      };
    }, []);
  
    if (loading) { return <Loading /> }

    if (!isMounted) { return null }
  
  return (
    <AuthProvider>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider> 
    </AuthProvider>
  );
};

export default ChildrenWrapper;