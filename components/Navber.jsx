import React from "react";
import NavbarItem from "./NavbarItem";

const Navber = () => {
  return (
    <div className="flex justify-center items-center gap-6 bg-amber-300 dark:bg-amber-600  p-4">
      <NavbarItem title="Top Rated" param="fetchTopRated" />
      <NavbarItem title="Trending" param="fetchTrending" />
    </div>
  );
};

export default Navber;
