import prisma from '@/app/utils/prismadb';
import { Movie } from '@prisma/client';

export default async function getAllMovies() {
  try {
    const movies: Movie[] = await prisma.movie.findMany();
    return movies;
  } catch (err) {
    console.error(err);
  }
}