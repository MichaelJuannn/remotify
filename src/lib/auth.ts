import { connectToDatabase } from "@/db";
import bcrypt from "bcrypt";

type UserData = {
  email: string;
  username: string;
  password: string;
  name: string;
};

export async function checkPasswordMatch(
  credPassword: string,
  hashedPassword: string,
) {
  const isPasswordMatch = await bcrypt.compare(credPassword, hashedPassword);
  return isPasswordMatch;
}

export async function getUser(username?: string) {
  if (!username) throw "notfound";
  const { usersCollection } = await connectToDatabase();

  const user = await usersCollection.findOne({ username });
  if (!user) throw "notfound";

  return user;
}
