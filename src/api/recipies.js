import axios from 'axios';
import { baseUrl } from 'constants';

axios.defaults.baseURL = baseUrl;

const fetchRecipies = async (categoryName, page = 1, limit = 8) => {
  // we have to try/catch set on top
  const response = await axios.get(
    `api/recipes/category/${categoryName}?page=${page}&limit=${limit}`
  );
  return response.data;
};

export default fetchRecipies;
