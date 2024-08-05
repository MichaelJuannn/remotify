import { DefaultSession } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";
import { users } from "@/db/schema/schema";

type SelectUser = typeof users.$inferSelect;

declare module "next-auth" {
  interface User {
    role: string;
    username: string;
  }
  interface Session {
    user: {
      role: string;
      username: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role: string;
    username: string;
  }
}
