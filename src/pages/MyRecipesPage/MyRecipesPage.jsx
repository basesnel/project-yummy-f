import { ThemeProvider, createTheme } from '@mui/material';

// import MainTitle from 'components/MainTitle/MainTitle';
// import { MyRecipesContainer } from './MyRecipesPage.styled';
// import { MyRecipesContainer, TitleContainer } from './MyRecipesPage.styled';
import { Container } from 'components/Container/Container';

import { Paginator } from 'components/Paginator/Paginator';
import MyRecipesList from 'components/MyRecipesList/MyRecipesList';
import ThemeWrap from 'components/SharedLayout/SharedLayoutStyled';
import Title from 'components/Title/Title';
import ContainerSection from 'components/ContainerSection/ContainerSection';
import { FooterBgWrapper } from 'components/FooterBgWrapper/FooterBgWrapper.styled';
import { useEffect, useState } from 'react';
import API from 'api';
import { useAuth } from 'hooks';
import { NoSearchResults } from 'components/SearchPage/NoSearchResults/NoSearchResults';

const theme = createTheme({
  palette: {
    primary: {
      main: '#EBF3D4',
    },
  },
});

const MyRecipesPage = () => {
  const [ownRecipes, setOwnRecipes] = useState([]);
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);
  const [removeRecipe, setRemoveRecipe] = useState(false);

  const { user } = useAuth();

  useEffect(() => {
    if (removeRecipe) {
      setRemoveRecipe(false);
    }

    const getMyRecipes = async () => {
      try {
        const data = await API.fetchMyRecipes({ userId: user._id, page });
        setOwnRecipes(data.result);
        setPageQty(data.totalPages);
      } catch (error) {
        console.log(error);
      }
    };

    if (!removeRecipe) {
      getMyRecipes();
    }
  }, [page, removeRecipe, user._id]);

  const removeRecipeId = async recipeId => {
    try {
      await API.deleteMyRecipe(recipeId);
      setRemoveRecipe(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeWrap>
      <FooterBgWrapper>
        {/* <MyRecipesContainer> */}
        <Container>
          <ContainerSection>
            <Title>My recipes</Title>
            {/* <TitleContainer>
	            <MainTitle title="My recipes" />
	          </TitleContainer> */}
            {ownRecipes.length !== 0 ? (
              <>
                <MyRecipesList
                  recipes={ownRecipes}
                  removeRecipeId={removeRecipeId}
                  pageName="my"
                />
                <ThemeProvider theme={theme}>
                  {pageQty !== 1 && (
                    <Paginator
                      $pageQty={pageQty}
                      $page={page}
                      $setPage={setPage}
                    />
                  )}
                </ThemeProvider>
              </>
            ) : (
              <NoSearchResults text={`You have not created any recipe`} />
            )}
          </ContainerSection>
        </Container>
        {/* </MyRecipesContainer> */}
      </FooterBgWrapper>
    </ThemeWrap>
  );
};

export default MyRecipesPage;
