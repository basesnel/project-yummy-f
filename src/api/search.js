import axios from 'axios';
import { baseUrl } from 'constants';

axios.defaults.baseURL = baseUrl;

const fetchSearchResults = async ({
  directory,
  selector,
  query,
  page,
  cardsPerPage,
}) => {
  const response = await axios.get(
    `${directory}/search?${selector}=${query}&page=${page}&limit=${cardsPerPage}`
  );

  return response.data;
};

export default fetchSearchResults;
