import { IRatingService } from "./IRatingService";
import { BaseHttpService } from "../base/BaseHttpService";
import {
  Rating,
  RatingSortedByUserGender,
  RatingsFilteredByUserAge,
  RatingsFilteredByUserLocation,
} from "@/typings/models/rating";

const URL_PATH = {
  USER_AGE: "movie/user-age",
  USER_CONTINENT: "movie/user-continent",
  uSER_GENDER: "movie/user-gender",
};

const URL_QUERY = {
  MOVIEID: "movieId",
};

class RatingService extends BaseHttpService implements IRatingService {
  private readonly BASE_ROUTE = "/api/v1/ratings";

  public async getRatingsFilteredByUserSpecificAgeAndMovie(
    movieId: string
  ): Promise<RatingsFilteredByUserAge> {
    try {
      const { data } = await this.axiosApi.get<RatingsFilteredByUserAge>(
        `${this.BASE_ROUTE}/${URL_PATH.USER_AGE}?${URL_QUERY.MOVIEID}=${movieId}`
      );
      return data;
    } catch (err: any) {
      throw err;
    }
  }

  public async getRatingsFilteredByUserSpecificContinentAndMovie(
    movieId: string
  ): Promise<RatingsFilteredByUserLocation> {
    try {
      const { data } = await this.axiosApi.get<RatingsFilteredByUserLocation>(
        `${this.BASE_ROUTE}/${URL_PATH.USER_CONTINENT}?${URL_QUERY.MOVIEID}=${movieId}`
      );
      return data;
    } catch (err: any) {
      throw err;
    }
  }

  public async getRatingsSortedByUserGenderAndMovie(
    movieId: string
  ): Promise<RatingSortedByUserGender> {
    try {
      const { data } = await this.axiosApi.get<RatingSortedByUserGender>(`
        ${this.BASE_ROUTE}/${URL_PATH.uSER_GENDER}?${URL_QUERY.MOVIEID}=${movieId}`);
      return data;
    } catch (err: any) {
      throw err;
    }
  }

  public async createRating(rating: Rating): Promise<Rating> {
    try {
      this.setToken();
      const { data } = await this.axiosApi.post<Rating>(
        `${this.BASE_ROUTE}`,
        rating
      );
      return data;
    } catch (err: any) {
      throw err;
    }
  }
}

export const ratingService = new RatingService();
