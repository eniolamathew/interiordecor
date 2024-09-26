"use client"
import React, { useEffect } from 'react';
import theme from './components/style/theme'
import { useRouter } from "next/navigation";
import UserAuthManager from '@/shared/data/UserAuthManager';
import { AuthProvider } from '@/shared/context/AuthContext';
import { ThemeProvider } from 'styled-components';

const ChildrenWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const router = useRouter()

    useEffect(() => {
        const token = UserAuthManager.getToken();
        if (token && UserAuthManager.isTokenExpired()) {
          UserAuthManager.removeToken();
          router.push("/");
        }
    }, [router]);

  return (
    <AuthProvider>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider> 
    </AuthProvider>
  );
};

export default ChildrenWrapper;