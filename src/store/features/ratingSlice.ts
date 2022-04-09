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
  reducers: {},
});

export const {} = ratingSlice.actions;

const thunkFunctions = {};

export const {} = thunkFunctions;

export const selectRating = (state: RootState) => state.rating;
export default ratingSlice.reducer;
