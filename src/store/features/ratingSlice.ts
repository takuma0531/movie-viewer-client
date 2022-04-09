import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ratingService } from "@/services/http/rating/RatingService";
import {
  Rating,
  RatingSortedByUserGender,
  RatingsFilteredByUserAge,
  RatingsFilteredByUserLocation,
} from "@/typings/models/rating";
import { AsyncThunkTypeRating } from "@/enums/asyncThunkType";

interface RatingState {
  rating: Rating;
  ratingSortedByUserGender: RatingSortedByUserGender;
  ratingsFilteredByUserAge: RatingsFilteredByUserAge;
  ratingsFilteredByUserLocation: RatingsFilteredByUserLocation;
}

const initialState: RatingState = {
  rating: {},
  ratingSortedByUserGender: {
    male: 0,
    female: 0,
    unknown: 0,
  },
  ratingsFilteredByUserAge: {
    lte20: 0,
    lte40: 0,
    lte60: 0,
    gte61: 0,
  },
  ratingsFilteredByUserLocation: {
    asia: 0,
    africa: 0,
    europe: 0,
    northAmerica: 0,
    southAmerica: 0,
    oceania: 0,
    antarctica: 0,
  },
};

export const ratingSlice = createSlice({
  name: "rating",
  initialState,
  reducers: {
    replaceRating: (state, action: PayloadAction<Rating>) => {
      state.rating = action.payload;
    },
    replaceRatingSortedByUserGender: (
      state,
      action: PayloadAction<RatingSortedByUserGender>
    ) => {
      state.ratingSortedByUserGender = action.payload;
    },
    replaceRatingsFilteredByUserAge: (
      state,
      action: PayloadAction<RatingsFilteredByUserAge>
    ) => {
      state.ratingsFilteredByUserAge = action.payload;
    },
    replaceRatingsFilteredByUserLocation: (
      state,
      action: PayloadAction<RatingsFilteredByUserLocation>
    ) => {
      state.ratingsFilteredByUserLocation = action.payload;
    },
  },
});

export const {
  replaceRating,
  replaceRatingSortedByUserGender,
  replaceRatingsFilteredByUserAge,
  replaceRatingsFilteredByUserLocation,
} = ratingSlice.actions;

const thunkFunctions = {
  getRatingSortedByUserGender: createAsyncThunk(
    AsyncThunkTypeRating.GET_RATINGS_SORTED_BY_USER_GENDER_AND_MOVIE,
    async (movieId: string, { dispatch }) => {
      const data = await ratingService.getRatingsSortedByUserGenderAndMovie(
        movieId
      );
      if (data) dispatch(replaceRatingSortedByUserGender(data));
    }
  ),
  getRatingsFilteredByUserAge: createAsyncThunk(
    AsyncThunkTypeRating.GET_RATINGS_FILTERED_BY_USER_SPECIFIC_AGE_AND_MOVIE,
    async (movieId: string, { dispatch }) => {
      const data =
        await ratingService.getRatingsFilteredByUserSpecificAgeAndMovie(
          movieId
        );
      if (data) dispatch(replaceRatingsFilteredByUserAge(data));
    }
  ),
  getRatingsFilteredByUserLocation: createAsyncThunk(
    AsyncThunkTypeRating.GET_RATINGS_FILTERED_BY_USER_CONTINENT_AND_MOVIE,
    async (movieId: string, { dispatch }) => {
      const data =
        await ratingService.getRatingsFilteredByUserSpecificContinentAndMovie(
          movieId
        );
      if (data) dispatch(replaceRatingsFilteredByUserLocation(data));
    }
  ),
  createRating: createAsyncThunk(
    AsyncThunkTypeRating.CREATE_RATING,
    async (rating: Rating, { dispatch }) => {
      const data = await ratingService.createRating(rating);
      if (data) dispatch(replaceRating(data));
    }
  ),
};

export const {
  getRatingSortedByUserGender,
  getRatingsFilteredByUserAge,
  getRatingsFilteredByUserLocation,
  createRating,
} = thunkFunctions;

export const selectRating = (state: RootState) => state.rating;
export default ratingSlice.reducer;
