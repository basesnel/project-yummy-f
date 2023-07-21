import { Helmet } from 'react-helmet-async';

import AddRecipeForm from 'components/AddRecipeForm/AddRecipeForm';
import PopularRecipe from 'components/PopularRecipe/PopularRecipe';
import FollowUsSidebar from 'components/FollowUsSidebar/FollowUsSidebar';
import Title from 'components/Title/Title';

import { ContentWrapper } from './AddRecipePage.styled';
import ContainerSection from 'components/ContainerSection/ContainerSection';
import { Container } from 'components/Container/Container';
import ThemeWrap from 'components/SharedLayout/SharedLayoutStyled';
import { FooterBgWrapper } from 'components/FooterBgWrapper/FooterBgWrapper.styled';

const AddRecipePage = () => {
  return (
    <ThemeWrap>
      <FooterBgWrapper>
        <Container>
          <ContainerSection>
            <Helmet>
              <title>Add Recipe</title>
            </Helmet>
            <Title>Add recipe</Title>
            <ContentWrapper>
              <AddRecipeForm />
              <div>
                <FollowUsSidebar />
                <PopularRecipe />
              </div>
            </ContentWrapper>
          </ContainerSection>
        </Container>
      </FooterBgWrapper>
    </ThemeWrap>
  );
};

export default AddRecipePage;
