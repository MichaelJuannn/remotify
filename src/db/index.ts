// lib/db.ts

import { MongoClient, Db, Collection } from "mongodb";

let client: MongoClient | null = null;
let db: Db | null = null;
let usersCollection: Collection | null = null;

export async function connectToDatabase() {
  if (client && db && usersCollection) {
    return { client, db, usersCollection };
  }

  const uri = process.env.MONGO_URI!;
  const dbName = process.env.DB_NAME!;

  if (!uri || !dbName) {
    throw new Error(
      "Please define the MONGO_URI and DB_NAME environment variables inside .env.local",
    );
  }

  client = new MongoClient(uri);
  await client.connect();
  db = client.db(dbName);
  usersCollection = db.collection("users");

  return { client, db, usersCollection };
}
