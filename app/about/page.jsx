import Image from "next/image";
import React from "react";
import { RiMovie2Line } from "react-icons/ri";

export const metadata = {
  title: "About - Watcho",
  description:
    "Your ultimate destination for discovering movies, TV shows, and entertainment! ",
};

const Aboutpage = () => {
  return (
    <div>
      <div className="min-h-screen w-[70%] max-sm:w-[80%] mx-auto flex max-sm:flex-col justify-center items-center ">
        <div className="lg:w-1/2">
          <Image
            src={"/assets/about.jpg"}
            alt=""
            width={500}
            height={500}
            className="rounded-md shadow-custom"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold py-3 flex items-center">
            About
            <RiMovie2Line className="text-amber-500 font-semibold text-2xl ml-3" />
            Watc<span className="text-amber-500">Ho</span>
          </h2>
          <p className="">
            Welcome to Watcho, your one-stop destination for discovering,
            exploring, and celebrating the magic of movies and TV shows! At
            Watcho, we are passionate about storytelling and the impact it has
            on our lives. We aim to create a space where movie enthusiasts,
            binge-watchers, and casual viewers can come together to explore the
            world of entertainment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
