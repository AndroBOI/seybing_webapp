"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";


import { Button } from "../ui/button";

const Social = () => {

  const loginGoogle = () => {
    signIn("google", {
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex items-center w-full">
      <Button
      onClick={loginGoogle} 
      className="flex-1" size="lg" variant="outline">
        <FcGoogle /> Google
      </Button>
    
    </div>
  );
};

export default Social;
