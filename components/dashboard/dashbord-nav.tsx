"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AddMoney } from "@/components/dashboard/add-money";

export function DashboardNavbar() {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", label: "Home" },
    { href: "/dashboard/settings", label: "Settings" },
    { href: "/dashboard/profile", label: "Profile" },
  ];

  return (
    <div className="flex gap-4 items-center w-full justify-around">
      {links.map((link) => {
        const isActive =
          link.href === "/dashboard"
            ? pathname === "/dashboard" // exact match for Home
            : pathname.startsWith(link.href); // prefix match for subpages

        return (
          <Button
            key={link.href}
            variant={isActive ? "default" : "ghost"}
            asChild
          >
            <Link href={link.href}>{link.label}</Link>
          </Button>
        );
      })}
      <AddMoney />
    </div>
  );
}
