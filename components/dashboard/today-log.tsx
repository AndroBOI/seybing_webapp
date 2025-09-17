import React from "react";
import { db } from "@/lib/db";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type MoneyEntry = {
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

  const totalToday = todaysEntries.reduce((acc, e) => acc + e.amount, 0);

  return (
    <Card className="w-full mx-auto mt-3 shadow-none border-none bg-transparent">
      <CardHeader>
        <h2 className="text-sm font-semibold text-gray-500">Todays Entries</h2>
      </CardHeader>

      <CardContent className="space-y-2 md:h-[250px] h-[100px] overflow-y-auto">
        {todaysEntries.length === 0 ? (
          <p className="text-gray-500">No entries today yet.</p>
        ) : (
          todaysEntries.map((entry, idx) => (
            
              <div key={entry.id}>
                <div className="flex justify-between">
                  <span>₱ {entry.amount.toLocaleString()}</span>
                  <span className="text-sm text-gray-400">
                    {entry.createdAt.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
                {idx !== todaysEntries.length - 1 && <Separator />}
              </div>
            
          ))
        )}
      </CardContent>

      <CardFooter className="flex justify-between font-semibold">
        <span>Total:</span>
        <span>₱ {totalToday.toLocaleString()}</span>
      </CardFooter>
    </Card>
  );
};

export default TodaysLog;
