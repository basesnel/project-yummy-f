import AddRecipeForm from 'components/AddRecipeForm/AddRecipeForm';
import PopularRecipe from 'components/PopularRecipe/PopularRecipe';
import FollowUsSidebar from 'components/FollowUsSidebar/FollowUsSidebar';
import ThemeWrap from 'components/SharedLayout/SharedLayoutStyled';
import Title from 'components/Title/Title';
import ContainerSection from 'components/ContainerSection/ContainerSection';
import { Container } from 'components/Container/Container';
import { FooterBgWrapper } from 'components/FooterBgWrapper/FooterBgWrapper.styled';

const AddRecipePage = () => {
  return (
    <ThemeWrap>
      <FooterBgWrapper>
        <Container>
          <ContainerSection>
            <Title>Add recipe</Title>
            <AddRecipeForm />
            <FollowUsSidebar />
            <PopularRecipe />
          </ContainerSection>
        </Container>
      </FooterBgWrapper>
    </ThemeWrap>
  );
};

export default AddRecipePage;
