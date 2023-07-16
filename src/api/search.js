import axios from 'axios';
import { baseUrl } from 'constants';

axios.defaults.baseURL = baseUrl;

const fetchSearchResults = async ({ directory, selector, query }) => {
  const response = await axios.get(`${directory}/search?${selector}=${query}`);
  return response.data;
};

export default fetchSearchResults;
