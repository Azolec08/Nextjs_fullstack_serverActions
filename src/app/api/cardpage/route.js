import { Anime } from "@/lib/modal";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    connectToDb();
    const anime = await Anime.find();
    return NextResponse.json(anime);
  } catch (error) {
    throw new Error("Error to GET fetch", error);
  }
};
