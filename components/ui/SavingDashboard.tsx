"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A linear line chart";

const chartData = [
  { day: "Aug 9", savings: 50 },
  { day: "Aug 10", savings: 60 },
  { day: "Aug 11", savings: 40 },
  { day: "Aug 12", savings: 0 },
  { day: "Aug 13", savings: 75 },
  { day: "Aug 14", savings: 30 },
  { day: "Aug 15", savings: 100 },
  { day: "Aug 16", savings: 1000 },
];

const chartConfig = {
  desktop: {
    label: "Savings",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function SavingsDashboard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Line Chart - Linear</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-104 w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              padding={{ left: 0, right: 0 }}
              tickFormatter={(value) => value.split(" ")[1]}
            />

            {/* Add YAxis here inside LineChart */}
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              domain={[0, 1000]}
              ticks={[0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />

            <Line
              dataKey="savings"
              type="linear"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
