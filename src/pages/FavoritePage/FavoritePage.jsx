import { Container } from 'components/Container/Container';
import MainTitle from 'components/MainTitle/MainTitle';
import MyRecipesItem from 'components/MyRecipesItem/MyRecipesItem';
import { WrapperMain } from './FavoritePage.styled';
import MyRecipesList from 'components/MyRecipesList/MyRecipesList';

const FavoritePage = () => {
  return (
    <WrapperMain>
      <Container>
        <MainTitle title="Favorites" />
        <MyRecipesList>
          <MyRecipesItem />
          <MyRecipesItem />
          <MyRecipesItem />
          <MyRecipesItem />
        </MyRecipesList>
      </Container>
    </WrapperMain>
  );
};

export default FavoritePage;
