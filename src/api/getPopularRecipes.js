import axios from 'axios';
import { baseUrl } from 'constants';

axios.defaults.baseURL = baseUrl;

const getPopularRecipes = async () => {
  try {
    const { data } = await axios.get('/recipes/recipe/popular-recipe');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getPopularRecipes;
