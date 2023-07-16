import axios from 'axios';
import { baseUrl } from 'constants';

axios.defaults.baseURL = baseUrl;

const fetchCategories = async () => {
  const response = await axios.get('recipes/category-list');
  return response.data;
};

export default fetchCategories;
