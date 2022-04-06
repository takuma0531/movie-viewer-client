import { Comment } from "../comment";
import { Rating } from "../rating";
import { User } from "../user";

export interface Movie {
  id?: string;
  title: string;
  genre: string;
  description: string;
  thumbnail?: Buffer | string;
  director?: string;
  artists?: string[];
  user?: string | User;
  averageRating?: number;
  comments?: Comment[];
  ratings?: Rating[];
}
