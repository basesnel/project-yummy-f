import { useEffect, useState } from 'react';
//import getRecipeById from 'api/recipeById';
import { useParams } from 'react-router';
import API from 'api';
import { RecipePageHero } from 'components/RecipePageHero/RecipePageHero';
import { RecipeIngredientsList } from 'components/RecipeIngredientsList/RecipeIngredientsList';
import { RecipePreparation } from 'components/RecipePreparation/RecipePreparation';
import ThemeWrap from 'components/SharedLayout/SharedLayoutStyled';
import { FooterBgWrapper } from 'components/FooterBgWrapper/FooterBgWrapper.styled';

const RecipePage = () => {
  // const navigate = useNavigate();
  const { recipeId } = useParams();
  // const [recipe, setRecipe] = useState(null);
  //const [hero, setHero] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [preparation, setPreparation] = useState('');
  const [title, setTitle] = useState('');
  const [descr, setDescr] = useState('');
  const [time, setTime] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    //console.log(recipeId);
    const getRecipe = async recipeId => {
      try {
        const recipe = await API.getRecipeById(recipeId);
        console.log(recipe);
        //  setRecipe(recipe);
        setTitle(recipe.title);
        setDescr(recipe.description);
        setTime(recipe.time);
        setIsFavorite(recipe.favorite ? true : false);
        setIngredients(recipe.ingredients);
        setPreparation(recipe.instructions);
        setPhoto(recipe.thumb);
      } catch (error) {
        console.log(error, recipeId);
      }
    };

    getRecipe(recipeId);
  }, [recipeId]);

  function updateIsFavorite(bool) {
    console.log('is doing');
    setIsFavorite(bool);
    console.log('done');
  }

  return (
    <ThemeWrap>
      <FooterBgWrapper>
        <RecipePageHero
          title={title}
          descr={descr}
          time={time}
          isFavorite={isFavorite}
          recipeId={recipeId}
          setIsFavorite={updateIsFavorite}
        />
        <RecipeIngredientsList ingredients={ingredients} recipeId={recipeId} />
        <RecipePreparation instructions={preparation} photo={photo} />
      </FooterBgWrapper>
    </ThemeWrap>
  );
};

export default RecipePage;
