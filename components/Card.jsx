import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaThumbsUp } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

const Card = ({ result }) => {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 max-sm:w-[90%] max-sm:mx-auto my-2 max-sm:shadow-2xl max-sm:p-4">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          alt="Thumbnail photo"
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 max-sm:rounded-md"
        />
        <div className="p-1">
          <p className="line-clamp-2">{result.overview}</p>
          <h2 className="text-lg font-bold truncate">
            {result.title || result.name}
          </h2>
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-1">
              <FaRegCalendarAlt />
              {result.release_date || result.first_air_date}
            </p>
            <p className="flex items-center gap-1">
              <FaThumbsUp />
              {result.vote_count}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
