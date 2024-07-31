"use server";

import { connectToDatabase } from "@/db";
import { z } from "zod";
import bcrypt from "bcrypt";

const schema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  role: z.string(),
});

export async function createUser(prevState: any, formdata: FormData) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(
    formdata.get("password") as string,
    saltRounds,
  );
  const newUser = schema.safeParse({
    name: formdata.get("name"),
    email: formdata.get("email"),
    password: hashedPassword,
    role: "admin",
  });
  if (!newUser.success) {
    return {
      message: "gagal melakukan registrasi user",
    };
  }
  const { usersCollection } = await connectToDatabase();
  try {
    await usersCollection.insertOne(newUser.data);
    return {
      message: "berhasil melakukan pendaftaran",
    };
  } catch (error) {
    return {
      message: "gagal melakukan registrasi user",
    };
  }
}
