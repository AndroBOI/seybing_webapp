// TodaysLog.tsx (Server Component)
import { db } from "@/lib/db";
import TodaysLogClient from "./today-log-table";

export type MoneyEntry = {
  id: string;
  amount: number;
  createdAt: Date;
};

const TodaysLog = async ({ userId }: { userId: string }) => {
  const now = new Date();
  const startOfToday = new Date(now);
  startOfToday.setHours(0, 0, 0, 0);

  const endOfToday = new Date(now);
  endOfToday.setHours(23, 59, 59, 999);

  const todaysEntries: MoneyEntry[] = await db.money.findMany({
    where: {
      userId,
      createdAt: {
        gte: startOfToday,
        lte: endOfToday,
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return <TodaysLogClient entries={todaysEntries} />;
};

export default TodaysLog;
