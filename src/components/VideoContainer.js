import React, { useEffect, useState } from "react";
import { OPTIONS } from "../utils/constants";

const VideoContainer = ({ videoId }) => {

  const[trailerId,setTrailerId]= useState(null);
  const fetchTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        videoId +
        "/videos?language=en-US",
      OPTIONS
    );
    const response = await data.json();
    const trailers = response.results;

    const result = trailers.filter((trailer) => trailer.type === "Trailer");
    const key = result[0].key;
    setTrailerId(key)
    
  };

  useEffect(() => {
    fetchTrailer();
  }, []);

  return (
    <div className="w-screen">
      <iframe className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+ trailerId+"?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoContainer;
