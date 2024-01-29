"use client";

import style from "./pagination.module.scss";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count }) => {
  const pathName = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  const page = searchParams.get("page") || 1;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathName}?${params}`);
  };

  return (
    <div>
      <div className="flex justify-between ">
        <button
          className={`${style.button}join-item btn btn-outline`}
          disabled={!hasPrev}
          onClick={() => handleChangePage("prev")}
        >
          Prev page
        </button>
        <button
          className={`${style.button}join-item btn btn-outline`}
          disabled={!hasNext}
          onClick={() => handleChangePage("next")}
        >
          Next page
        </button>
      </div>
    </div>
  );
};

export default Pagination;
