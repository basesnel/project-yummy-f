// import API from 'api';
import { Container } from 'components/Container/Container';
import ContainerSection from 'components/ContainerSection/ContainerSection';
import MyRecipesList from 'components/MyRecipesList/MyRecipesList';
import ThemeWrap from 'components/SharedLayout/SharedLayoutStyled';
import Title from 'components/Title/Title';

// import { useEffect, useState } from 'react';

const FavoritePage = () => {
  // const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  // useEffect(() => {
  //   const recipes = async () => {
  //     const response = await API.getFavorites();
  //     const data = response.favorites;

  //     setFavoriteRecipes(prevState => [...data]);
  //   };

  //   recipes();
  // }, []);

  // const removeRecipe = async ({ recipeId }) => {
  //   const response = await API.removeFromFavorites(recipeId);
  //   console.log(response);
  // };

  // console.log(favoriteRecipes);

  return (
    <ThemeWrap>
      <Container>
        <ContainerSection>
          <Title>Favorites</Title>
          <MyRecipesList />
        </ContainerSection>
      </Container>
    </ThemeWrap>
  );
};

export default FavoritePage;
