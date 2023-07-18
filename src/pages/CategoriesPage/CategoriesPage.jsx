import { Grid, Pagination, PaginationItem, useTheme } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Container } from 'components/Container/Container';
import CardCategorie from 'components/CardCategorie/CardCategorie';
import API from 'api';
import Title from 'components/Title/Title';
import CategoriesList from './CategoriesList/CategoriesList';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import ThemeWrap from 'components/SharedLayout/SharedLayoutStyled';
import ContainerSection from 'components/ContainerSection/ContainerSection';
import { FooterBgWrapper } from 'components/FooterBgWrapper/FooterBgWrapper.styled';
// import { COLOR } from 'constants';

const CategoriesPage = () => {
  const navigate = useNavigate();
  const [recipieArr, setRecipieArr] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { categoryName } = useParams();
  const [error, setError] = useState(false);

  // set RecipierArr and url to initial state
  useEffect(() => {
    const oneCategorie = async categoryName => {
      try {
        const res = await API.fetchRecipies(categoryName);
        if (res?.recipes) {
          setRecipieArr(res?.recipes);
          setTotalPages(res?.totalPages);
          setPage(1);
          setError(false);
        } else throw new Error('dont find this categories');
      } catch (err) {
        setRecipieArr([]);
        setError(true);
        console.log(err);
      }
    };
    const tempCategoryName =
      categoryName === ':categoryName' ? 'beef' : categoryName;
    oneCategorie(tempCategoryName);
    navigate(`/categories/${tempCategoryName}`);
  }, [categoryName, navigate]);

  const theme = useTheme();

  const setPageHandler = async (_, value) => {
    setPage(value);
    try {
      const res = await API.fetchRecipies(categoryName, value);
      if (res?.recipes) {
        setRecipieArr(res?.recipes);
        setError(false);
      } else throw new Error('dont find this category');
    } catch (err) {
      setRecipieArr([]);
      setError(true);
      console.log(err);
    }
  };

  // transition to RecipePage
  const chooseRecipe = id => {
    navigate(`/recipe/${id}`);
  };

  return (
    <ThemeWrap>
      <FooterBgWrapper>
        <Container>
          <ContainerSection>
            {!error && <Title>Categories</Title>}

            <CategoriesList onError={el => setError(el)} />

            {!error && (
              <Grid
                container
                pt={{ xs: '32px', md: '50px' }}
                mb={{ xs: '60px', md: '100px' }}
                rowSpacing={{ xs: 3.5, md: 4, lg: 12.5 }}
                columnSpacing={{ md: 4, lg: 1.5 }}
              >
                {recipieArr &&
                  recipieArr.length &&
                  recipieArr?.map(({ _id, title, thumb }) => (
                    <Grid item xs={12} md={6} lg={3} key={_id}>
                      <CardCategorie
                        handleRecipe={chooseRecipe}
                        id={_id}
                        title={title}
                        thumb={thumb}
                      ></CardCategorie>
                    </Grid>
                  ))}
              </Grid>
            )}

            {!error && (
              <Pagination
                sx={{
                  width: 'max-content',
                  borderRadius: '26px',
                  p: '12px 18px',
                  m: '50px auto 100px',
                  backgroundColor: theme.palette.background.input,
                }}
                count={totalPages}
                page={page}
                onChange={setPageHandler}
                variant="outlined"
                color="primary"
                size="large"
                renderItem={item => (
                  <PaginationItem
                    sx={{
                      backgroundColor: item.selected
                        ? theme.palette.background.paginator + '!important'
                        : 'transparent',
                      color: item.selected
                        ? theme.palette.paginator.active + '!important'
                        : theme.palette.paginator.inactive,
                      border: 'none !important',
                      fontFamily: 'Poppins',
                      fontSize: '12px',
                      fontWeight: 500,
                      margin: 0,
                    }}
                    {...item}
                  />
                )}
              />
            )}

            {error && <NotFoundPage />}
          </ContainerSection>
        </Container>
      </FooterBgWrapper>
    </ThemeWrap>
  );
};

export default CategoriesPage;
