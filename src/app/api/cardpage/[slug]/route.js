import { Anime } from "@/lib/modal";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { slug } = params;
  try {
    connectToDb();
    const anime = await Anime.findOne({ slug });
    return NextResponse.json(anime);
  } catch (error) {
    throw new Error(error);
  }
};

export const DELETE = async (req, { params }) => {
  const { id } = params;
  try {
    connectToDb();
    await Anime.deleteOne({ id });
    return NextResponse("Deleted");
  } catch (error) {
    throw new Error("Deleted Error");
  }
};
