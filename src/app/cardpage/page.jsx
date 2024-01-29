import { PostCard } from "@/components";
import Pagination from "@/components/ui/pagination/pagination";
import Search from "@/components/ui/search/Search";
import { fetchAnimes } from "@/lib/data";

export const metadata = {
  title: "Anime page",
  description: "Anime description ",
};

const animes = async () => {
  const anime = await fetch("http://localhost:3000/api/cardpage");

  return anime.json();
};

const page = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, anime } = await fetchAnimes(q, page);

  return (
    <div className="w-full">
      <div className="w-full flex flex-col justify-center items-center p-3">
        <h1 className="p-2 text-2xl">Search Anime</h1>
        <Search />
      </div>

      <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {anime.map((anime) => {
          return <PostCard anime={anime} key={anime.slug} />;
        })}
      </div>
      <div className="p-3">
        <Pagination count={count} />
      </div>
    </div>
  );
};

export default page;
