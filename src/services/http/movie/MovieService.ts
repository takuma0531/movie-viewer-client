import { IRatingService } from "../rating/IRatingService";
import { BaseHttpService } from "../base/BaseHttpService";
import { Movie } from "@/typings/models/movie";
import { IMovieService } from "./IMovieService";

const URL_PATH = {
  MOVIE: "movie",
  SEARCH: "search",
  RECENT: "recent",
};

const URL_QUERY = {
  TITLE: "title",
  LIMIT: "limit",
};

class MovieService extends BaseHttpService implements IMovieService {
  private readonly BASE_ROUTE = "/api/v1/movies";

  public async getAllMovies(): Promise<Movie[] | null> {
    try {
      const { data } = await this.axiosApi.get<Movie[]>(`${this.BASE_ROUTE}`);
      return data;
    } catch (err: any) {
      throw err;
    }
  }

  public async getMovieById(movieId: string): Promise<Movie> {
    try {
      const { data } = await this.axiosApi.get<Movie>(
        `${this.BASE_ROUTE}/${URL_PATH.MOVIE}/${movieId}`
      );
      return data;
    } catch (err: any) {
      throw err;
    }
  }

  public async getMoviesByTitle(title: string): Promise<Movie[] | null> {
    try {
      const { data } = await this.axiosApi.get<Movie[]>(
        `${this.BASE_ROUTE}/${URL_PATH.SEARCH}?${URL_QUERY.TITLE}=${title}`
      );
      return data;
    } catch (err: any) {
      throw err;
    }
  }

  public async getRecentMovies(limit: string): Promise<Movie[] | null> {
    try {
      const { data } = await this.axiosApi.get<Movie[]>(
        `${this.BASE_ROUTE}/${URL_PATH.RECENT}?${URL_QUERY.LIMIT}=${limit}`
      );
      return data;
    } catch (err: any) {
      throw err;
    }
  }

  public async createMovie(movie: Movie): Promise<Movie> {
    try {
      this.setToken();
      const { data } = await this.axiosApi.post<Movie>(
        `${this.BASE_ROUTE}`,
        movie
      );
      return data;
    } catch (err: any) {
      throw err;
    }
  }

  public async updateMovie(movie: Movie): Promise<Movie> {
    try {
      this.setToken();
      const { data } = await this.axiosApi.put<Movie>(
        `${this.BASE_ROUTE}`,
        movie
      );
      return data;
    } catch (err: any) {
      throw err;
    }
  }

  public async deleteMovie(movieId: string): Promise<void> {
    try {
      this.setToken();
      await this.axiosApi.delete<void>(`${this.BASE_ROUTE}/${movieId}`);
    } catch (err: any) {
      throw err;
    }
  }
}

export const movieService = new MovieService();
