import React from 'react'

const VideoTitleContainer = ({title,overview}) => {

  return (
    <div className='pt-36 px-12 absolute text-white bg-gradient-to-b from-black'>
      <h1 className='text-6xl font-bold mb-3'>{title}</h1>
      <h1 className='w-5/12 text-sm text-justify'>{overview}</h1>   

      <div className='mt-4'>
      <button className='bg-white h-10 w-28 rounded-lg text-black hover:bg-opacity-70'> ▶️ Play</button>
      <button className='bg-gray-500 h-10 w-28 rounded-lg ml-2 hover:bg-opacity-60'>More Info</button>
      
      </div>

    </div>

  
  )
}

export default VideoTitleContainer