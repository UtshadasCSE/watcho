import Results from "@/components/Results";
import React from "react";

const page = async ({ params }) => {
  const searchTerm = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
  );
  const data = await res.json();
  const results = data.results;
  console.log(results);

  return (
    <div className="max-w-6xl mx-auto">
      {/* {results && results.length <= 0(<h2>No results found</h2>)} */}
      {results && <Results results={results} />}
    </div>
  );
};

export default page;