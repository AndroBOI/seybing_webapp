import { db } from "@/lib/db";

export const getMoneyHistory = async (userId: string) => {
    const moneyRecords =  await db.money.findMany({
        where: { userId },
        orderBy: {createdAt: "asc"}
    })

    return moneyRecords.map((m) => ({
        date: m.createdAt.toISOString().split("T")[0],
        money: m.amount,
    }))
}