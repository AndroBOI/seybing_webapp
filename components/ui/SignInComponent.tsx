"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
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

export function SignInComponent() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError(res.error);
    } else {
      window.location.href = "/";
    }

    setLoading(false);
  };

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl md:text-2xl">
          Login to your account
        </CardTitle>
        <CardAction>
          <Link className="text-primary text-sm sm:text-base" href="/signup">
            Sign Up
          </Link>
        </CardAction>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-sm sm:text-base">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password" className="text-sm sm:text-base">
                  Password
                </Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-xs sm:text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" name="password" type="password" required />
            </div>
          </div>

          {error && <p className="text-red-500 mt-2">{error}</p>}

          <CardFooter className="flex-col gap-2 mt-4">
            <Button
              type="submit"
              disabled={loading}
              className="w-full text-sm sm:text-base"
            >
              {loading ? "Logging in..." : "Login"}
            </Button>

            <Button
              type="button"
              className="w-full text-sm sm:text-base"
              onClick={() => signIn("google", { callbackUrl: "/" })}
            >
              Login with Google
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
