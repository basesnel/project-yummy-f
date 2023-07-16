import axios from 'axios';
import { baseUrl } from 'constants';

axios.defaults.baseURL = baseUrl;

const fetchRecipesMainPage = async () => {
  const response = await axios.get('api/recipes/main-page');
  return response.data;
};

export default fetchRecipesMainPage;
