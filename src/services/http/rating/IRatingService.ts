import {
  Rating,
  RatingSortedByUserGender,
  RatingsFilteredByUserAge,
  RatingsFilteredByUserLocation,
} from "@/typings/models/rating";

export interface IRatingService {
  getRatingsFilteredByUserSpecificAgeAndMovie(
    movieId: string
  ): Promise<RatingsFilteredByUserAge>;
  getRatingsFilteredByUserSpecificContinentAndMovie(
    movieId: string
  ): Promise<RatingsFilteredByUserLocation>;
  getRatingsSortedByUserGenderAndMovie(
    movieId: string
  ): Promise<RatingSortedByUserGender>;
  createRating(rating: Rating): Promise<Rating>;
}
