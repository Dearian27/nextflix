import getCurrentUser from '@/app/actions/getCurrentUser';
import getFavouriteMovies from '@/app/actions/getFavouriteMovies';
import MoviesList from '@/app/components/MoviesList';
import Navbar from '@/app/components/Navbar'
import React from 'react'

export default async function Favourites() {
  const movies = await getFavouriteMovies();
  const currentUser = await getCurrentUser();

  return (
    <>
      <Navbar username={currentUser?.name} />
      <div className='pb-40 pt-72'>
        <MoviesList title="Улюблені" movies={movies} />
      </div>
    </>
  )
}
