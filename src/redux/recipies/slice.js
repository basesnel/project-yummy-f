import { createSlice } from '@reduxjs/toolkit';
import { fetchIngredients, fetchCategories } from './operations';

const initialState = {
  ingredients: null,
  categories: null,
  isLoading: false,
  error: null,
};

const recipiesSlice = createSlice({
  name: 'recipies',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchIngredients.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.ingredients = action.payload;
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCategories.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export const recepiesReducer = recipiesSlice.reducer;
