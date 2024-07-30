import NextAuth, { DefaultSession } from "next-auth";
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
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },
      authorize: async (credentials) => {
        const user = await getUser(credentials.username as string);
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
        return user as any;
      },
    }),
  ],
});
