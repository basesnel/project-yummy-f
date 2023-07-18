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

// {
//   "title": "Vegan Lasagna",
//   "category": "Vegan",
//   "area": "Italian",
//   "instructions": "1) Preheat oven to 180 degrees celcius. \r\n2) Boil vegetables for 5-7 minutes, until soft. Add lentils and bring to a gentle simmer, adding a stock cube if desired. Continue cooking and stirring until the lentils are soft, which should take about 20 minutes. \r\n3) Blanch spinach leaves for a few minutes in a pan, before removing and setting aside. \r\n4) Top up the pan with water and cook the lasagne sheets. When cooked, drain and set aside.\r\n5) To make the sauce, melt the butter and add the flour, then gradually add the soya milk along with the mustard and the vinegar. Cook and stir until smooth and then assemble the lasagne as desired in a baking dish. \r\n6) Bake in the preheated oven for about 25 minutes.",
//   "description": "A plant-based version of the classic Italian dish, made with layers of pasta, tomato sauce, vegan cheese, and vegetables (such as spinach, zucchini, and mushrooms).",
//   "thumb": "https://www.themealdb.com/images/media/meals/rvxxuy1468312893.jpg",
//   "preview": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560404/vnwp682msfb6blsmqqav.jpg",
//   "time": "50",
//   "youtube": "https://www.youtube.com/watch?v=VU8cXvlGbvc",
//   "tags": [
//     "Vegan",
//     "Pasta"
//   ],
// 	"owner": {
//     "$oid": "64b40efc512859a19fff0926"
//   },
//   "ingredients": [
//     {
//       "id": "640c2dd963a319ea671e36f4",
//       "measure": "1 cups"
//     },
//     {
//       "id": "640c2dd963a319ea671e37ae",
//       "measure": "1"
//     },
//     {
//       "id": "640c2dd963a319ea671e379a",
//       "measure": "1 small"
//     },
//     {
//       "id": "640c2dd963a319ea671e36af",
//       "measure": "sprinking"
//     },
//     {
//       "id": "640c2dd963a319ea671e376f",
//       "measure": "150g"
//     },
//     {
//       "id": "640c2dd963a319ea671e370e",
//       "measure": "10"
//     },
//     {
//       "id": "640c2dd963a319ea671e3788",
//       "measure": "35g"
//     },
//     {
//       "id": "640c2dd963a319ea671e36d7",
//       "measure": "4 tablespoons"
//     },
//     {
//       "id": "640c2dd963a319ea671e376d",
//       "measure": "300ml"
//     },
//     {
//       "id": "640c2dd963a319ea671e3727",
//       "measure": "1.5 teaspoons"
//     },
//     {
//       "id": "640c2dd963a319ea671e378e",
//       "measure": "1 teaspoon"
//     }
//   ],
//   "favoritesCounter": 5
// }

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
        const data = await API.fetchMyRecipes({ userId: user.id, page });
        setOwnRecipes(data.result);
        setPageQty(data.totalPages);
      } catch (error) {
        console.log(error);
      }
    };

    if (!removeRecipe) {
      getMyRecipes();
    }
  }, [page, removeRecipe, user.id]);

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
