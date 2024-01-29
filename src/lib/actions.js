"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Anime, User } from "./modal";
import { connectToDb } from "./utils";

export const addAnime = async (formData) => {
  const { title, author, image, desc, slug } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newPost = Anime({
      title,
      author,
      image,
      desc,
      slug,
    });
    await newPost.save();
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/cardpage");
  redirect("/cardpage");
};

export const animeDelete = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Anime.findByIdAndDelete(id);
  } catch (error) {
    console.log("Failed to delete anime");
    throw new Error("Failed to delete anime");
  }
  revalidatePath("/cardpage");
};

export const updateAnime = async (formData) => {
  const { id, title, author, image, desc } = Object.fromEntries(formData);
  try {
    connectToDb();
    const animeUpdate = {
      id,
      title,
      author,
      image,
      desc,
      slug,
    };
    Object.keys(animeUpdate).forEach(
      (key) => (animeUpdate[key] === "" || undefined) && delete animeUpdate[key]
    );

    await Anime.findByIdAndUpdate(id, animeUpdate);
    console.log("Update successfuly");
  } catch (error) {
    console.log("Failed update");
    throw new Error("Failed to update", error);
  }
  revalidatePath("/cardpage");
  redirect("/cardpage");
};

export const addUser = async (formData) => {
  const { username, email, password, isAdmin, image } =
    Object.fromEntries(formData);
  try {
    connectToDb();
    const newUser = await User({
      username,
      email,
      password,
      image,
      isAdmin,
    });
    await newUser.save();
  } catch (error) {
    throw new Error("Add user failed", error);
  }
  revalidatePath("/user");
  redirect("/user");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await User.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Failed to delete user", error);
  }
  revalidatePath("/user");
};

export const userUpdate = async (formData) => {
  const { id, username, image, password, email, isAdmin } =
    Object.fromEntries(formData);
  try {
    connectToDb();
    const updatedUser = {
      id,
      username,
      password,
      email,
      image,
      isAdmin,
    };

    Object.keys(updatedUser).forEach(
      (key) => (updatedUser[key] === "" || undefined) && delete updatedUser[key]
    );

    await User.findByIdAndUpdate(id, updatedUser);
  } catch (error) {
    throw new Error("Failed to update user", error);
  }
  revalidatePath("/user");
  redirect("/user");
};
