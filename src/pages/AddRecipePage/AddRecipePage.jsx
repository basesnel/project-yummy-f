import { MainContainer } from 'components/Container/Container.styled';
import MainTitle from 'components/MainTitle/MainTitle';
import AddRecipeForm from 'components/AddRecipeForm/AddRecipeForm';

const AddRecipePage = () => {
    return (
        <MainContainer>
            <MainTitle title={'Add recipe'} />
            <AddRecipeForm />
        </MainContainer>
    );
};

export default AddRecipePage;
