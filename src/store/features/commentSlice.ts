import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { commentService } from "@/services/http/comment/CommentService";
import { Comment } from "@/typings/models/comment";
import { AsyncThunkTypeComment } from "@/enums/asyncThunkType";

interface CommentState {
  comment: Comment;
}

const initialState: CommentState = {
  comment: {},
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    replaceComment: (state, action: PayloadAction<Comment>) => {
      state.comment = action.payload;
    },
    removeComment: (state) => {
      state.comment = {};
    },
  },
});

export const { replaceComment, removeComment } = commentSlice.actions;

const thunkFunctions = {
  getCommentById: createAsyncThunk(
    AsyncThunkTypeComment.GET_COMMENT_BY_ID,
    async (commentId: string, { dispatch }) => {
      const data = await commentService.getCommentById(commentId);
      if (data) dispatch(replaceComment(data));
    }
  ),
  createComment: createAsyncThunk(
    AsyncThunkTypeComment.CREATE_COMMENT,
    async (comment: Comment, { dispatch }) => {
      const data = await commentService.createComment(comment);
      if (data) dispatch(replaceComment(data));
    }
  ),
  deleteComment: createAsyncThunk(
    AsyncThunkTypeComment.DELETE_COMMENT,
    async (commentId: string, { dispatch }) => {
      await commentService.deleteComment(commentId);
      dispatch(removeComment());
    }
  ),
};

export const { getCommentById, createComment, deleteComment } = thunkFunctions;

export const selectComment = (state: RootState) => state.comment;
export default commentSlice.reducer;
