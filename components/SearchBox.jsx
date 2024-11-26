"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  return (
    <div className="max-w-6xl mx-auto p-3 my-3">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          name="searchBox"
          id="searchBox"
          placeholder="Enter your shows name"
          className="placeholder-slate-500 p-2 rounded-md w-full"
        />
        <button
          disabled={!search}
          className="text-white bg-amber-700 p-2 rounded-md"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
