import { Movie } from "../movie";

export interface User {
  email?: string;
  password?: string;
  name?: string;
  country?: string;
  continent?: string;
  role?: number;
  age?: number;
  gender?: number;
  movies?: Movie[];
  authResult?: AuthorizedResult;
}

export interface AuthorizedResult {
  token?: string | null;
  expireIn?: any;
  isAuthorized: boolean;
}
