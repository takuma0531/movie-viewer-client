import { Genre } from "@/typings/models/genre";

export interface IGenreService {
  getAllGenres(): Promise<Genre[] | null>;
  getGenreByName(name: string): Promise<Genre | null>;
  getGenreById(genreId: string): Promise<Genre | null>;
}
