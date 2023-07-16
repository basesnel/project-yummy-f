import axios from 'axios';
import { baseUrl } from 'constants';

axios.defaults.baseURL = baseUrl;

const addToFavorites = async recipeId => {
    const res = await axios.patch(`favorites/${recipeId}`);
    return res.data;
};

export default addToFavorites;
