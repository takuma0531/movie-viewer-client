import { Movie } from "../movie";
import { User } from "../user";

export interface Rating {
  point?: number;
  movie?: Movie;
  user?: User;
}
