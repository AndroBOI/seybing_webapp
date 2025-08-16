import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredeintalsProvider from "next-auth/providers/credentials"
import {PrismaAdapter} from "@next-auth/prisma-adapter"
import {db} from "@/lib/db"
import bcrypt from "bcryptjs"


export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),

    CredeintalsProvider({
      name: "Credentials",
      credentials: {
        email: {label: "Email", type: "email"},
        password: {label: "Password", type: "password"}
      },
      async authorize(credentials) {
        if(!credentials?.email || !credentials?.password) return null

        const user = await db.user.findUnique({
          where:{email: credentials.email},
        })
        if(!user || !user.password) return null

        const isValid = await bcrypt.compare(credentials.password, user.password)

        if(!isValid) return null

        return user
      }
    })
  ],
  pages: {
    signIn: "/signin" // optional, where to redirect if not logged in
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET
}
