"use client";

import React from "react";
import { useEffect } from "react";

const error = ({ error, reset }) => {
  console.log(error);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className=" flex flex-col justify-center items-center gap-3 py-8">
      <p>Something went wrong! Please try again later</p>
      <button
        onClick={() => reset()}
        className="bg-amber-500 px-3 py-2 rounded"
      >
        Try again
      </button>
    </div>
  );
};

export default error;
