import React from "react";
import { auth} from "@/auth";
import { db } from "@/lib/db";
import { LineChart } from "./line-chart";
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

  
  const balance = user.money?.amount ?? 0;

  return (
    <div className="space-7">
      <DashboardHeader balance={balance}/>
      <LineChart/>
    </div>
  );
};

export default Dashboard;
