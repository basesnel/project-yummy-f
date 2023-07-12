import MainTitle from 'components/MainTitle/MainTitle';
import { MyRecipesContainer, TitleContainer } from './MyRecipesPage.styled';
import { Container } from 'components/Container/Container';
import { MyRecipesList } from 'components/MyRecipesPage/MyRecipesList';
import { Paginator } from 'components/Paginator/Paginator';

import { ThemeProvider, createTheme } from '@mui/material';

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
        <MyRecipesList />
        <ThemeProvider theme={theme}>
          <Paginator />
        </ThemeProvider>
      </Container>
    </MyRecipesContainer>
  );
};

export default MyRecipesPage;
