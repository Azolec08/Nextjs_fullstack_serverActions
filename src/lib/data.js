import { Anime, User } from "./modal";
import { connectToDb } from "./utils";

export const fetchAnimes = async (q, page) => {
  const regex = RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDb();
    const count = await Anime.find({ title: { $regex: regex } }).count();
    const anime = await Anime.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));

    return { count, anime };
  } catch (error) {
    console.log(error);
  }
};

export const fetchAnime = async (slug) => {
  try {
    connectToDb();
    const anime = await Anime.findOne({ slug });
    return anime;
  } catch (error) {
    console.log("Failed to fetch user");
    throw new Error(error);
  }
};

export const fetchUsers = async (q, page) => {
  const regex = RegExp(q, "i");

  const ITEM_PER_PAGE = 2;
  try {
    connectToDb();
    const count = await User.find({ username: { $regex: regex } }).count();
    const allUser = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, allUser };
  } catch (error) {
    throw new Error("Failed to fetch user");
  }
};

export const fetchUser = async (id) => {
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    throw new Error(error);
  }
};
