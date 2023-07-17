import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Container } from 'components/Container/Container';
import {
  CategoriesBox,
  CategoriesList,
  OtherBtn,
  PreviewCategoriesWrapper,
  RecipesLink,
  RecipesList,
  SeeAllBtn,
} from './PreviewCategories.styled';

import plug from 'assets/images/PreviewCategories/1.jpg';
import { SIZE } from 'constants';
import API from 'api';
import Loader from 'components/Loader/Loader';
import { CardContent, styled } from '@mui/material';

export function PreviewCategories() {
  const [amountRecipe, setAmountRecipe] = useState(0);
  const [mainPageRecipes, setMainPageRecipes] = useState({});

  const isMobileScreen = useMediaQuery({ maxWidth: 767 });
  const isTabletScreen = useMediaQuery({
    minWidth: SIZE.tablet,
    maxWidth: 1439,
  });
  const isDesktopScreen = useMediaQuery({ minWidth: SIZE.desktop });

  useEffect(() => {
    const mainListRecipes = async () => {
      try {
        setMainPageRecipes(await API.fetchRecipesMainPage());
      } catch (error) {
        console.log(error);
      }
    };
    mainListRecipes();
  }, []);

  useEffect(() => {
    function resize() {
      if (isMobileScreen) {
        return 1;
      }

      if (isTabletScreen) {
        return 2;
      }

      if (isDesktopScreen) {
        return 4;
      }
    }

    setAmountRecipe(resize());
  }, [isDesktopScreen, isMobileScreen, isTabletScreen]);

  const CardWrap = styled(CardContent)(({ theme }) => ({
    backgroundColor: theme.palette.background.input,
    color: theme.palette.text.secondary,
  }));
  return (
    <PreviewCategoriesWrapper>
      <Container>
        <CategoriesBox>
          {Object.keys(mainPageRecipes).length !== 0 ? (
            <CategoriesList>
              {Object.keys(mainPageRecipes).map(name => {
                return (
                  <li key={name}>
                    <h2>{name}</h2>
                    {mainPageRecipes[name] && (
                      <RecipesList>
                        {mainPageRecipes[name]
                          .slice(0, amountRecipe)
                          .map(recipe => {
                            return (
                              <li key={recipe._id}>
                                <RecipesLink
                                  onClick={() => {
                                    window.scrollTo({
                                      top: 0,
                                      behavior: 'smooth',
                                    });
                                  }}
                                  to={`/recipe/${recipe._id}`}
                                >
                                  <img
                                    src={recipe.preview ? recipe.preview : plug}
                                    alt={recipe.title}
                                  />
                                  <CardWrap>
                                    <h3>{recipe.title}</h3>
                                  </CardWrap>
                                </RecipesLink>
                              </li>
                            );
                          })}
                      </RecipesList>
                    )}

                    <SeeAllBtn
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      to={`/categories/${name.toLowerCase()}`}
                    >
                      See all
                    </SeeAllBtn>
                  </li>
                );
              })}
            </CategoriesList>
          ) : (
            <Loader />
          )}

          <OtherBtn
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            to="/categories/beef"
          >
            Other categories
          </OtherBtn>
        </CategoriesBox>
      </Container>
    </PreviewCategoriesWrapper>
  );
}
