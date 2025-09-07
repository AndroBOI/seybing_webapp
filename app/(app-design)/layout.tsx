import { PlusCircleIcon } from "lucide-react";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { signOut } from "@/auth";
export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 bg-gray-100">{children}</main>

      <footer className="flex justify-between items-center py-2">
        <a href="/dashboard" className="hover:text-gray-300">
          Home
        </a>
        <a href="/dashboard/settings" className="hover:text-gray-300">
          Settings
        </a>
        <PlusCircleIcon />
        <a href="/dashboard/profile" className="hover:text-gray-300">
          Profile
        </a>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <Button className="p-2" variant="outline" type="submit">
            Sign Out
          </Button>
        </form>
      </footer>
    </div>
  );
}
