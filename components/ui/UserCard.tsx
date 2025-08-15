"use client";


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Session } from "next-auth";

interface Props {
  session: Session;
  totalSavings: number; // total savings to display
}

export const UserCard = ({ session, totalSavings }: Props) => {
  const user = session.user;

  return (
    <Card className="w-80">
      <CardHeader className="flex flex-col items-center text-center">
        <CardTitle>Hello, {user?.name} </CardTitle>
        
      </CardHeader>

      <CardContent className="flex flex-col items-center gap-2">
        <p className="text-sm text-muted-foreground">Total Savings</p>
        <p className="text-2xl text-primary font-bold">₱{totalSavings.toLocaleString()} </p>
      </CardContent>
    </Card>
  );
};
