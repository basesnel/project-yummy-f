import { MainContainer } from 'components/Container/Container.styled';
import MainTitle from 'components/MainTitle/MainTitle';
import AddRecipeForm from 'components/AddRecipeForm/AddRecipeForm';
import ThemeWrap from 'components/SharedLayout/SharedLayoutStyled';
import { FooterBgWrapper } from 'components/FooterBgWrapper/FooterBgWrapper.styled';

const AddRecipePage = () => {
  return (
    <ThemeWrap>
      <FooterBgWrapper>
        <MainContainer>
          <MainTitle title={'Add recipe'} />
          <AddRecipeForm />
        </MainContainer>
      </FooterBgWrapper>
    </ThemeWrap>
  );
};

export default AddRecipePage;
