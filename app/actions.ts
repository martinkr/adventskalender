"use server";

import client from "@/lib/mongodb";

export async function readDatasetForDay(day: number): Promise<WithId<Document> | null> {
  // connect to MongoDB
  const mongoClient = await client.connect();
  // get the dataset
  return await mongoClient
    .db("golem-adventskalender")
    .collection("golem-adventskalender")
    .findOne({ day: day });

}