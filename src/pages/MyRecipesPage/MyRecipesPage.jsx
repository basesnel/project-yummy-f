import { Container } from 'components/Container/Container';
import { Helmet } from 'react-helmet-async';

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
import Loader from 'components/Loader/Loader';

const MyRecipesPage = () => {
  const [ownRecipes, setOwnRecipes] = useState([]);
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);
  const [removeRecipe, setRemoveRecipe] = useState(false);

  const [loading, setLoading] = useState(false);

  const { user } = useAuth();

  useEffect(() => {
    setLoading(true);
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
      } finally {
        setLoading(false);
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
      <Helmet>
        <title>My Recipes</title>
      </Helmet>
      <FooterBgWrapper>
        <Container>
          <ContainerSection>
            <Title>My recipes</Title>
            {loading && <Loader />}
            {ownRecipes.length !== 0 && !loading ? (
              <>
                <MyRecipesList
                  recipes={ownRecipes}
                  removeRecipeId={removeRecipeId}
                  pageName="my"
                />
                {pageQty !== 1 && (
                  <Paginator
                    $pageQty={pageQty}
                    $page={page}
                    $setPage={setPage}
                  />
                )}
              </>
            ) : (
              <NoSearchResults text={`You have not created any recipe`} />
            )}
          </ContainerSection>
        </Container>
      </FooterBgWrapper>
    </ThemeWrap>
  );
};

export default MyRecipesPage;
