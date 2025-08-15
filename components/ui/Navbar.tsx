"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { SwitchDemo } from "./ModeToggle";
import { MenuIcon } from "lucide-react";

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
    <div className="p-5 shadow-md fixed right-0 left-0 flex justify-between  items-center bg-background  z-50">
      <MenuIcon />
      <h1 className="text-3xl">Home</h1>
      <SwitchDemo />
    </div>
  );
};

export default Navbar;
