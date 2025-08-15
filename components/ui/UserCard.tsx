"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Session } from "next-auth";

interface Props {
  session: Session;
}

export const UserCard = ({ session }: Props) => {
  const user = session.user;

  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Hello, {user?.name} 👋</CardTitle>
        <CardDescription>Welcome back to your dashboard!</CardDescription>
      </CardHeader>
      <CardContent>
        <p><strong>Email:</strong> {user?.email}</p>
        {user?.image && (
          <Image
            src={user.image}
            alt={user.name || "User Image"}
            width={64}
            height={64}
            className="mt-2 rounded-full"
          />
        )}
      </CardContent>
    </Card>
  );
};
