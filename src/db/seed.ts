import { db } from "./index"; // Pastikan ini sesuai dengan lokasi koneksi Drizzle Anda
import { users, jobPosts } from "./schema/schema"; // Import tabel yang relevan

async function seed() {
  // Seed Users
  await db.insert(users).values([
    { email: "admin@example.com", username: "admin", password: "password123", role: "admin" },
    { email: "user@example.com", username: "user", password: "password123", role: "user" }
  ]);

  // Seed Job Posts
  await db.insert(jobPosts).values([
    {
      companyName: "Company A",
      position: "Software Engineer",
      employmentType: "Full-time",
      description: "We are looking for a Software Engineer.",
      careerPageLink: "https://company-a.com/careers",
      isSupported: true,
      isHighlight: true,
      isSticky: false,
      primaryTag: "uuid-of-tag", // Replace with actual tag UUID
    }
  ]);
  
  console.log("Seeding completed!");
}

seed().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
