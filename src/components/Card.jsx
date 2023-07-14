import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({name, image, artist, id}) => {

  
  return (
    <Link to={`/podcast/${id}`} >
      <div className="border-box flex flex-wrap">
        <div className="border-box flex flex-col shadow-md h-180 w-250">
          <img src={image} className="rounded-full object-contain mx-auto h-120 w-120" alt="" />
          <div className="border-box h-30 p-4 w-60">
          <h3 className='text-black text-center text-base truncate'>{name.length < 25 ? name : `${name.substring(0, 25)}...`}</h3>
          <p  className='text-sm text-center truncate'>Author: {artist.length < 25 ? artist : `${artist.substring(0, 20)}...`}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card