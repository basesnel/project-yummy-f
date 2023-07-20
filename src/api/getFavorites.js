import axios from 'axios';
import { baseUrl } from 'constants';

axios.defaults.baseURL = baseUrl;

const getFavorites = async ({ page }) => {
  const res = await axios.get(`favorites/?page=${page}`);
  return res.data;
};

export default getFavorites;
