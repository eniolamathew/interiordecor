"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import UserAuthManager from '../data/UserAuthManager';
import { usePathname } from 'next/navigation';
import { removeCookieToken } from '../data/cookieManager';

interface AuthContextType {
  designActivedIndex: number;
  isLoggedIn: boolean;
  isLightMode: boolean;
  accessToken: string | null;
  setIsLightMode: React.Dispatch<React.SetStateAction<boolean>>;
  setDesignActivedIndex: React.Dispatch<React.SetStateAction<number>>;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const [designActivedIndex, setDesignActivedIndex] = useState(pathname === '/design' ? 0 : 1);
  const [isLightMode, setIsLightMode] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => { 
    const storedToken = UserAuthManager.getToken();
    if (storedToken) {
      if (!UserAuthManager.isTokenExpired()) {
        setAccessToken(storedToken);
        setIsLoggedIn(true);
      } else {
        UserAuthManager.removeToken();
        setIsLoggedIn(false);
      }
    }
  }, []);

  useEffect(() => {
    document.body.style.color = isLightMode ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)';
    document.body.style.backgroundColor = isLightMode ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)';
  
    document.documentElement.style.color = isLightMode ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)';
    document.documentElement.style.backgroundColor = isLightMode ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)';

  }, [isLightMode]);
  
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'accessToken') {
        if (!event.newValue) {
          setAccessToken(null);
          setIsLoggedIn(false);
        } else {
          UserAuthManager.setToken(event.newValue);
  
          if (UserAuthManager.isTokenExpired()) {
            setAccessToken(null);
            setIsLoggedIn(false);
          } else {
            setAccessToken(event.newValue);
            setIsLoggedIn(true);
          }
        }
      }
    };
  
    const expirationCheckInterval = setInterval(() => {
      const token = UserAuthManager.getToken();
      if (token && UserAuthManager.isTokenExpired()) {
        setAccessToken(null);
        setIsLoggedIn(false);
        UserAuthManager.removeToken();
        removeCookieToken(); 
      }
    }, 60 * 1000);
  
    window.addEventListener('storage', handleStorageChange);
  
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(expirationCheckInterval);
    };
  }, []);
  
  const login = (token: string) => {
    setAccessToken(token);
    setIsLoggedIn(true);
    UserAuthManager.setToken(token);
  };

  const logout = () => {
    setAccessToken(null);
    setIsLoggedIn(false);
    UserAuthManager.removeToken();
    removeCookieToken(); 
  };

  return (
    <AuthContext.Provider value={{ designActivedIndex, setDesignActivedIndex, isLightMode, setIsLightMode, isLoggedIn, accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};