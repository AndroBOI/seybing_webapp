import { DashboardNavbar } from "@/components/dashboard/dashbord-nav";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-[100dvh] overflow-x-hidden px-2">
      <main className="flex-1 bg-gray-100">{children}</main>

      <footer className="flex justify-between items-center py-2 font-semibold">
        <DashboardNavbar/>
       
      </footer>
    </div>
  );
}
