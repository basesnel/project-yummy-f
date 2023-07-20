import axios from 'axios';
import { baseUrl } from 'constants';

axios.defaults.baseURL = baseUrl;
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

const addRecipe = async obj => {
  try {
    const { data } = await axios.post('recipes/own-recipes', obj);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default addRecipe;
