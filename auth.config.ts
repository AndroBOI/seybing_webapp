import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google"; 
import { LoginSchema } from "./schemas";
import type { NextAuthConfig } from "next-auth";
import { getUserByEmail } from "./data/user";
import bcrypt from "bcryptjs";
import { db } from "./lib/db";

export default {
  providers: [
    Google,
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const passwordsMatch = await bcrypt.compare(
            password,
            user.password
          );

          if (passwordsMatch) return user;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token.sub) {
        session.user.id = token.sub; 
      }
      return session;
    },
  },
  events: {
    async createUser({ user }) {
    
      await db.money.create({
        data: {
          amount: 0,
          user: {
            connect: { id: user.id! }, 
          },
        },
      });
    },
  },
} satisfies NextAuthConfig;
