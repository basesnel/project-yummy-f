import axios from 'axios';
import { baseUrl } from 'constants';

axios.defaults.baseURL = baseUrl;

const getRecipeById = async recipeId => {
  const res = await axios.get(`api/recipes/${recipeId}`);
  return res.data;
};

export default getRecipeById;
