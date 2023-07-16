import fetchCategories from './categories';
import fetchRecipies from './recipies';
import getRecipeById from './recipeById';
import fetchRecipesMainPage from './mainPage';
import getIngredients from './getIngredients';
import addToFavorites from './addToFavorites';
import removeFromFavorites from './removeFromFavorites';
import getFavorites from './getFavorites';

const API = {
  fetchCategories,
  fetchRecipies,
  getRecipeById,
  fetchRecipesMainPage,
  getIngredients,
  addToFavorites,
  removeFromFavorites,
  getFavorites,
};

export default API;
