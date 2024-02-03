"use client"
import React from 'react';
import client from '../utils/prismadb';
import { Movie } from '@prisma/client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { BsFillPlayCircleFill as PlayIcon } from 'react-icons/bs';
import FavouriteButton from './FavouriteButton';

type MovieCardProps = {
  isFavorite: boolean,
  movieData: Movie,
}

const MovieCard: React.FC<MovieCardProps> = ({ movieData, isFavorite }) => {
  const router = useRouter();

  return (
    <div className='group bg-zinc-900 col-span relative h-[12vw] z-20'>
        <Image
          fill
          sizes='auto'
          src={movieData.thumbnailUrl}
          alt='Movie'
          draggable={false}
          className='object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw] z-20'
        />
        <div className='opacity-0 absolute top-0 transition duration-200 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-100 group-hover:opacity-100 group-hover:-translate-y-[6vw] z-20'>
          <Image width={400} height={400} src={movieData.thumbnailUrl} alt='Nextflix movie' draggable={false}
            className='object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw] z-20'
          />
          <div className='z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md'>
            <div className='flex flex-row items-center gap-3 '>
              <PlayIcon 
                className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 rounded-full flex justify-center items-center transition text-white hover:text-red-500"
                onClick={() => router.push(`/watch/${movieData.id}`)} />
              <FavouriteButton movieId={movieData.id} isFavourite={isFavorite} />
            </div>
            <div className='flex flex-row mt-4 gap-2 items-center'>
              <p className='text-white text-[10px] lg:text-sm'>
                Тривалість: {movieData.duration}
              </p>
            </div>
            <div className='flex flex-row mt-4 gap-2 items-center'>
              <p className='text-white text-[10px] lg:text-sm'>
                Жанр: {movieData.genre}
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}
export default MovieCard