import { updateAnime } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";

const animeData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/cardpage/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

export async function generateMetadata({ params }) {
  const { slug } = params;
  const anime = await animeData(slug);

  return {
    title: anime.title,
    description: anime.author,
  };
}

const page = async ({ params }) => {
  const { slug } = params;
  const anime = await animeData(slug);
  return (
    <div className="w-full h-screen grid grid-cols-2 ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="relative w-full h-40">
          <Image
            src={anime.image}
            alt="PostImage"
            fill
            sizes="min-width:600px"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title">{anime.title}</h2>
          <p>{anime.desc}</p>
          <div className="card-actions justify-end">
            <Link href="/cardpage">
              <button className="btn btn-primary">Back</button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <form action={updateAnime} className="flex flex-col gap-y-3">
          <input type="hidden" name="id" value={anime.id} />
          <input type="text" placeholder="title" name="title" />
          <input type="text" placeholder="image" name="image" />
          <input type="text" placeholder="author" name="author" />
          <input type="text" placeholder="desc" name="desc" />
          <button type="btn">Update</button>
        </form>
      </div>
    </div>
  );
};

export default page;
