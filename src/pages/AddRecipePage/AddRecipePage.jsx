import { MainContainer } from 'components/Container/Container.styled';
// import MainTitle from 'components/MainTitle/MainTitle';
import AddRecipeForm from 'components/AddRecipeForm/AddRecipeForm';
import ThemeWrap from 'components/SharedLayout/SharedLayoutStyled';
import Title from 'components/Title/Title';

const AddRecipePage = () => {
  return (
    <ThemeWrap>
      <MainContainer>
        {/* <MainTitle title={'Add recipe'} /> */}
        <Title>Add recipe</Title>
        <AddRecipeForm />
      </MainContainer>
    </ThemeWrap>
  );
};

export default AddRecipePage;
