import { z } from "zod";

// Definisikan skema untuk pengguna
export const userSchema = z.object({
  _id: z.string().optional(),
  email: z.string().email(),
  username: z.string().min(3).max(30),
  password: z.string().min(6),
  name: z.string().min(1),
  role: z.enum(["admin", "user"]).default("user"),
});

// Tipe TypeScript dari skema
export type User = z.infer<typeof userSchema>;
