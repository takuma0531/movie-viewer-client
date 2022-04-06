import { Movie } from "../movie";
import { Rating } from "../rating";
import { User } from "../user";

export interface Comment {
  text?: string;
  movie?: Movie;
  user?: User;
  rating?: Rating;
}
