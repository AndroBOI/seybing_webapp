import React from "react";

import { FcGoogle } from "react-icons/fc";


import { Button } from "../ui/button";

const Social = () => {
  return (
    <div className="flex items-center w-full">
      <Button className="flex-1" size="lg" variant="outline">
        <FcGoogle /> Google
      </Button>
    
    </div>
  );
};

export default Social;
