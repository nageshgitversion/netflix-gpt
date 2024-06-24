import React from 'react'
import { useSelector } from 'react-redux'
import VideoContainer from './VideoContainer'
import VideoTitleContainer from './VideoTitleContainer'

const MainContainer = () => {

    const moviesList = useSelector(store=>store?.movies?.nowPlayingMovies)
    if(!moviesList) return;
    
    const{title,overview,id} = moviesList[0];

    console.log(id)
    
     
  return (
    <div>
     <VideoTitleContainer title={title} overview={overview}/>
     <VideoContainer videoId={id}/>
    </div>
  )
}

export default MainContainer