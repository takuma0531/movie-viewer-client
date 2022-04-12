import { Artist } from "../artist";
import { Comment } from "../comment";
import { Director } from "../director";
import { Rating } from "../rating";
import { User } from "../user";

export interface Movie {
  id?: string;
  title: string;
  genre: string;
  description: string;
  thumbnail?: Buffer | string | any;
  director?: Director;
  artists?: Artist[];
  user?: string | User;
  averageRating?: number;
  comments?: Comment[];
  ratings?: Rating[];
}
