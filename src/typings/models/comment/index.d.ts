import { Movie } from "../movie";
import { Rating } from "../rating";
import { User } from "../user";

export interface Comment {
  text?: string;
  movie?: Movie | string;
  user?: User | string;
  rating?: Rating | string;
}
