import React from 'react'
import { CDN_LINK } from './utils/constants';

const CardMovie = ({nowPlaying}) => {

    const{title,poster_path} = nowPlaying;

  return (
    <div>
        <div className='m-2'>
            <img className='w-400 h-72'
            alt='logo'
            src={CDN_LINK+poster_path} />
        </div>
    </div>
  )
}

export default CardMovie