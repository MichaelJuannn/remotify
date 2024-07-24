import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      credentials: {
        username: { label: "username", type: "text", name: "username" },
        password: { label: "password", type: "password", name: "password" },
      },
    }),
  ],
  callbacks: {},
});
