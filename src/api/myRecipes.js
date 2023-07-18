import axios from 'axios';
import { baseUrl } from 'constants';

axios.defaults.baseURL = baseUrl;

const fetchMyRecipes = async ({userId}) => {
	const response = await axios.get(`recipes/own-recipes/${userId}`);
  return response.data;
};

export default fetchMyRecipes;