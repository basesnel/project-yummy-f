import axios from 'axios';
import { baseUrl } from 'constants';

axios.defaults.baseURL = baseUrl;

const removeFromFavorites = async recipeId => {
  const res = await axios.delete(`api/favorites/${recipeId}`);
  return res.data;
};

export default removeFromFavorites;
