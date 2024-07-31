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

export async function getUser(email?: string) {
  if (!email) throw "notfound";
  const { usersCollection } = await connectToDatabase();

  const user = await usersCollection.findOne({ email: email });
  if (!user) throw "notfound";

  return user;
}
