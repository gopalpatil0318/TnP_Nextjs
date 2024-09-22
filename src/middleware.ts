import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
export { default } from 'next-auth/middleware';

export const config = {
  matcher: [
   
    '/sign-in',
    '/sign-up',
   
    '/verify/:path*',
    '/profile/:path*',
    '/createprofile/:path*',
    '/update-profile/:path*', 
    '/all-students-profile/:path*', 
    '/other-student-profile/:path*', 
  ],
};

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const url = request.nextUrl;

  console.log('Token:', token); 
  console.log('Request URL:', url.pathname); 

  if (!token) {
    if (
      url.pathname.startsWith('/dashboard') || 
      url.pathname.startsWith('/profile') || 
      url.pathname.startsWith('/update-profile') || 
      url.pathname.startsWith('/createprofile') ||
      url.pathname.startsWith('/all-students-profile') ||
      url.pathname.startsWith('/other-student-profile')
    ) {
      console.log('Redirecting to /sign-in'); 
      return NextResponse.redirect(new URL('/sign-in', request.url));
    }
    return NextResponse.next();
  }

  if (
    url.pathname.startsWith('/sign-in') ||
    url.pathname.startsWith('/sign-up') ||
    url.pathname.startsWith('/verify') 
  
  ) {
    console.log('Redirecting to /'); 
    return NextResponse.redirect(new URL('/', request.url));
  }


  if (token.isProfileComplete && url.pathname.startsWith('/createprofile')) {
    console.log('Redirecting to /'); 
    return NextResponse.redirect(new URL('/', request.url));
  }
  if (!token.isProfileComplete && !url.pathname.startsWith('/createprofile')) {
    console.log('Redirecting to /createprofile'); 
    return NextResponse.redirect(new URL('/createprofile', request.url));
  }

  return NextResponse.next();
}
