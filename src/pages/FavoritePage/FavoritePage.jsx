import { createTheme } from '@mui/system';
import API from 'api';
import { Container } from 'components/Container/Container';
import ContainerSection from 'components/ContainerSection/ContainerSection';
import { FooterBgWrapper } from 'components/FooterBgWrapper/FooterBgWrapper.styled';
import Loader from 'components/Loader/Loader';
import MyRecipesList from 'components/MyRecipesList/MyRecipesList';
import { Paginator } from 'components/Paginator/Paginator';
import { NoSearchResults } from 'components/SearchPage/NoSearchResults/NoSearchResults';
import ThemeWrap from 'components/SharedLayout/SharedLayoutStyled';
import Title from 'components/Title/Title';

import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

const theme = createTheme({
  palette: {
    primary: {
      main: '#EBF3D4',
    },
  },
});

const FavoritePage = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [removeRecipe, setRemoveRecipe] = useState(false);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);

  useEffect(() => {
    setLoading(true);
    if (removeRecipe) {
      setRemoveRecipe(false);
    }
    const recipes = async () => {
      try {
        const response = await API.getFavorites({ page });
        const data = response.favoriteRecipeInfo;
        setPageQty(response.totalPages);
        setFavoriteRecipes(prevState => [...data]);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (!removeRecipe) {
      recipes();
    }
  }, [removeRecipe, page]);

  const removeRecipeId = async recipeId => {
    // console.log(recipeId);
    try {
      const response = await API.removeFromFavorites(recipeId);
      console.log(response);
      setRemoveRecipe(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  // console.log(favoriteRecipes);

  return (
    <ThemeWrap>
      <FooterBgWrapper>
        <Container>
          <ContainerSection>
            <Title>Favorites</Title>
            {loading && <Loader />}
            {favoriteRecipes.length === 0 ? (
              <NoSearchResults
                text={`Please add something to your favorite dishes`}
              />
            ) : (
              <>
                <MyRecipesList
                  recipes={favoriteRecipes}
                  removeRecipeId={removeRecipeId}
                  pageName="favorite"
                />
                <ThemeProvider theme={theme}>
                  {pageQty > 1 && (
                    <Paginator
                      $pageQty={pageQty}
                      $page={page}
                      $setPage={setPage}
                    />
                  )}
                </ThemeProvider>
              </>
            )}
          </ContainerSection>
        </Container>
      </FooterBgWrapper>
    </ThemeWrap>
  );
};

export default FavoritePage;
