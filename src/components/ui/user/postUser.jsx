import { deleteUser } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
const PostUser = async ({ users }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl m-3">
      <div className="relative h-68 w-full">
        <Image src={users.image || "/noProfile.jpg"} alt="Movie" fill />
      </div>
      <div className="card-body">
        <h2 className="card-title">{users.username}</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <form action={deleteUser}>
            <input type="hidden" name="id" value={users.id} />
            <button className="btn btn-primary">Delete</button>
          </form>

          <Link href={`/user/${users.id}`}>
            <button className="btn btn-primary">Update</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostUser;
