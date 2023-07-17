import { Container } from 'components/Container/Container';
import ContainerSection from 'components/ContainerSection/ContainerSection';
import { FooterBgWrapper } from 'components/FooterBgWrapper/FooterBgWrapper.styled';
import MainTitle from 'components/MainTitle/MainTitle';
import MyRecipesItem from 'components/MyRecipesItem/MyRecipesItem';
import MyRecipesList from 'components/MyRecipesList/MyRecipesList';

const FavoritePage = () => {
  return (
    <FooterBgWrapper>
      <ContainerSection>
        <Container>
          <MainTitle title="Favorites" />
          <MyRecipesList>
            <MyRecipesItem />
            <MyRecipesItem />
            <MyRecipesItem />
            <MyRecipesItem />
          </MyRecipesList>
        </Container>
      </ContainerSection>
    </FooterBgWrapper>
  );
};

export default FavoritePage;
