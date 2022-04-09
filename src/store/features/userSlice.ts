import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { userService } from "@/services/http/user/UserService";
import { User } from "@/typings/models/user";
import { JwtService } from "@/services/localStorage/JwtService";
import { AsyncThunkTypeUser } from "@/enums/asyncThunkType";

interface UserState {
  user: User;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  user: {},
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    toggleIsAuth: (state) => {
      state.isAuthenticated = !state.isAuthenticated;
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      JwtService.removeToken();
    },
  },
});

export const { updateUser, toggleIsAuth, logoutUser } = userSlice.actions;

const thunkFunctions = {
  registerUser: createAsyncThunk(
    AsyncThunkTypeUser.REGISTER_USER,
    async (user: User, { dispatch }) => {
      const data = await userService.registerUser(user);
      if (data.authResult?.isAuthorized) dispatch(toggleIsAuth());
    }
  ),
  getUserById: createAsyncThunk(
    AsyncThunkTypeUser.GET_USER_BY_ID,
    async (arg: void, { dispatch }) => {
      const data = await userService.getUserById();
      if (data) dispatch(updateUser(data));
    }
  ),
  updateUser: createAsyncThunk(
    AsyncThunkTypeUser.UPDATE_USER,
    async (user: User, { dispatch }) => {
      const data = await userService.updateUser(user);
      if (data) dispatch(updateUser(data));
    }
  ),
  loginUser: createAsyncThunk(
    AsyncThunkTypeUser.LOGIN_USER,
    async (credential: User, { dispatch }) => {
      const data = await userService.loginUser(credential);
      if (data.isAuthorized) dispatch(toggleIsAuth());
    }
  ),
  deleteUser: createAsyncThunk(
    AsyncThunkTypeUser.DELETE_USER,
    async (arg: void, { dispatch }) => {
      await userService.deleteUser();
      dispatch(updateUser({}));
      dispatch(toggleIsAuth());
    }
  ),
  checkAuth: createAsyncThunk(
    AsyncThunkTypeUser.CHECK_AUTH,
    async (arg: void, { dispatch }) => {
      const data = await userService.checkAuth();
      if (data.isAuthorized) dispatch(toggleIsAuth());
    }
  ),
};
