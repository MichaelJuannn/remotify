"use server";

import { z } from "zod";
import bcrypt from "bcrypt";
import { users } from "@/db/schema/schema";
import { db } from "@/db";

const schema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
  role: z.enum(["admin", "user"]), 
});

export async function createUser(prevState: any, formdata: FormData) {
  const saltRounds = 10;
  
  const hashedPassword = await bcrypt.hash(formdata.get("password") as string, saltRounds);
  
  const newUser = schema.safeParse({
    username: formdata.get("name"),
    email: formdata.get("email"),
    password: hashedPassword,
    role: "user",
  });

  if (!newUser.success) {
    return {
      message: "Gagal melakukan registrasi user",
    };
  }

  try {
    await db.insert(users).values(newUser.data);
    return {
      message: "Berhasil melakukan pendaftaran",
    };
  } catch (error) {
    return {
      message: "Gagal melakukan registrasi user",
    };
  }
}
