import React from "react";
import { Button } from "../ui/button";

interface DashboardHeaderProps {
  balance: number;
}

const DashboardHeader = ({ balance }: DashboardHeaderProps) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <Button variant="outline" className="rounded-full">
        This Month
      </Button>
      <p className="text-4xl">₱{balance}</p>
    </div>
  );
};

export default DashboardHeader;
