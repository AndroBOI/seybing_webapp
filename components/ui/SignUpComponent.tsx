'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export function SignUpComponent() {
  return (
    <Card className="w-full max-w-md  sm:p-6">
      <CardHeader className="space-y-1 sm:space-y-2">
        <CardTitle className="!text-lg sm:!text-2xl">
          Create your account
        </CardTitle>
        <CardAction>
          <Link
            className="text-primary !text-sm sm:!text-base"
            href="/signin"
          >
            Sign In
          </Link>
        </CardAction>
      </CardHeader>

      <CardContent>
        <form>
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Full Name */}
            <div className="grid gap-1 sm:gap-2">
              <Label htmlFor="name" className="!text-sm sm:!text-base">
                Full Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                required
              />
            </div>

            {/* Email */}
            <div className="grid gap-1 sm:gap-2">
              <Label htmlFor="email" className="!text-sm sm:!text-base">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>

            {/* Password */}
            <div className="grid gap-1 sm:gap-2">
              <Label htmlFor="password" className="!text-sm sm:!text-base">
                Password
              </Label>
              <Input id="password" type="password" required />
            </div>

            {/* Confirm Password */}
            <div className="grid gap-1 sm:gap-2">
              <Label htmlFor="confirm-password" className="!text-sm sm:!text-base">
                Confirm Password
              </Label>
              <Input id="confirm-password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full !text-sm sm:!text-base py-2 sm:py-3">
          Sign Up
        </Button>
        <Button
          variant="outline"
          className="w-full !text-sm sm:!text-base py-2 sm:py-3"
        >
          Sign Up with Google
        </Button>
      </CardFooter>
    </Card>
  )
}
