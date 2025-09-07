"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button"
import { PlusCircleIcon } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addMoney } from "@/actions/addMoney";

export function AddMoney() {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const amount = formData.get("amount");
    
    console.log("Adding amount:", amount);
    
    startTransition(async () => {
      try {
        await addMoney(formData);
        console.log("Money added successfully!");
        setOpen(false); // Close dialog after success
      } catch (error) {
        console.error("Error adding money:", error);
        alert("Failed to add money. Please try again.");
      }
    });
  };

  return (
    <Dialog modal={false} open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <PlusCircleIcon size={34} className="cursor-pointer"/>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add Money</DialogTitle>
            <DialogDescription>
              Add money to your account balance.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="amount">Amount ($)</Label>
              <Input 
                id="amount" 
                name="amount" 
                type="number" 
                placeholder="0.00"
                min="0.01"
                step="0.01"
                required
                disabled={isPending}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" type="button" disabled={isPending}>
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Adding..." : "Add Money"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}