import { useSelector } from 'react-redux';
import { selectIngredients, selectCategories } from 'redux/recipies/selectors';

export const useRecipies = () => {
  const ingredients = useSelector(selectIngredients);
  const categories = useSelector(selectCategories);

  return {
    ingredients,
    categories,
  };
};
