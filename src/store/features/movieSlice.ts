import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { movieService } from "@/services/http/movie/MovieService";
import { Movie } from "@/typings/models/movie";
import { AsyncThunkTypeMovie } from "@/enums/asyncThunkType";

interface MovieState {
  movie: Movie;
  movies: Movie[];
}

const initialState: MovieState = {
  movie: {
    title: "",
    description: "",
    genre: "",
  },
  movies: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
});

const thunkFunctions = {};

export const {} = thunkFunctions;

export const selectMovie = (state: RootState) => state.movie;
export default movieSlice.reducer;
