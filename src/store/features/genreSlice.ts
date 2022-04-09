import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { genreService } from "@/services/http/genre/GenreService";
import { Genre } from "@/typings/models/genre";
import { AsyncThunkTypeGenre } from "@/enums/asyncThunkType";

interface GenreState {
  genre: Genre;
  genres: Genre[];
}

const initialState: GenreState = {
  genre: {},
  genres: [],
};

export const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {
    replaceGenre: (state, action: PayloadAction<Genre>) => {
      state.genre = action.payload;
    },
    replaceGenres: (state, action: PayloadAction<Genre[]>) => {
      state.genres = action.payload;
    },
  },
});

export const { replaceGenre, replaceGenres } = genreSlice.actions;

const thunkFunctions = {
  getAllGenres: createAsyncThunk(
    AsyncThunkTypeGenre.GET_ALL_GENRES,
    async (arg: void, { dispatch }) => {
      const data = await genreService.getAllGenres();
      if (data) dispatch(replaceGenres(data));
    }
  ),
  getGenreByName: createAsyncThunk(
    AsyncThunkTypeGenre.GET_GENRE_BY_NAME,
    async (name: string, { dispatch }) => {
      const data = await genreService.getGenreByName(name);
      if (data) dispatch(replaceGenre(data));
    }
  ),
  getGenreById: createAsyncThunk(
    AsyncThunkTypeGenre.GET_GENRE_BY_Id,
    async (genreId: string, { dispatch }) => {
      const data = await genreService.getGenreById(genreId);
      if (data) dispatch(replaceGenre(data));
    }
  ),
};

export const { getAllGenres, getGenreById, getGenreByName } = thunkFunctions;

export const selectGenre = (state: RootState) => state.genre;
export default genreSlice.reducer;
