import axios from 'axios';
import { baseUrl } from 'constants';

axios.defaults.baseURL = baseUrl;

export const fetchMyRecipes = async ({ userId, page }) => {
	const response = await axios.get(`recipes/own-recipes/${userId}?page=${page}`);
  return response.data;
};

export const deleteMyRecipe = async (recipeId) => {
	const response = await axios.delete(`recipes/own-recipes/${recipeId}`);
  return response.data;
};
 
