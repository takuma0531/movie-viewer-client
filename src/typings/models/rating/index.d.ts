import { Movie } from "../movie";
import { User } from "../user";

export interface Rating {
  point?: number;
  movie?: Movie | string;
  user?: User | string;
}

export interface RatingsFilteredByUserAge {
  lte20: number;
  lte40: number;
  lte60: number;
  gte61: number;
}

export interface RatingsFilteredByUserLocation {
  asia: number;
  africa: number;
  europe: number;
  northAmerica: number;
  southAmerica: number;
  oceania: number;
  antarctica: number;
}

export interface RatingSortedByUserGender {
  male: number;
  female: number;
  unknown: number;
}
