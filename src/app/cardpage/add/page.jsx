import { addAnime } from "@/lib/actions";
import "./add.scss";

const page = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <form action={addAnime} className="flex flex-col gap-y-3">
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="image" name="image" />
        <input type="text" placeholder="author" name="author" />
        <input type="text" placeholder="desc" name="desc" />
        <button type="btn">Add Anime</button>
      </form>
    </div>
  );
};

export default page;
