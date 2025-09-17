import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { auth, signOut } from "@/auth";
import { ModeToggle } from "@/components/ModeToggle";
import { LogOut } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

const ProfilePage = async () => {
  const session = await auth();

  const email = session?.user?.email || "User";
  const initials = email
    .split("@")[0]
    .split(".")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const avatarUrl =
    (session?.user?.image as string) ||
    `https://ui-avatars.com/api/?name=${initials}&background=0D8ABC&color=fff&size=128`;

  return (
    <div className="w-full">
      <Card className="flex flex-col items-center gap-4 bg-transparent border-none shadow-none">
        <CardHeader className="w-full">
          <CardDescription className="font-bold text-2xl">
            Profile
          </CardDescription>
        </CardHeader>

        <CardContent className="relative w-24 h-24">
          <Image
            src={avatarUrl}
            alt="Profile Avatar"
            fill
            className="rounded-full object-cover"
            sizes="96px"
          />
        </CardContent>
        <h1 className="text-l">{session?.user?.email}</h1>

        <CardFooter className="flex flex-col space-y-5 w-full mt-10">
          <ModeToggle />
          <form className="w-full"
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button
              className="p-2 font-semibold text-red-400"
              variant="outline"
              type="submit"
            >
              <LogOut /> Sign Out
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProfilePage;
