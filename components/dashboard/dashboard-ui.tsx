import React from "react";
import { auth} from "@/auth";
import { db } from "@/lib/db";

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
    <div className="p-4">
      <DashboardHeader balance={balance}/>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi exercitationem labore dolor vitae ea sapiente cumque laboriosam blanditiis velit quam, adipisci voluptate magnam, maxime delectus eius saepe, quo quae at corrupti eaque. Dignissimos maiores voluptate inventore expedita enim dolorem, tempore quaerat aspernatur. Mollitia necessitatibus non itaque vero eveniet ducimus eos doloribus in? Enim nulla voluptatibus sapiente reprehenderit, autem nisi accusamus incidunt quos consectetur veniam officiis error cumque?</p>
    </div>
  );
};

export default Dashboard;
