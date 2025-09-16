import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { auth, signOut } from "@/auth";

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

  // Use uploaded image if available, otherwise fallback to initials avatar
  const avatarUrl =
    (session?.user?.image as string) ||
    `https://ui-avatars.com/api/?name=${initials}&background=0D8ABC&color=fff&size=128`;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-lg shadow-md flex flex-col items-center gap-4">
      <div className="relative w-24 h-24">
        <Image
          src={avatarUrl}
          alt="Profile Avatar"
          fill
          className="rounded-full object-cover"
          sizes="96px"
        />
      </div>

      <h1 className="text-2xl font-semibold">{email}</h1>

      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button className="p-2 font-semibold" variant="outline" type="submit">
          Sign Out
        </Button>
      </form>
    </div>
  );
};

export default ProfilePage;
