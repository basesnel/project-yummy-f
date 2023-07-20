import axios from 'axios';
import { baseUrl } from 'constants';

axios.defaults.baseURL = baseUrl;

const toggleProduct = async (id, measure, recipeId) => {
  const res = await axios.patch(`users/shopping-list`, {
    id,
    measure,
    recipeId,
  });
  console.log(res);
  function currentShop() {
    if (currentShop.once) return;
    currentShop.once = true;
    if (res?.length) {
      localStorage.setItem('existItem', 1);
    }

    return;
  }
  currentShop();
  // console.log('success');
  // console.log(res.status);
  return res.data;
};

export default toggleProduct;
