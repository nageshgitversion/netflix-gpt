import { OPTIONS } from "../constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../movieSlice";
import { useEffect } from "react";

const useNowPlayingMoives = ()=>{

    const dispatch = useDispatch();

  const fetchMovieList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      OPTIONS
    );
    const response = await data.json();
    const result = response.results;
    dispatch(addNowPlayingMovies(result))
  };

  useEffect(() => {
    fetchMovieList();
  }, []);
}

export default useNowPlayingMoives;