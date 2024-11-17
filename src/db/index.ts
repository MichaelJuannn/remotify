import { Client } from "pg";  // PostgreSQL Client
import { drizzle } from "drizzle-orm/postgres-js";  // Drizzle ORM
import postgres from "postgres";  // PostgreSQL client for drizzle ORM

import dotenv from "dotenv";
dotenv.config();

// Koneksi dengan pg client
const client = new Client({
    user: process.env.DB_USER,        // Gunakan nilai dari file .env
    host: process.env.DB_HOST,        // Gunakan nilai dari file .env
    database: process.env.DB_NAME,    // Gunakan nilai dari file .env
    password: process.env.DB_PASSWORD, // Gunakan nilai dari file .env
    port: Number(process.env.DB_PORT), // Gunakan nilai dari file .env, pastikan diubah menjadi angka
  });

// Menghubungkan client pg
client.connect()
  .then(() => {
    console.log("Connected to the PostgreSQL database");
  })
  .catch((err: Error) => {
  console.error("Failed to connect to PostgreSQL", err);
});


// Koneksi dengan drizzle ORM
const queryClient = postgres(process.env.DB_URL!);  // Pastikan DB_URL sudah diset di .env Anda
export const db = drizzle(queryClient);

// Ekspor keduanya agar bisa digunakan di file lain
export { client };
