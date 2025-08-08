import React from "react";
import { SwitchDemo } from "./ModeToggle";
import { MenuIcon } from "lucide-react";
const Navbar = () => {
  return (
    <div>
      <div className="p-5 shadow-md absolute right-0 left-0  flex justify-between items-center ">
        <MenuIcon />
        <h1 className="text-3xl">Home</h1>
        <SwitchDemo />
      </div>
    </div>
  );
};

export default Navbar;
