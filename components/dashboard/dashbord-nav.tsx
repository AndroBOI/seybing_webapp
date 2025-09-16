"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AddMoney } from "@/components/dashboard/add-money";
import { HomeIcon, UserIcon, SettingsIcon } from "lucide-react";

export function DashboardNavbar() {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", label: "Home", icon: HomeIcon },
    { href: "/dashboard/settings", label: "Settings", icon: SettingsIcon },
    { href: "/dashboard/profile", label: "Profile", icon: UserIcon },
  ];

  return (
    <div className="flex gap-4 items-center w-full justify-around">
      {links.map((link) => {
        const isActive =
          link.href === "/dashboard"
            ? pathname === "/dashboard"
            : pathname.startsWith(link.href);

        const Icon = link.icon;

        return (
          <Button
            key={link.href}
            variant={isActive ? "default" : "ghost"}
            className={`transition-transform duration-200 ${
              isActive ? "scale-125" : "scale-110"
            }`}
            asChild
          >
            <Link href={link.href}>
              <Icon size={40} />
            </Link>
          </Button>
        );
      })}
      <AddMoney />
    </div>
  );
}
