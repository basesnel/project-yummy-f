import axios from 'axios';
import { baseUrl } from 'constants';

axios.defaults.baseURL = baseUrl;

const toggleProduct = async (id, measure, recipeId) => {
  const res = await axios.patch(`users/shopping-list`, {
    id,
    measure,
    recipeId,
  });
  // console.log('success');
  // console.log(res.status);
  return res.data;
};

export default toggleProduct;
