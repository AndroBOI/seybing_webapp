"use client";

import { useState, useMemo } from "react";
import { LineChart, Line, CartesianGrid, XAxis, Tooltip } from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type TimeRange = "7d" | "30d";

const chartConfig = {
  money: { color: "var(--chart-1)" },
} satisfies ChartConfig;

export function DashBoardLineChart({
  money,
}: {
  money: { amount: number; createdAt: Date }[];
}) {
  const [timeRange, setTimeRange] = useState<TimeRange>("7d");

  const chartData = useMemo(() => {
    const map: Record<string, number> = {};
    money.forEach((item) => {
      const dateStr = new Date(item.createdAt).toISOString().split("T")[0];
      map[dateStr] = (map[dateStr] || 0) + item.amount;
    });
    return map;
  }, [money]);


console.time("preAggregate");
  const filteredData = useMemo(() => {
    const today = new Date()
    const daysToShow = timeRange === '7d' ? 7 : 30
    const startDate = new Date()
    startDate.setDate(today.getDate() - daysToShow + 1)

    const data : {date: string; money: number}[] =[]

    for(let d = new Date(startDate); d <= today; d.setDate(d.getDate() + 1)) {
      const dateStr = d.toISOString().split('T')[0]
      data.push({
        date: dateStr,
        money: chartData[dateStr] || 0
      })
    }

    return data

  }, [timeRange, chartData])

console.timeEnd("preAggregate");

  const xTickFormatter = (value: string) => {
    const date = new Date(value);
    if (timeRange === "7d")
      return date.toLocaleDateString("en-US", { weekday: "short" });
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  return (
    <Card className="pt-0 bg-transparent border-none shadow-none w-full">
      <CardHeader className="flex items-center gap-2 justify-center py-2 sm:flex-row">
        <Select
          value={timeRange}
          onValueChange={(value) => setTimeRange(value as TimeRange)}
        >
          <SelectTrigger
            className="rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Select range" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="7d">Last 7 days</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-0 sm:px-0 sm:pt-6 w-full">
        <ChartContainer config={chartConfig} className="w-full h-[170px]">
          <LineChart
            data={filteredData}
            margin={{ top: 0, right: 0, left: 0, bottom: 10 }}
          >
            <CartesianGrid vertical={false} horizontal={false} />
            <XAxis
              dy={20}
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickFormatter={xTickFormatter}
              interval="preserveStartEnd"
              tick={{
                fontWeight: "bold",
                fill: "var(--color-text)",
                fontSize: 12,
              }}
            />
            <Tooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  className="gap-2 p-1"
                  labelFormatter={(value) =>
                    new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }
                  indicator="dot"
                />
              }
            />
            <Line
              type="natural"
              dataKey="money"
              stroke="var(--color-money)"
              strokeWidth={4}
              dot={false} // normal dots
              activeDot={{ r: 8, fill: "var(--color-money)" }}
              isAnimationActive={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
