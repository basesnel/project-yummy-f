import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  logout,
  refreshUser,
  verify,
  updateUser,
  userSubscribe,
  getStore,
  patchStore,
} from './operations';

const initialState = {
  user: { name: null, email: null, verify: null },
  token: null,
  error: null,
  isLoggedIn: false,
  isVerify: false,
  isRefreshing: true,
  subscribeMessage: false,
  store: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.pending, (state, action) => state)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = null;
        state.isVerify = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
        state.isVerify = false;
      })
      .addCase(login.pending, (state, action) => state)
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isVerify = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.isVerify = false;
      })
      .addCase(logout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(verify.pending, (state, action) => state)
      .addCase(verify.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(verify.rejected, (state, action) => state)
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(userSubscribe.fulfilled, (state, { payload }) => {
        state.user.subscription = payload.subscription;
        state.error = null;
        state.subscribeMessage = true;
      })
      .addCase(userSubscribe.rejected, (state, { payload }) => {
        state.error = payload;
        state.subscribeMessage = false;
      })
      .addCase(getStore.pending, (state, action) => state)
      .addCase(getStore.fulfilled, (state, { payload }) => {
        state.store = payload;
        state.error = null;
      })
      .addCase(getStore.rejected, (state, { payload }) => {
        state.error = payload;
        state.store = null;
      })
      .addCase(patchStore.pending, (state, action) => state)
      .addCase(patchStore.fulfilled, (state, { payload }) => {
        state.store = payload;
        state.error = null;
      })
      .addCase(patchStore.rejected, (state, { payload }) => {
        state.error = payload;
        state.store = null;
      }),
});

export const authReducer = authSlice.reducer;
