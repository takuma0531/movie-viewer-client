import { Movie } from "../movie";

export interface Director {
  name?: string;
  description?: string;
  movies?: Movie[];
}
