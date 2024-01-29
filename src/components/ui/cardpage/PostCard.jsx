import { animeDelete } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ anime }) => {
  return (
    <div className="w-full h-full flex items-center justify-center ">
      <div className="card w-96  bg-base-100 shadow-xl">
        <figure className="relative w-full h-[150px]">
          <Image
            src={anime.image || "/noProfile.jpg"}
            alt="PostImage"
            fill
            sizes="min-width:600px "
          />
        </figure>
        <div className="card-body h-60">
          <h2 className="card-title h-">{anime.title}</h2>
          <h2 className="font-semibold">
            {anime.createdAt?.toString().slice(4, 16)}
          </h2>
          <p>{anime.desc}</p>
          <div className="card-actions justify-end">
            <Link href={`/cardpage/${anime.slug}`}>
              <button className="btn btn-primary">Show Gallery</button>
            </Link>
            <form action={animeDelete}>
              <input type="hidden" value={anime.id} name="id" readOnly />
              <button className="btn btn-primary">Delete</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
