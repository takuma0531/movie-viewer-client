import { IGenreService } from "./IGenreService";
import { BaseHttpService } from "../base/BaseHttpService";
import { Genre } from "@/typings/models/genre";

const URL_PATH = {
  GENRE: "genre",
};

const URL_QUERY = {
  NAME: "name",
};

class GenreService extends BaseHttpService implements IGenreService {
  private readonly BASE_ROUTE = "/api/v1/genres";

  public async getAllGenres(): Promise<Genre[] | null> {
    try {
      const { data } = await this.axiosApi.get<Genre[]>(`${this.BASE_ROUTE}`);
      return data;
    } catch (err: any) {
      throw err;
    }
  }

  public async getGenreByName(name: string): Promise<Genre | null> {
    try {
      const { data } = await this.axiosApi.get<Genre>(
        `${this.BASE_ROUTE}/${URL_PATH.GENRE}?${URL_QUERY.NAME}=${name}`
      );
      return data;
    } catch (err: any) {
      throw err;
    }
  }

  public async getGenreById(genreId: string): Promise<Genre | null> {
    try {
      const { data } = await this.axiosApi.get<Genre>(
        `${this.BASE_ROUTE}/${URL_PATH.GENRE}/${genreId}`
      );
      return data;
    } catch (err: any) {
      throw err;
    }
  }
}

export const genreService = new GenreService();
