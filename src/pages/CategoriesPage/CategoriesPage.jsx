import { Box, Grid, Pagination, styled, useTheme } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Container } from 'components/Container/Container';
import CardCategorie from 'components/CardCategorie/CardCategorie';
import API from 'api';
import Title from 'components/Title/Title';
import CategoriesList from './CategoriesList/CategoriesList';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

const CategoriesPage = () => {
  const navigate = useNavigate();
  const [recipieArr, setRecipieArr] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { categoryName } = useParams();

  // set RecipierArr and url to initial state
  useEffect(() => {
    const oneCategorie = async categoryName => {
      try {
        const res = await API.fetchRecipies(categoryName);
        setRecipieArr(res?.recipes);
        setTotalPages(res?.totalPages);
        setPage(1);
      } catch (err) {
        console.log(err);
      }
    };
    const tempCategoryName =
      categoryName === ':categoryName' ? 'beef' : categoryName;
    oneCategorie(tempCategoryName);
    navigate(`/categories/${tempCategoryName}`);
  }, [categoryName, navigate]);

  const setPageHandler = async (_, value) => {
    setPage(value);
    try {
      const res = await API.fetchRecipies(categoryName, value);
      setRecipieArr(res?.recipes);
    } catch (err) {
      console.log(err);
    }
  };

  // transition to RecipePage
  const chooseRecipe = id => {
    navigate(`/recipe/${id}`);
  };

  return (
    <section>
      <Container>
        <Title>Categories</Title>

        <CategoriesList />

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

        <Pagination
          sx={{
            display: 'flex',
            justifyContent: 'center',
            m: '50px 0 100px',
          }}
          count={totalPages}
          page={page}
          onChange={setPageHandler}
          variant="outlined"
          color="primary"
          size="large"
        />

        {(!recipieArr || !recipieArr.length) && <NotFoundPage />}
      </Container>
    </section>
  );
};

export default CategoriesPage;
