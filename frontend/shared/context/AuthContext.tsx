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
      setAccessToken(storedToken);
      setIsLoggedIn(true);
    }
  }, []);

  // Effect to listen for localStorage changes (e.g., logout from another tab)
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'accessToken') {
        if (!event.newValue) {
          setAccessToken(null);
          setIsLoggedIn(false);
        } else {
          setAccessToken(event.newValue);
          setIsLoggedIn(true);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
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
