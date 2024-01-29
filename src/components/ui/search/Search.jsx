"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const pathName = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);

  params.set("page", 1);

  const handleOnChange = useDebouncedCallback((e) => {
    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathName}? ${params}`);
  }, 300);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleOnChange}
        className="p-2"
      />
    </div>
  );
};

export default Search;
