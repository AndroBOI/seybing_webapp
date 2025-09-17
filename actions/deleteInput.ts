"use server"
import { revalidatePath } from "next/cache"
import { db } from "@/lib/db"

export const deleteInput = async (id: string) => {
    await db.money.delete({
        where: {id},
    })

    revalidatePath("/dashboard")
}