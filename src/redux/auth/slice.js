import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshUser, verify } from './operations';

const initialState = {
  user: { name: null, email: null, verify: null },
  token: null,
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
      })
      .addCase(login.rejected, (state, action) => state)
      .addCase(logout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isLoggedIn = true;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
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
      .addCase(verify.rejected, (state, action) => state),
});

export const authReducer = authSlice.reducer;
