import React from 'react'
import { useSelector } from 'react-redux'
import ListOfMovies from '../ListOfMovies';




const SecondaryContainer = () => {

  const movieData = useSelector((store)=>store.movies.nowPlayingMovies);
  if(!movieData) return;
 

  return (
    
    <div className='bg-black text-white'>
      <div className='-mt-52 relative z-20'>
     <ListOfMovies title={"Now Playing Movies"} movies={movieData} />
     <ListOfMovies title={"Popular Movies"} movies={movieData} />
     <ListOfMovies title={"Tending Movies"} movies={movieData} />
     <ListOfMovies title={"Horror Movies"} movies={movieData} />
     </div>
    </div>
    
  )
}

export default SecondaryContainer