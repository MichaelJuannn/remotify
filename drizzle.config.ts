import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema/schema.ts",
  out: "./src/db/drizzle",
  dialect: "postgresql", // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
    url: process.env.DB_URL!,
  },
});
