"use client"
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
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-sm sm:text-base">
                Email
              </Label>
              <Input
                id="email"
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
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full text-sm sm:text-base">
          Login
        </Button>
        <Button variant="outline" className="w-full text-sm sm:text-base"
        onClick={() => signIn("google", {callbackUrl: "/"})}>
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  );
}
