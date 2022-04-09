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
  reducers: {
    replaceMovie: (state, action: PayloadAction<Movie>) => {
      state.movie = action.payload;
    },
    replaceMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    },
    removeMovie: (state) => {
      state.movie = {
        title: "",
        description: "",
        genre: "",
      };
    },
    removeMovies: (state) => {
      state.movies = [];
    },
  },
});

export const { replaceMovie, replaceMovies, removeMovie, removeMovies } =
  movieSlice.actions;

const thunkFunctions = {
  getAllMovies: createAsyncThunk(
    AsyncThunkTypeMovie.GET_ALL_MOVIES,
    async (arg: void, { dispatch }) => {
      const data = await movieService.getAllMovies();
      if (data) dispatch(replaceMovies(data));
    }
  ),
  getMovieById: createAsyncThunk(
    AsyncThunkTypeMovie.GET_MOVIE_BY_ID,
    async (movieId: string, { dispatch }) => {
      const data = await movieService.getMovieById(movieId);
      if (data) dispatch(replaceMovie(data));
    }
  ),
  getMoviesByTitle: createAsyncThunk(
    AsyncThunkTypeMovie.GET_MOVIES_BY_TITLE,
    async (title: string, { dispatch }) => {
      const data = await movieService.getMoviesByTitle(title);
      if (data) dispatch(replaceMovies(data));
    }
  ),
  getRecentMovies: createAsyncThunk(
    AsyncThunkTypeMovie.GET_RECENT_MOVIES,
    async (limit: string, { dispatch }) => {
      const data = await movieService.getRecentMovies(limit);
      if (data) dispatch(replaceMovies(data));
    }
  ),
  createMovie: createAsyncThunk(
    AsyncThunkTypeMovie.CREATE_MOVIE,
    async (movie: Movie, { dispatch }) => {
      const data = await movieService.createMovie(movie);
      if (data) dispatch(replaceMovie(data));
    }
  ),
  updateMovie: createAsyncThunk(
    AsyncThunkTypeMovie.UPDATE_MOVIE,
    async (movie: Movie, { dispatch }) => {
      const data = await movieService.updateMovie(movie);
      if (data) dispatch(replaceMovie(data));
    }
  ),
  deleteMovie: createAsyncThunk(
    AsyncThunkTypeMovie.DELETE_MOVIE,
    async (movieId: string, { dispatch }) => {
      await movieService.deleteMovie(movieId);
      dispatch(removeMovie());
    }
  ),
};

export const {
  getAllMovies,
  getMovieById,
  getMoviesByTitle,
  getRecentMovies,
  createMovie,
  updateMovie,
  deleteMovie,
} = thunkFunctions;

export const selectMovie = (state: RootState) => state.movie;
export default movieSlice.reducer;
