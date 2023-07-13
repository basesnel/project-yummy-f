import { useEffect, useState } from 'react';
//import getRecipeById from 'api/recipeById';
import { useParams, useNavigation, useNavigate } from 'react-router';
import API from 'api';
import { RecipePageHero } from 'components/RecipePageHero/RecipePageHero';
import { RecipeIngredientsList } from 'components/RecipeIngredientsList/RecipeIngredientsList';
import { RecipePreparation } from 'components/RecipePreparation/RecipePreparation';

const RecipePage = () => {
  const navigate = useNavigate();
  const { recipeId } = useParams();
  // const [recipe, setRecipe] = useState(null);
  const [hero, setHero] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [preparation, setPreparation] = useState('');

  useEffect(() => {
    const getRecipe = async recipeId => {
      try {
        const recipe = await API.getRecipeById(recipeId);
        console.log(recipe);
        //  setRecipe(recipe);
        setHero({
          title: recipe.title,
          descr: recipe.description,
          time: recipe.time,
          isFavorite: recipe.favorite || false,
        });
        setIngredients(recipe.ingredients);
        setPreparation(recipe.instructions);
      } catch (error) {
        console.log(error, recipeId);
      }
    };

    getRecipe(recipeId);
  }, [recipeId]);

  return (
    <>
      <RecipePageHero hero={hero} />
      <RecipeIngredientsList ingredients={ingredients} />
      <RecipePreparation instructions={preparation} />
    </>
  );
};

export default RecipePage;
