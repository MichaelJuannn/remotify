"use server";

import { connectToDatabase } from "@/db";

export async function createUser(formdata: FormData) {
  const newUser = {
    name: formdata.get("name"),
    email: formdata.get("email"),
    password: formdata.get("password"),
  };
  const { usersCollection } = await connectToDatabase();
  try {
    await usersCollection.insertOne(newUser);
  } catch (error) {
    throw new Error("failed to create user");
  }
}
