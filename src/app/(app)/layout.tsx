import Navbar from '@/components/Navbar';
import { UserProvider } from '@/context/AppContext'; 
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <UserProvider>
      <div className="flex flex-col min-h-screen">
        {/* <Navbar /> */}
        {children}
      </div>
    </UserProvider>
  );
}
