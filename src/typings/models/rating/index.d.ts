import { Movie } from "../movie";
import { User } from "../user";

export interface Rating {
  point?: number;
  movie?: Movie;
  user?: User;
}

export interface RatingsFilteredByUserAge {
  lte20: Rating[];
  lte40: Rating[];
  lte60: Rating[];
  gte61: Rating[];
}

export interface RatingsFilteredByUserLocation {
  asia: Rating[];
  africa: Rating[];
  europe: Rating[];
  northAmerica: Rating[];
  southAmerica: Rating[];
  oceania: Rating[];
  antarctica: Rating[];
}

export interface RatingSortedByUserGender {
  male: Rating[];
  female: Rating[];
  unknown: Rating[];
}
