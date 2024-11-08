"use server";

import { db } from "@/db";
import { HireForm } from "./HireForm";
import { jobPosts } from "@/db/schema/schema";

export default async function postJobOpening(data: HireForm) {
  console.log("hello server act", data);

  try {
    await db.insert(jobPosts).values(data);
  } catch (error) {
    throw new Error("Failed to store data");
  }
}
