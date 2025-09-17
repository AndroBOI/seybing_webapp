import React from "react";
import LoginButton from "@/components/auth/login-btn";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex items-center min-h-[100dvh] justify-center flex-col gap-6 text-center p-4">
      <Image
        src="https://cdn-icons-png.flaticon.com/512/4852/4852336.png"
        alt="Analytics Sticker"
        width={328}
        height={328}
      />
      <span className="text-muted-foreground">Track your savings and visualize your progress</span>
      <LoginButton>
        <span className="text-lg font-semibold hover: underline">
          Get Started
        </span>
      </LoginButton>
    </div>
  );
};

export default Page;
