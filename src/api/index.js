import fetchCategories from './categories';
import fetchRecipies from './recipies';
import getRecipeById from './recipeById';
import fetchRecipesMainPage from './mainPage';

import getIngredients from './getIngredients';
import addToFavorites from './addToFavorites';
import removeFromFavorites from './removeFromFavorites';
import getFavorites from './getFavorites';

import fetchSearchResults from './search';

import toggleProduct from './checkInShoppingList';

const API = {
  fetchCategories,
  fetchRecipies,
  getRecipeById,
  fetchRecipesMainPage,
  getIngredients,
  addToFavorites,
  removeFromFavorites,
  getFavorites,

  fetchSearchResults,

  toggleProduct,
};

export default API;
