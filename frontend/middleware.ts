import { NextRequest, NextResponse } from 'next/server';

const isTokenExpired = (token: string | undefined): boolean => {
  if (!token || typeof token !== 'string') return true;

  try {
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    const currentTime = Math.floor(Date.now() / 1000); 
    return decodedToken.exp < currentTime; 
  } catch (error) {
    console.error('Error decoding token:', error);
    return true;
  }
};

export function middleware(req: NextRequest) {
  const token = req.cookies.get('authToken')?.value; 

  if (!token || isTokenExpired(token)) {
    const res = NextResponse.redirect(new URL('/login', req.url));
    res.cookies.set('authToken', '', { expires: new Date(0) }); 
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
      '/design',
      "/account",
      "/account/profile",
      "/account/changepassword",
      "/account/setting",
      '/account/plans'
    ], 
};