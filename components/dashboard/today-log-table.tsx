"use client";

import React, { useEffect, useTransition, useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Trash2 } from "lucide-react";
import { deleteInput } from "@/actions/deleteInput";
import type { MoneyEntry } from "./today-log";

const TodaysLogClient = ({ entries }: { entries: MoneyEntry[] }) => {
  const [list, setList] = useState(entries);
  const [isPending, startTransition] = useTransition();
 
  useEffect(() => {
    setList(entries);
  }, [entries]);

  const handleDelete = (id: string) => {
    startTransition(async () => {
      await deleteInput(id);
      setList((prev) => prev.filter((e) => e.id !== id)); 
    });
  };

  const totalToday = list.reduce((acc, e) => acc + e.amount, 0);

  return (
    <Card className="w-full mx-auto mt-3 shadow-none border-none bg-transparent">
      <CardHeader>
        <h2 className="text-sm font-semibold text-gray-500">Todays Entries</h2>
      </CardHeader>

      <CardContent className="space-y-2 h-[100px] overflow-y-auto">
        {list.length === 0 ? (
          <p className="text-gray-500">No entries today yet.</p>
        ) : (
          list.map((entry, idx) => (
            <div key={entry.id}>
              <div className="flex justify-between items-center">
                <div className="w-full flex justify-between">
                  <span>₱ {entry.amount.toLocaleString()}</span>
                  <div>
                    <button
                      onClick={() => handleDelete(entry.id)}
                      disabled={isPending}
                      className="text-gray-500 hover:text-red-700"
                    >
                      <Trash2 size={16} />
                    </button>
                    <span className="ml-2 text-sm text-gray-400">
                      {new Date(entry.createdAt).toLocaleTimeString("en-PH", {
                        hour: "2-digit",
                        minute: "2-digit",
                        timeZone: "Asia/Manila",
                      })}
                    </span>
                  </div>
                </div>
              </div>

              {idx !== list.length - 1 && <Separator />}
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

export default TodaysLogClient;
