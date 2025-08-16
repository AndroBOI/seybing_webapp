"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { SwitchDemo } from "./ModeToggle";
import { MenuIcon } from "lucide-react";
import { signOut } from "next-auth/react";

const Navbar = () => {
  const pathname = usePathname();

  if (pathname === "/signin") {
    return (
      <div className="p-5 shadow-md text-center text-2xl font-semibold">
        Welcome back
      </div>
    );
  }
  if (pathname === "/signup") {
    return (
      <div className="p-5 shadow-md text-center text-2xl font-semibold">
        Welcome
      </div>
    );
  }
  return (
    <div className="p-5 shadow-md w-full h-10 flex justify-between  items-center  z-50">
      <MenuIcon />
      <h1 className="text-3xl">Home</h1>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => signOut({ callbackUrl: "/signin" })} 
          className="hover:underline"
        >
          Sign Out
        </button>
        <SwitchDemo />
      </div>
    </div>
  );
};

export default Navbar;
