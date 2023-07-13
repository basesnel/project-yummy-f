import { ThemeProvider, createTheme } from '@mui/material';

import MainTitle from 'components/MainTitle/MainTitle';
import { MyRecipesContainer, TitleContainer } from './MyRecipesPage.styled';
import { Container } from 'components/Container/Container';

import { Paginator } from 'components/Paginator/Paginator';
import MyRecipesList from 'components/MyRecipesList/MyRecipesList';
import MyRecipesItem from 'components/MyRecipesItem/MyRecipesItem';

const theme = createTheme({
  palette: {
    primary: {
      main: '#EBF3D4',
    },
  },
});

const MyRecipesPage = () => {
  return (
    <MyRecipesContainer>
      <Container>
        <TitleContainer>
          <MainTitle title="My recipes" />
        </TitleContainer>
        <MyRecipesList>
          <MyRecipesItem />
          <MyRecipesItem />
          <MyRecipesItem />
          <MyRecipesItem />
        </MyRecipesList>
        <ThemeProvider theme={theme}>
          <Paginator />
        </ThemeProvider>
      </Container>
    </MyRecipesContainer>
  );
};

export default MyRecipesPage;
