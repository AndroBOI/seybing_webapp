import React from "react";

import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/login-btn";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <LoginButton>
        <Button>Login</Button>
      </LoginButton>
    </div>
  );
};

export default page;
