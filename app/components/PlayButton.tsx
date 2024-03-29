'use client'
import React from 'react'
import { FaPlay as PlayIcon} from 'react-icons/fa';
import { useRouter } from 'next/navigation';

type PlayButtonProps = {
  movieId: string
}

const PlayButton: React.FC<PlayButtonProps> = ({movieId}) => {
  const router = useRouter();
  return (
    <button onClick={() => router.push(`/watch/${movieId}`)} 
    className='bg-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition gap-1'
    >
      <PlayIcon /> <span className='mb-1'>Дивитись</span>
    </button>
  )
}

export default PlayButton