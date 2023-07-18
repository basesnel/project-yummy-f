import { ThemeProvider, createTheme } from '@mui/material';

// import MainTitle from 'components/MainTitle/MainTitle';
// import { MyRecipesContainer } from './MyRecipesPage.styled';
// import { MyRecipesContainer, TitleContainer } from './MyRecipesPage.styled';
import { Container } from 'components/Container/Container';

import { Paginator } from 'components/Paginator/Paginator';
import MyRecipesList from 'components/MyRecipesList/MyRecipesList';
import MyRecipesItem from 'components/MyRecipesItem/MyRecipesItem';
import ThemeWrap from 'components/SharedLayout/SharedLayoutStyled';
import Title from 'components/Title/Title';
import ContainerSection from 'components/ContainerSection/ContainerSection';
import { FooterBgWrapper } from 'components/FooterBgWrapper/FooterBgWrapper.styled';
import { useEffect, useState } from 'react';
import API from 'api';
import { useAuth } from 'hooks';

const theme = createTheme({
  palette: {
    primary: {
      main: '#EBF3D4',
    },
  },
});

const MyRecipesPage = () => {
  const [ownRecipes, setOwnRecipes] = useState();
  const [page, setPage] = useState(1);
  const [AllPage, setAllPage] = useState(0);

  const { user } = useAuth();

  useEffect(() => {
    const getMyRecipes = async () => {
      try {
        const res = await API.fetchMyRecipes({ userId: user.id });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getMyRecipes();
  });
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
            {/* <MyRecipesList>
              <MyRecipesItem />
            </MyRecipesList> */}
            <ThemeProvider theme={theme}>
              <Paginator />
            </ThemeProvider>
          </ContainerSection>
        </Container>
        {/* </MyRecipesContainer> */}
      </FooterBgWrapper>
    </ThemeWrap>
  );
};

export default MyRecipesPage;
