import React from "react";


interface DashboardHeaderProps {
  balance: number;
}

const DashboardHeader = ({ balance }: DashboardHeaderProps) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-7">
     
      <p className="text-5xl">₱{balance.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
    </div>
  );
};

export default DashboardHeader;
