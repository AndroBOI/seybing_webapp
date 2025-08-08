import React from "react";
import { SignInComponent } from "@/components/ui/SignInComponent";
const page = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center overflow-hidden">
      <div className="container flex items-center justify-center">
        <SignInComponent />
      </div>
    </div>
  );
};

export default page;
