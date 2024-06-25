import React from "react";
import CardMovie from "./CardMovie";

const ListOfMovies = ({ title, movies }) => {
  return (

    <div className="p-3">
    <h1 className="m-2 text-2xl font-bold">{title}</h1>
    <div className="overflow-x-scroll">
    
      <div className="flex w-max">
        {movies.map((movie)=><CardMovie nowPlaying={movie}/>)}
      </div>
    </div>
    </div>
  );
};

export default ListOfMovies;
