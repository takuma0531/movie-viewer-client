import { configureStore } from "@reduxjs/toolkit";
import {
  commentReducer,
  genreReducer,
  movieReducer,
  ratingReducer,
  userReducer,
} from "./features";

const store = configureStore({
  reducer: {
    comment: commentReducer,
    genre: genreReducer,
    movie: movieReducer,
    rating: ratingReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
