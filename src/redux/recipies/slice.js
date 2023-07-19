import { createSlice } from '@reduxjs/toolkit';
import recipies from 'tempFiles/recipies';

const initialState = {
  ingredientd: null,
};

const recipiesSlice = createSlice({
  name: recipies,
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
      }),
});
