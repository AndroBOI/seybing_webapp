import { UserCard } from "@/components/ui/UserCard";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { SavingsDashboard } from "@/components/ui/SavingDashboard";


export default async function Page() {
  const session = await auth();
  if (!session) redirect("/signin");

  const totalSavings = 1234;

  return (
    <div className="p-6 w-full flex flex-col gap-6 md:flex s ">
      <div className="content flex mt-20"  >
        <div className="md:w-1/4">
          <UserCard session={session} totalSavings={totalSavings} />
        </div>
        <div className="md:flex-1 hidden md:block md:flex-1">
          <SavingsDashboard />
        </div>
      </div>
    </div>
  );
}
