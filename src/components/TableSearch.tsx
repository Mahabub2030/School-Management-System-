"use client";

import Image from "next/image";

const TableSearch = () => {
  return (
    <div className="flex items-center gap-2 w-full md:w-auto text-sm rounded-full ring-1 ring-gray-300 px-3 py-1">
      <Image src="/search.png" alt="search" width={16} height={16} />
      <input
        type="text"
        placeholder="Search..."
        className="w-[200px] bg-transparent outline-none placeholder-gray-400 text-gray-700"
      />
    </div>
  );
};

export default TableSearch;
