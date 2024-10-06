"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import UserAuthManager from '../data/UserAuthManager';
import { usePathname } from 'next/navigation';

interface AuthContextType {
  designActivedIndex: number;
  isLoggedIn: boolean;
  accessToken: string | null;
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
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // Effect to load token from localStorage on initial render
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
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'accessToken') {
        if (!event.newValue) {
          // Token has been removed, log the user out.
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
  };

  return (
    <AuthContext.Provider value={{ designActivedIndex, setDesignActivedIndex, isLoggedIn, accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
