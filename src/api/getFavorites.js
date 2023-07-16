import axios from 'axios';
import { baseUrl } from 'constants';

axios.defaults.baseURL = baseUrl;

const getFavorites = async () => {
  const res = await axios.get('api/favorites/');
  return res.data;
};

export default getFavorites;
