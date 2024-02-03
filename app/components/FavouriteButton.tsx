import axios from 'axios';
import React, { useState } from 'react'
import  { AiOutlineCheck as CheckIcon, AiOutlinePlus as PlusIcon } from 'react-icons/ai';

type FavouriteButtonProps = {
  movieId: string,
  isFavourite: boolean,
}

const FavouriteButton: React.FC<FavouriteButtonProps> = ({movieId, isFavourite}) => {
  const [isFavouriteMovie, setIsFavouriteMovie] = useState(isFavourite);
  const toggleFavourite = async() => {
    let response;
    if(isFavouriteMovie) {
      response = await axios.delete("/api/favourites", {
        data: { movieId },
      });
    } else {
      response = await axios.post("/api/favourites", { movieId });
    }

    if(response.status === 200) {
      setIsFavouriteMovie(prev => !prev)
    }
  }
  let Icon = isFavouriteMovie ? CheckIcon : PlusIcon
  return (
    <div onClick={toggleFavourite} className='cursor-pointer group/item w-6 h-6 lg:h-10 lg:w-10 bg-white rounded-full flex justify-center items-center transition hover:bg-green-500'>
      <Icon className="text-black text-2xl" />
    </div>
  )
}

export default FavouriteButton