import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { commentService } from "@/services/http/comment/CommentService";
import { Comment } from "@/typings/models/comment";
import { AsyncThunkTypeComment } from "@/enums/asyncThunkType";

interface CommentState {
  comment: Comment;
  comments: Comment[];
}

const initialState: CommentState = {
  comment: {},
  comments: [],
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
});

export const {} = commentSlice.actions;

const thunkFunctions = {};

export const {} = thunkFunctions;

export const selectComment = (state: RootState) => state.comment;
export default commentSlice.reducer;
