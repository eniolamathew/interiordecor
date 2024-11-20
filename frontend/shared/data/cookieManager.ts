import { setCookie, getCookie } from 'cookies-next'; 

export const isCookieTokenExpired = (token: string | undefined): boolean => {
  if (!token || typeof token !== 'string') { return true }

  try {
    const decodedToken = JSON.parse(atob(token.split('.')[1])); 
    const currentTime = Math.floor(Date.now() / 1000); 
    return decodedToken.exp < currentTime;
  } catch (error) {
    return true; 
  }
};

export const removeCookieToken = (): void => {
  setCookie('authToken', '', { expires: new Date(0), path: '/' });
};

export const getCookieToken = (): string | undefined => {
  const token = getCookie('authToken') as string | undefined;
  return token;
};

export const setCookieToken = (token: string): void => {
  setCookie('authToken', token, { maxAge: 60 * 60 * 24 * 3, path: '/' });
};