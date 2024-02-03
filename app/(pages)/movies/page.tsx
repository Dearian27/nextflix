import getAllMovies from '@/app/actions/getAllMovies';
import getCurrentUser from '@/app/actions/getCurrentUser';
import MoviesList from '@/app/components/MoviesList';
import Navbar from '@/app/components/Navbar'
import { Movie } from '@prisma/client';
import React from 'react'

export default async function Movies() {
  const currentUser = await getCurrentUser();
  const movies: Movie[] | undefined = await getAllMovies();

  return (
    <>
      <Navbar username={currentUser?.name} />
      <div className='pb-40 pt-72'>
        <MoviesList title="Фільми" movies={movies} />
      </div>
    </>
  )
}
