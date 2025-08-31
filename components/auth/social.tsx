import React from "react";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

import { Button } from "../ui/button";

const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button className="flex-1" size="lg" variant="outline">
        <FcGoogle /> Google
      </Button>
      <Button className="flex-1" size="lg" variant="outline">
        <FaFacebook color="#1877F2" /> Facebook
      </Button>
    </div>
  );
};

export default Social;
