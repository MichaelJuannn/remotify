import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { checkPasswordMatch, getUser } from "./lib/auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/signin",
    error: "/signin",
  },
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      authorize: async (credentials) => {
        const user = await getUser(credentials.email as string);
        if (!user || !user.password) {
          throw new Error("not found");
        }
        const isPasswordMatch = await checkPasswordMatch(
          credentials.password as string,
          user.password,
        );
        if (!isPasswordMatch) {
          throw new Error("not found");
        }
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
        session.user.id = token.sub!;
        session.user.username = token.username;
      }
      return session;
    },
  },
});
