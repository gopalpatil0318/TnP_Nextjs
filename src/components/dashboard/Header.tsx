"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from 'next-auth/react';

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();



  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Links when the user is NOT logged in
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/training_program", label: "Training Programs" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact Us" },
  ];

  // Links when the user IS logged in
  const loggedInLinks = [
    { href: "/", label: "Home" },
    { href: "/training_program", label: "Training Programs" },
    { href: "/gallery", label: "Gallery" },
   
    { href: "/all-students-profile", label: "All Students Profile" },
    { href: "/profile", label: "Profile" },
    { href: "/update-profile", label: "Update Profile" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="w-full bg-white shadow-md ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/rcpitlogo.png"
              alt="RCPIT Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#244855]">Training and Placement</span>
              <span className="text-xs text-[#90AEAD]">R. C. Patel Institute of Technology, Shirpur</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {(session ? loggedInLinks : navLinks).map((link) => (
              <Link
                key={link.href}
                className="text-sm font-medium text-[#244855] hover:text-[#E64833] transition-colors"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {session ? (
              // Show logout button when the user is logged in
              <Button
                variant="outline"
                size="sm"
                className="hidden sm:inline-flex text-[#E64833] border-[#E64833]"
                onClick={() => signOut()}
              >
                Logout
              </Button>
            ) : (
              // Show login button when no user is logged in
              <Link href="/sign-in">
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden sm:inline-flex text-[#E64833] border-[#E64833]"
                >
                  Student Login
                </Button>
              </Link>
            )}

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-[#244855]"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4 bg-[#FBE9D0]">
            {(session ? loggedInLinks : navLinks).map((link) => (
              <Link
                key={link.href}
                className="text-sm font-medium text-[#244855] hover:text-[#E64833] transition-colors"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
            {session ? (
              <Button
                variant="outline"
                size="sm"
                className="text-[#E64833] border-[#E64833]"
                onClick={() => signOut()}
              >
                Logout
              </Button>
            ) : (
              <Link href="/sign-in">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-[#E64833] border-[#E64833]"
                >
                  Student Login
                </Button>
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;