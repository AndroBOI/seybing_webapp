"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function addMoney(formData: FormData): Promise<void> {
  try {
  
    const session = await auth();
    if (!session?.user?.id) {
      throw new Error("Unauthorized");
    }

    
    const amountValue = formData.get("amount");
    
    if (!amountValue || typeof amountValue !== 'string') {
      throw new Error("Amount is required");
    }

    const amount = parseFloat(amountValue);
    
    if (isNaN(amount) || amount <= 0) {
      throw new Error("Invalid amount");
    }

   
   await db.money.create({
    data: {
      userId: session.user.id,
      amount,
    }
   })

    
    revalidatePath("/dashboard");
    
  } catch (error) {
    console.error('Add money error:', error);
    throw new Error(error instanceof Error ? error.message : "Failed to add money");
  }
}