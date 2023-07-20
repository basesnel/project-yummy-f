import addRecipe from './addRecipe';
import fetchCategories from './categories';
import fetchRecipies from './recipies';
import getRecipeById from './recipeById';
import getPopularRecipes from './getPopularRecipes';
import fetchRecipesMainPage from './mainPage';
import { fetchMyRecipes, deleteMyRecipe } from './myRecipes';

import getIngredients from './getIngredients';
import addToFavorites from './addToFavorites';
import removeFromFavorites from './removeFromFavorites';
import getFavorites from './getFavorites';
import getAllFavorites from './getAllFavorites';

import fetchSearchResults from './search';

import toggleProduct from './checkInShoppingList';

const API = {
  addRecipe,
  fetchCategories,
  fetchRecipies,
  getRecipeById,
  fetchRecipesMainPage,
  getIngredients,
  addToFavorites,
  removeFromFavorites,
  getFavorites,
  getAllFavorites,
  getPopularRecipes,
  fetchSearchResults,

  fetchMyRecipes,
  deleteMyRecipe,

  toggleProduct,
};

export default API;
