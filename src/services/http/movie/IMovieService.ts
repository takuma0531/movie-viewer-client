import { Movie } from "@/typings/models/movie";

export interface IMovieService {
  getAllMovies(): Promise<Movie[] | null>;
  getMovieById(movieId: string): Promise<Movie>;
  getMoviesByTitle(title: string): Promise<Movie[] | null>;
  getRecentMovies(limit: string): Promise<Movie[] | null>;
  createMovie(movie: Movie): Promise<Movie>;
  updateMovie(movie: Movie): Promise<Movie>;
  deleteMovie(movieId: string): Promise<void>;
}
