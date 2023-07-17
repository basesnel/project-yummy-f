import { MainContainer } from 'components/Container/Container.styled';
// import MainTitle from 'components/MainTitle/MainTitle';
import AddRecipeForm from 'components/AddRecipeForm/AddRecipeForm';
import ThemeWrap from 'components/SharedLayout/SharedLayoutStyled';
import Title from 'components/Title/Title';
import ContainerSection from 'components/ContainerSection/ContainerSection';
import { Container } from 'components/Container/Container';

const AddRecipePage = () => {
  return (
    <ThemeWrap>
      <Container>
        <ContainerSection>
          <MainContainer>
            {/* <MainTitle title={'Add recipe'} /> */}
            <Title>Add recipe</Title>
            <AddRecipeForm />
          </MainContainer>
        </ContainerSection>
      </Container>
    </ThemeWrap>
  );
};

export default AddRecipePage;
