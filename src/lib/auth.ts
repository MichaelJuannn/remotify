import { db } from "@/db";
import { users } from "@/db/schema/schema";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";

export async function checkPasswordMatch(
  credPassword: string,
  hashedPassword: string,
) {
  const isPasswordMatch = await bcrypt.compare(credPassword, hashedPassword);
  return isPasswordMatch;
}

export async function getUser(email?: string) {
  if (!email) throw "notfound";

  const user = await db.select().from(users).where(eq(users.email, email));
  if (user.length === 0) throw "notfound";

  return user[0];
}
