import { Movie } from "../movie";

export interface Genre {
  id?: string;
  name?: string;
  movies?: Movie[];
}
