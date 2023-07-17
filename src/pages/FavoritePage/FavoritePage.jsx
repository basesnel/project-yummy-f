import { Container } from 'components/Container/Container';
import ContainerSection from 'components/ContainerSection/ContainerSection';
// import MainTitle from 'components/MainTitle/MainTitle';
import MyRecipesItem from 'components/MyRecipesItem/MyRecipesItem';
import MyRecipesList from 'components/MyRecipesList/MyRecipesList';
import ThemeWrap from 'components/SharedLayout/SharedLayoutStyled';
import Title from 'components/Title/Title';

const FavoritePage = () => {
  return (
    <ThemeWrap>
      <Container>
        <ContainerSection>
          <Title>Favorites</Title>
          <MyRecipesList>
            <MyRecipesItem />
            <MyRecipesItem />
            <MyRecipesItem />
            <MyRecipesItem />
          </MyRecipesList>
        </ContainerSection>
      </Container>
    </ThemeWrap>
  );
};

export default FavoritePage;
