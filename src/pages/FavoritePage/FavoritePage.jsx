import API from 'api';
import { Container } from 'components/Container/Container';
import ContainerSection from 'components/ContainerSection/ContainerSection';
import { FooterBgWrapper } from 'components/FooterBgWrapper/FooterBgWrapper.styled';
import MyRecipesList from 'components/MyRecipesList/MyRecipesList';
import ThemeWrap from 'components/SharedLayout/SharedLayoutStyled';
import Title from 'components/Title/Title';

import { useEffect, useState } from 'react';

const FavoritePage = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [removeRecipe, setRemoveRecipe] = useState(false);

  useEffect(() => {
    if (removeRecipe) {
      setRemoveRecipe(false);
    }
    const recipes = async () => {
      try {
        const response = await API.getFavorites();
        const data = response.favoriteRecipeInfo;
        setFavoriteRecipes(prevState => [...data]);
      } catch (error) {
        console.log(error.message);
      }
    };
    if (!removeRecipe) {
      recipes();
    }
  }, [removeRecipe]);

  const removeRecipeId = async recipeId => {
    try {
      const response = await API.removeFromFavorites(recipeId);
      console.log(response);
      setRemoveRecipe(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(favoriteRecipes);
  console.log(favoriteRecipes.length);

  return (
    <ThemeWrap>
      <FooterBgWrapper>
        <Container>
          <ContainerSection>
            <Title>Favorites</Title>
            {favoriteRecipes.length === 0 ? (
              <Title>Please add something to your favorite dishes</Title>
            ) : (
              <MyRecipesList
                recipes={favoriteRecipes}
                removeRecipeId={removeRecipeId}
              />
            )}
          </ContainerSection>
        </Container>
      </FooterBgWrapper>
    </ThemeWrap>
  );
};

export default FavoritePage;
