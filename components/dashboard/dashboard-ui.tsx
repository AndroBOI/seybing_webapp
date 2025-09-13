import React from "react";
import { auth} from "@/auth";
import { db } from "@/lib/db";
import { DashBoardLineChart } from "./line-chart";
import DashboardHeader from "./dashboard-header";

const Dashboard = async () => {
  const session = await auth();

  if (!session?.user?.id) {
    return <div>Please login</div>;
  }

  const user = await db.user.findUnique({
    where: { id: session.user.id },
    include: { money: true },
  });

  if (!user) {
    return <div>User not found</div>;
  }

  
  const balance = user.money?.reduce((sum, n) => sum + n.amount, 0) ?? 0;

  return (
    <div className="mt-10 space-7">
      <DashboardHeader balance={balance}/>
      <DashBoardLineChart money={user.money}/>
    </div>
  );
};

export default Dashboard;
