export interface Movie {
  id?: string;
  title: string;
  genre: string;
  description: string;
  thumbnail?: Buffer | string;
  director?: string;
  artists?: string[];
  comments?: string[] | any[];
  ratings?: string[] | any[];
}
