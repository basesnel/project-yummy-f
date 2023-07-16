import axios from 'axios';
import { baseUrl } from 'constants';

axios.defaults.baseURL = baseUrl;

const getIngredients = async () => {
  const res = await axios.get('api/ingredients/list');
  return res.data;
};

export default getIngredients;
