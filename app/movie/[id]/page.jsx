import Image from "next/image";
import React from "react";
import { FaCalendar, FaCalendarAlt, FaMoneyBillAlt } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";

const page = async ({ params }) => {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();
  console.log(movie);

  return (
    <div>
      <div className="flex max-sm:flex-col  h-[80%] justify-center lg:my-20 gap-3 max-w-6xl max-sm:w-[90%] mx-auto">
        <div className="md:w-1/2 lg:w-1/2">
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              movie.backdrop_path || movie.poster_path
            }`}
            alt="Thumbnail"
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2 lg:w-1/2">
          <h2 className="text-2xl font-bold py-2">{movie.original_title}</h2>
          <p>{movie.overview}</p>
          <p className="flex items-center gap-2 my-4">
            <FaThumbsUp />
            {movie.vote_count}
          </p>
          <h2 className="text-lg font-semibold underline underline-offset-2 decoration-amber-500 rounded-md">
            Other Details:
          </h2>
          <div className="my-4 grid grid-cols-2 max-sm:grid-cols-1 gap-3">
            <p className="flex items-center gap-2">
              Revenue
              <FaMoneyBillAlt className="text-xl" />:{" "}
              {movie.revenue || "Not Found"}
            </p>
            <p className="flex items-center gap-2">
              Budget
              <FaMoneyBillAlt className="text-xl" />:{" "}
              {movie.budget || "Not Found"}
            </p>
            <p className="flex items-center gap-2">
              Release Date
              <FaCalendarAlt className="text-xl" />: {movie.release_date}
            </p>
            <p className="flex items-center gap-2">
              Runtime
              <MdMovie className="text-xl" />: {movie.runtime} Minute
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
