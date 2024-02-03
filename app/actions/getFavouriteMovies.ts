import prisma from '@/app/utils/prismadb';
import getCurrentUser from './getCurrentUser';
import { Movie } from '@prisma/client';

export default async function getFavouriteMovies() {
  try {
    const currentUser = await getCurrentUser();
    if(!currentUser) {
      throw new Error("You must be logged in");
    }

    const favourites: Movie[] = await prisma.movie.findMany({
      where: {
        id: {
          in: currentUser?.favoriteIds
        }
      }
    })
    return favourites;
  } catch (err) {
    console.error(err);
  }
}