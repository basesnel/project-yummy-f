import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  logout,
  refreshUser,
  verify,
  updateUser,
} from './operations';

const initialState = {
  user: { name: null, email: null, verify: null },
  token: null,
  error: null,
  isLoggedIn: false,
  isRefreshing: false,
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
        state.isLoggedIn = action.payload.user.verify;
      })
      .addCase(register.rejected, (state, action) => state)
      .addCase(login.pending, (state, action) => state)
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = action.payload.verify;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
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
        state.user = action.payload;
        state.isLoggedIn = action.payload.verify;
        state.isRefreshing = false;
      })
      .addCase(verify.rejected, (state, action) => state)
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
      }),
});

export const authReducer = authSlice.reducer;
