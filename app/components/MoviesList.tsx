import { Movie } from '@prisma/client'
import React from 'react'
import getCurrentUser from '../actions/getCurrentUser';
import MovieCard from './MovieCard';

type MoviesListProps = {
  title: string,
  movies: Movie[] | undefined,
}

const MoviesList: React.FC<MoviesListProps> = async ({ title, movies}) => {
  const currentUser = await getCurrentUser();

  return (
    <div className='px-4 md:px-12  mt-4 space-y-8'>
      <p className='text-white text-md md:text-xl lg:text-2xl font-semibold md-4 z-0'>
        {title}
      </p>
      <div className='grid grid-cols-4 gap-2'>
        {movies?.map((movie) => {
          const isFavouriteMovie = currentUser?.favoriteIds.includes(movie.id) || false;
         return <MovieCard
            key={movie.id}
            movieData={movie}
            isFavorite={isFavouriteMovie}
          /> 
        })}
      </div>
    </div>
  )
}

export default MoviesList