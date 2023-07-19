import { useSelector } from 'react-redux';
import { selectIngredients } from 'redux/recipies/selectors';

export const useRecipies = () => {
  const ingredients = useSelector(selectIngredients);

  return {
    ingredients,
  };
};
