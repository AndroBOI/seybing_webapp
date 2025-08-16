"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function SignUpComponent() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirm = formData.get("confirm-password") as string;

    if(password !== confirm) {
      setError("Passwords do not match")
      setLoading(false)
      return;
    }

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({name, email, password})
    })

    if(!res.ok) {
      const data = await res.json()
      setError(data.error || "Failed to sign up")
    } else {
      window.location.href = "/signin";
    }

    setLoading(false)

  };

  return (
     <Card className="w-full max-w-md sm:p-6">
      <CardHeader className="space-y-1 sm:space-y-2">
        <CardTitle className="!text-lg sm:!text-2xl">
          Create your account
        </CardTitle>
        <CardAction>
          <Link className="text-primary !text-sm sm:!text-base" href="/signin">
            Sign In
          </Link>
        </CardAction>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="grid gap-1 sm:gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" type="text" required />
            </div>

            <div className="grid gap-1 sm:gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>

            <div className="grid gap-1 sm:gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required />
            </div>

            <div className="grid gap-1 sm:gap-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                name="confirm-password"
                type="password"
                required
              />
            </div>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <CardFooter className="flex-col gap-2 mt-4">
            <Button
              type="submit"
              disabled={loading}
              className="w-full !text-sm sm:!text-base py-2 sm:py-3"
            >
              {loading ? "Signing up..." : "Sign Up"}
            </Button>
            <Button
              type="button"
              className="w-full !text-sm sm:!text-base py-2 sm:py-3"
            >
              Sign Up with Google
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
