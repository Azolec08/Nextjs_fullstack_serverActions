import Pagination from "@/components/ui/pagination/pagination";
import Search from "@/components/ui/search/Search";
import PostUser from "@/components/ui/user/postUser";
import { fetchUsers } from "@/lib/data";

const UserPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, allUser } = await fetchUsers(q, page);
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center p-3">
        <h1 className="p-2 text-2xl">Search Anime</h1>
        <Search />
      </div>
      <div
        className="w-full min-h-screen grid grid-cols-1 items-center justify-center
        lg:grid-cols-2

    "
      >
        {allUser.map((users) => {
          return (
            <div key={users.id}>
              <PostUser users={users} />
            </div>
          );
        })}
      </div>
      <div className="p-3">
        <Pagination count={count} />
      </div>
    </div>
  );
};

export default UserPage;
