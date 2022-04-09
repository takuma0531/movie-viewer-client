import { configureStore } from "@reduxjs/toolkit";
import {
  commentReducer,
  movieReducer,
  ratingReducer,
  userReducer,
} from "./features";

const store = configureStore({
  reducer: {
    comment: commentReducer,
    movie: movieReducer,
    rating: ratingReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
