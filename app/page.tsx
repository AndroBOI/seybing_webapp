import React from "react";

import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/login-btn";

const page = () => {
  return (
    <div className="flex items-center min-h-[100dvh] justify-center">
      <LoginButton>
        <Button>Login</Button>
      </LoginButton>
    </div>
  );
};

export default page;
