import axios from 'axios';
import { baseUrl } from 'constants';

axios.defaults.baseURL = baseUrl;

const fetchRecipies = async categoryName => {
  // we have to try/catch set on top
  const response = await axios.get(`recipes/category/${categoryName}`);
  return response.data;
};

export default fetchRecipies;
