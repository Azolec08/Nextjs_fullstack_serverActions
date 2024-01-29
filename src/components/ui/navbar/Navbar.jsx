"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathName = usePathname();
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content flex gap-x-3">
        <button className="btn btn-ghost text-xl">daisyUI</button>
        <h1 className="capitalize text-blue-600 font-semibold text-xl underline">
          {pathName.split("/").pop()}
        </h1>
        <Link href="/user" className="hover:text-red-600 transition-all">
          <h1>Userpage</h1>
        </Link>
        <Link href="/cardpage" className="hover:text-red-600 transition-all">
          <h1>Cardpage</h1>
        </Link>
        <Link
          href="/cardpage/add"
          className="hover:text-red-600 transition-all"
        >
          <h1>Add Anime</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
