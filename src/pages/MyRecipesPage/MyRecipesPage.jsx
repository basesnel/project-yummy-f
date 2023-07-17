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

const theme = createTheme({
  palette: {
    primary: {
      main: '#EBF3D4',
    },
  },
});

const MyRecipesPage = () => {
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
            <MyRecipesList>
              <MyRecipesItem />
              <MyRecipesItem />
              <MyRecipesItem />
              <MyRecipesItem />
            </MyRecipesList>
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
