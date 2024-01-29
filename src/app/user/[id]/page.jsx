import { userUpdate } from "@/lib/actions";
import { fetchUser } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const page = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);
  return (
    <div className="w-full h-screen grid grid-cols-2 ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="relative w-full h-40">
          <Image
            src={user.image || "/noProfile.jpg"}
            alt="PostImage"
            fill
            sizes="min-width:600px"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title">{user.username}</h2>
          <p>Description</p>
          <div className="card-actions justify-end">
            <Link href="/user">
              <button className="btn btn-primary">Back</button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <form action={userUpdate} className="flex flex-col gap-y-3">
          <input type="hidden" name="id" value={user.id} readOnly />
          <input type="text" placeholder="username" name="username" />
          <input type="text" placeholder="image" name="image" />
          <input type="password" placeholder="password" name="password" />
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={user.isAdmin}>
              Yes
            </option>
            <option value={false} selected={!user.isAdmin}>
              No
            </option>
          </select>
          <button type="btn">Update</button>
        </form>
      </div>
    </div>
  );
};

export default page;
