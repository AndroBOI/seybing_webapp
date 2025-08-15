import { UserCard } from "@/components/ui/UserCard";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { SavingsDashboard } from "@/components/ui/SavingDashboard";

export default async function page() {
  const session = await auth();
  if (!session) redirect("/signin");

  return (
    <div>
        <UserCard session={session}/>
        <SavingsDashboard/>
    </div>
  );
}
