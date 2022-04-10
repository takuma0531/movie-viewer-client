import { Movie } from "../movie";

export interface Artist {
  name: string;
  description?: string;
  movies?: string[] | Movie[];
}
